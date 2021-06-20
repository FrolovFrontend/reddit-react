import { assoc } from 'utils/js/assoc';

/**
 * Функция генерирует рандомную строку
 */
export const generateRandomString = () =>
  Math.random().toString(36).substring(2, 15);

/**
 * Функция добавляет объекту ключ "id" со значением
 * сгенерируемой строки
 */
export const assignId = assoc('id', generateRandomString());

/**
 * Функция генерирует рандомный id и передает его
 * переданному объекту в ключ "id"
 */
export const generateId = <O extends object>(obj: O) =>
  assoc('id', generateRandomString())(obj);
