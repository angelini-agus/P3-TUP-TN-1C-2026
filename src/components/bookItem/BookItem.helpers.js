export const decidePlural = (value) => value === 1 ? "" : "s" 

export const componentArray = (length, comp) => Array.from({ length }, () => comp) 