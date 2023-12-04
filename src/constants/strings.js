const ERROR_PREFIX = '[ERROR]';

export const NUMBER_SEPARATOR = ',';
export const STRING_SEPARATOR = ', ';
export const PURCHASED = (count) => `${count}개를 구매했습니다.`;

export const PROMPTS = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

export const ERRORS = {
  invalidAmount: `${ERROR_PREFIX} 유효한 금액이 아닙니다.`,
  invalidRange: `${ERROR_PREFIX} 로또 번호는 1~45 사이여야 합니다.`,
  duplicateNumber: `${ERROR_PREFIX} 중복되는 숫자가 포함되어 있습니다.`,
  duplicateBonus: `${ERROR_PREFIX} 보너스 번호가 당첨 번호와 중복됩니다.`,
};
