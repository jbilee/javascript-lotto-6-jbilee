import Validate from '../utils/Validate.js';
import { COUNT_INCREMENT, BONUS_CONDITION } from '../constants/constants.js';
import { STRING_SEPARATOR } from '../constants/strings.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validate.numbersLength(numbers);
  }

  matchNumbers(numbersToCompare) {
    let matches = 0;

    for (let i = 0; i < this.#numbers.length; i += 1) {
      if (numbersToCompare.includes(this.#numbers[i])) {
        matches += COUNT_INCREMENT;
      }
    }

    return matches;
  }

  hasBonusMatch(numberOfMatches, bonusNumber) {
    return (
      numberOfMatches === BONUS_CONDITION && this.#numbers.includes(bonusNumber)
    );
  }

  getStringRepresentation() {
    return this.#numbers.join(STRING_SEPARATOR);
  }
}

export default Lotto;
