import classNames from 'classnames';
import styles from './break.module.css';

type TBreakSize = 4 | 8 | 12 | 16 | 20 | 32;

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    top = false,
    inline = false,
    desktopSize,
    tabletSize,
    mobileSize,
    size,
  } = props;

  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${mobileSize}`]]: tabletSize },
        { [styles[`desktop_s${mobileSize}`]]: desktopSize },
        { [styles.inline]: inline },
        { [styles.top]: top },
      )}
    />
  );
}
