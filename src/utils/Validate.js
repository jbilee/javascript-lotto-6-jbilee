import { REGEX, MINIMUM_PURCHASE_AMOUNT } from '../constants/constants.js';
import { ERRORS } from '../constants/strings.js';

const Validate = {
  purchaseAmount(amount) {
    if (!REGEX.purchaseAmount.test(amount)) {
      throw new Error(ERRORS.invalidAmount);
    }
    if (amount % MINIMUM_PURCHASE_AMOUNT !== 0) {
      throw new Error(ERRORS.invalidAmount);
    }
    if (amount < MINIMUM_PURCHASE_AMOUNT) {
      throw new Error(ERRORS.invalidAmount);
    }
  },

  bonusNumber(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERRORS.duplicateBonus);
    }
  }
};

export default Validate;
