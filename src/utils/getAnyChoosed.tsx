export const getAnyChoosed = filter =>
  !Object.values(filter).every(item => !!item === false);
