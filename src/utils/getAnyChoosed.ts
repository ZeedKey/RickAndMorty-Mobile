export const getAnyChoosed = <T>(filter: T) =>
  Object.values(filter).some(item => item);
