import { SyntheticEvent } from 'react';

/**
 * Отменяет действие по усолчанию
 */
export function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}
