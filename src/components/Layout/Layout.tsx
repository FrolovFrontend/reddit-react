import React from "react";
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

/**
 * Компонент будет рендерить дочерние компоненты
 * без привязки к конкретным компонентам
 */
export function Layout({ children }: ILayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
