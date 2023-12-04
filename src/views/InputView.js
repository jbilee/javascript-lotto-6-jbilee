import { Console } from '@woowacourse/mission-utils';
import { NUMBER_SEPARATOR } from '../constants/strings.js';

const InputView = {
  async getLottoNumbers(prompt) {
    const input = await Console.readLineAsync(prompt);
    return input.split(NUMBER_SEPARATOR).map((number) => Number(number));
  },

  async getUserInput(prompt) {
    const input = await Console.readLineAsync(prompt);
    return input;
  }
};

export default InputView;
