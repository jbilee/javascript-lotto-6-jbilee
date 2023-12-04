import { Console } from '@woowacourse/mission-utils';
import { STRING_SEPARATOR } from './constants/strings.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getStringRepresentation() {
    return `[${this.#numbers.join(STRING_SEPARATOR)}]`;
  }
}

export default Lotto;