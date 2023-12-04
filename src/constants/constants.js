export const MINIMUM_PURCHASE_AMOUNT = 1000;
export const MAXIMUM_PURCHASE_AMOUNT = 100000000;
export const COUNT_INCREMENT = 1;
export const BONUS_CONDITION = 5;

export const LOTTO_NUMBERS = {
  min: 1,
  max: 45,
  count: 6,
};

export const MATCH_VALUES = {
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

export const PRIZES = {
  three: 5000,
  four: 50000,
  five: 1500000,
  fiveWithBonus: 30000000,
  six: 2000000000,
};

export const REGEX = {
  lottoNumber: /^[1-9]\d*$/,
  purchaseAmount: /^[1-9]\d{3,}$/,
};
