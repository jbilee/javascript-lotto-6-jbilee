import { Console } from '@woowacourse/mission-utils';
import { PURCHASED } from '../constants/strings.js';

const OutputView = {
  async printTickets(tickets) {
    Console.print(PURCHASED(tickets.length));

    for (let i = 0; i < tickets.length; i += 1) {
      Console.print(tickets[i].getStringRepresentation());
    }
  },
};

export default OutputView;
