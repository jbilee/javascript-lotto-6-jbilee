import { REGEX } from '../constants/constants.js';
import { ERRORS } from '../constants/strings.js';

const Validate = {
  purchaseAmount(amount) {
    if (!REGEX.purchaseAmount.test(amount)) {
      throw new Error(ERRORS.invalidAmount);
    }
  },
};

export default Validate;
