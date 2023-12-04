const ERROR_PREFIX = '[ERROR]';

export const NUMBER_SEPARATOR = ',';
export const STRING_SEPARATOR = ', ';
export const PURCHASED = (count) => `${count}개를 구매했습니다.`;

export const PROMPTS = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
};

export const RESULTS = {
  header: '\n당첨 통계\n---',
  three: (count) => `3개 일치 (5,000원) - ${count}개`,
  four: (count) => `4개 일치 (50,000원) - ${count}개`,
  five: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  fiveWithBonus: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  six: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  profit: (percentage) => `총 수익률은 ${percentage}%입니다.`,
};

export const ERRORS = {
  invalidAmount: `${ERROR_PREFIX} 유효한 금액이 아닙니다.`,
  isOverLimit: `${ERROR_PREFIX} 로또는 10만장 이상 살 수 없습니다.`,
  invalidCount: `${ERROR_PREFIX} 로또 번호는 6개여야 합니다.`,
  isNaN: `${ERROR_PREFIX} 알맞은 숫자 형식이 아닙니다.`,
  invalidRange: `${ERROR_PREFIX} 로또 번호는 1~45 사이여야 합니다.`,
  duplicateNumber: `${ERROR_PREFIX} 중복되는 숫자가 포함되어 있습니다.`,
  duplicateBonus: `${ERROR_PREFIX} 보너스 번호가 당첨 번호와 중복됩니다.`,
};
