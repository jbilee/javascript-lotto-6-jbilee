import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import InputView from '../views/InputView.js';
import Validate from '../utils/Validate.js'
import { LOTTO_NUMBERS } from '../constants/constants.js';
import { NUMBER_SEPARATOR } from '../constants/strings.js';

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
      const newTicket = createLotto();
      this.#lottoTickets.push(newTicket);
    }
  }

  async getPurchaseAmount() {
    const purchaseAmount = await InputView.readPurchaseAmount();
    Validate.purchaseAmount(purchaseAmount);
    return Number(purchaseAmount);
  }

  async getWinningNumbers() {
    const winningNumbers = await InputView.readWinningNumbers();
    return winningNumbers.split(NUMBER_SEPARATOR);
  }

  async getBonusNumber() {
    const bonusNumber = await InputView.readBonusNumber();
    Validate.bonusNumber;
    return Number(bonusNumber);
  }
}

export default LottoHandler;
