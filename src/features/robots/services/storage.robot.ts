import { Robot } from '../models/robot';

const store = 'Robots';

export const getStore = (): Array<Robot> => {
    const dataString = localStorage.getItem(store);
    if (!dataString) return [];
    return JSON.parse(dataString);
};

export const setStore = (data: Array<Robot>) => {
    localStorage.setItem(store, JSON.stringify(data));
};
