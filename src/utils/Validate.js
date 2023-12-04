import {
  REGEX,
  MINIMUM_PURCHASE_AMOUNT,
  LOTTO_NUMBERS,
  MAXIMUM_PURCHASE_AMOUNT,
} from '../constants/constants.js';
import { ERRORS } from '../constants/strings.js';

const Validate = {
  purchaseAmount(amount) {
    if (!REGEX.purchaseAmount.test(amount)) {
      throw new Error(ERRORS.invalidAmount);
    }
    if (Number(amount) % MINIMUM_PURCHASE_AMOUNT !== 0) {
      throw new Error(ERRORS.invalidAmount);
    }
    if (Number(amount) < MINIMUM_PURCHASE_AMOUNT) {
      throw new Error(ERRORS.invalidAmount);
    }
    if (Number(amount) > MAXIMUM_PURCHASE_AMOUNT) {
      throw new Error(ERRORS.isOverLimit);
    }
  },

  numberRange(number) {
    if (number < LOTTO_NUMBERS.min || number > LOTTO_NUMBERS.max) {
      throw new Error(ERRORS.invalidRange);
    }
  },

  numbersLength(numbers) {
    if (numbers.length !== LOTTO_NUMBERS.count) {
      throw new Error(ERRORS.invalidCount);
    }
    if (new Set(numbers).size !== LOTTO_NUMBERS.count) {
      throw new Error(ERRORS.duplicateNumber);
    }
  },

  bonusNumber(bonusNumber, winningNumbers) {
    if (!REGEX.lottoNumber.test(bonusNumber)) {
      throw new Error(ERRORS.isNaN);
    }
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(ERRORS.duplicateBonus);
    }
    if (
      Number(bonusNumber) < LOTTO_NUMBERS.min ||
      Number(bonusNumber) > LOTTO_NUMBERS.max
    ) {
      throw new Error(ERRORS.invalidRange);
    }
  },
};

export default Validate;
