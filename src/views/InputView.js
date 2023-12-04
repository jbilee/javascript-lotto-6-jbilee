import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/strings.js';

const InputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync(PROMPTS.purchaseAmount);
    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync(PROMPTS.winningNumbers);
    return input;
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync(PROMPTS.bonusNumber);
    return input;
  },
};

export default InputView;
