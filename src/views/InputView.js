import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/strings.js';

const InputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(PROMPTS.purchaseAmount);
    return input;
  },
};

export default InputView;
