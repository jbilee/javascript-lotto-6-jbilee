import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validate from '../utils/Validate.js'
import { LOTTO_NUMBERS, MINIMUM_PURCHASE_AMOUNT } from '../constants/constants.js';
import { NUMBER_SEPARATOR } from '../constants/strings.js';
import { PROMPTS } from '../constants/strings.js';

class LottoHandler {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    const winningNumbers = await this.getWinningNumbers();
  }

  createLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBERS.min,
        LOTTO_NUMBERS.max,
        LOTTO_NUMBERS.count,
      ),
    );
  }

  handlePurchase(amount) {
    for (let i = 0; i < amount / 1000; i += 1) {
      const newTicket = this.createLotto();
      this.#lottoTickets.push(newTicket);
    }

    OutputView.printTickets(this.#lottoTickets);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await InputView.getUserInput(PROMPTS.purchaseAmount);
    Validate.purchaseAmount(purchaseAmount);
    return this.handlePurchase(Number(purchaseAmount));
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.getUserInput(PROMPTS.winningNumbers);
    return winningNumbers.split(NUMBER_SEPARATOR);
  }

  async getBonusNumber() {
    const bonusNumber = await InputView.getUserInput(PROMPTS.bonusNumber);
    Validate.bonusNumber;
    return Number(bonusNumber);
  }
}

export default LottoHandler;
