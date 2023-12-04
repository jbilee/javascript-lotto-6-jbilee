import {Random} from '@woowacourse/mission-utils'
import Lotto from '../Lotto.js';

class LottoHandler {
  this.#lotto;


  createLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#lotto = new Lotto(randomNumbers);
  }
}

export default LottoHandler