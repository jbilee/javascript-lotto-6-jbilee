import { COUNT_INCREMENT, MATCH_VALUES } from '../constants/constants.js';

class Scorekeeper {
  #matches;

  constructor() {
    this.#matches = {
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
  }

  getMatches(tickets, { winningNumbers, bonusNumber }) {
    for (let i = 0; i < tickets.length; i += 1) {
      const matches = tickets[i].matchNumbers(winningNumbers);

      if (tickets[i].hasBonusMatch(matches, bonusNumber)) {
        this.#matches.fiveWithBonus += COUNT_INCREMENT;
        continue;
      }
      if (MATCH_VALUES[matches]) {
        this.#matches[MATCH_VALUES[matches]] += COUNT_INCREMENT;
      }
    }

    return this.#matches;
  }
}

export default Scorekeeper;
