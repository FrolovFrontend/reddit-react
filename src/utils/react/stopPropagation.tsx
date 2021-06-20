import { SyntheticEvent } from 'react';

/**
 * Прекращает дальнейшую передачу текущего события.
 */
export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}
