import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from '../domains/Lotto.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validate from '../utils/Validate.js';
import {
  LOTTO_NUMBERS,
  MINIMUM_PURCHASE_AMOUNT,
  PRIZES,
} from '../constants/constants.js';
import { PROMPTS } from '../constants/strings.js';
import Scorekeeper from '../domains/Scorekeeper.js';

class LottoHandler {
  #purchasedTickets;
  #scorekeeper;
  #winningTicket;

  constructor() {
    this.#scorekeeper = new Scorekeeper();
    this.#purchasedTickets = [];
  }

  async start() {
    await this.getPurchasedTickets();
    await this.getWinningTicket();

    const matches = this.#scorekeeper.getMatches(
      this.#purchasedTickets,
      this.#winningTicket,
    );
    const profit = this.calculateProfit(matches);

    OutputView.printMatches(matches);
    OutputView.printProfit(profit);
  }

  createLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBERS.min,
        LOTTO_NUMBERS.max,
        LOTTO_NUMBERS.count,
      ).sort((a, b) => a - b),
    );
  }

  handlePurchase(amount) {
    for (let i = 0; i < amount / MINIMUM_PURCHASE_AMOUNT; i += 1) {
      const newTicket = this.createLotto();
      this.#purchasedTickets.push(newTicket);
    }

    OutputView.printTickets(this.#purchasedTickets);
  }

  async getPurchasedTickets() {
    let purchaseAmount;

    do {
      try {
        purchaseAmount = await InputView.getUserInput(PROMPTS.purchaseAmount);
        Validate.purchaseAmount(purchaseAmount);
      } catch ({ name, message }) {
        Console.print(message);
        purchaseAmount = null;
      }
    } while (!purchaseAmount);

    return this.handlePurchase(Number(purchaseAmount));
  }

  async getWinningNumbers() {
    let winningNumbers;

    do {
      try {
        winningNumbers = await InputView.getLottoNumbers(
          PROMPTS.winningNumbers,
        );
        Validate.numbersLength(winningNumbers);
        winningNumbers.forEach((number) => Validate.numberRange(number));
      } catch ({ name, message }) {
        Console.print(message);
        winningNumbers = null;
      }
    } while (!winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber(winningNumbers) {
    let bonusNumber;

    do {
      try {
        bonusNumber = await InputView.getUserInput(PROMPTS.bonusNumber);
        Validate.bonusNumber(bonusNumber, winningNumbers);
      } catch ({ name, message }) {
        Console.print(message);
        bonusNumber = null;
      }
    } while (!bonusNumber);

    return Number(bonusNumber);
  }

  async getWinningTicket() {
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    this.#winningTicket = { winningNumbers, bonusNumber };
  }

  calculateProfit(matches) {
    const spent = this.#purchasedTickets.length * MINIMUM_PURCHASE_AMOUNT;
    const matchKeys = Object.keys(matches);
    let totalPrize = 0;

    for (let i = 0; i < matchKeys.length; i += 1) {
      totalPrize += matches[matchKeys[i]] * PRIZES[[matchKeys[i]]];
    }

    return (totalPrize / spent * 100).toFixed(1);
  }
}

export default LottoHandler;
