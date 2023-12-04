import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserInput(prompt) {
    const input = await Console.readLineAsync(prompt);
    return input;
  },
};

export default InputView;
