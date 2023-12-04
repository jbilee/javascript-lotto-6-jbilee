import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import InputView from '../views/InputView.js';
import Validate from '../utils/Validate.js'
import { LOTTO_NUMBERS } from '../constants/constants.js';

class LottoHandler {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
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
}

export default LottoHandler;
