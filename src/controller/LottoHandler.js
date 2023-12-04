import {Random} from '@woowacourse/mission-utils'
import Lotto from '../Lotto.js';

class LottoHandler {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  createLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumbers);
  }

  handlePurchase(amount) {
    for (let i = 0; i < amount / 1000; i += 1) {
      const newTicket = createLotto();
      this.#lottoTickets.push(newTicket);
    }
  }
}

export default LottoHandler