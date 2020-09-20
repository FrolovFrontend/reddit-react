import React from "react";

/**
 * Прекращает дальнейшую передачу текущего события.
 */
export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}
