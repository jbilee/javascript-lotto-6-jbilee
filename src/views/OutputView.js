import { Console } from '@woowacourse/mission-utils';
import { PURCHASED, RESULTS } from '../constants/strings.js';

const OutputView = {
  printTickets(tickets) {
    Console.print(PURCHASED(tickets.length));

    for (let i = 0; i < tickets.length; i += 1) {
      Console.print(`[${tickets[i].getStringRepresentation()}]`);
    }
  },

  printMatches(matches) {
    Console.print(RESULTS.header);

    const matchCategories = Object.keys(matches);

    for (let i = 0; i < matchCategories.length; i += 1) {
      Console.print(RESULTS[matchCategories[i]](matches[matchCategories[i]]));
    }
  },

  printProfit(profit) {
    Console.print(RESULTS.profit(profit));
  }
};

export default OutputView;
