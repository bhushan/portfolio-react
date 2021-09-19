export const yearsOfExperience: number = new Date().getFullYear() - 2014;

export const getDeepCopy = <T extends Object>(obj: T) => JSON.parse(JSON.stringify(obj));
