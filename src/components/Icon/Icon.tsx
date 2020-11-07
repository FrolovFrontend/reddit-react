import React from 'react';
import classNames from 'classnames';
import {
  AnonIcon,
  BlockIcon,
  CommentsIcon,
  MenuIcon,
  SavingIcon,
  SharedIcon,
  WarningIcon,
  RedditSelfIcon,
} from '../Icons';
import styles from './icon.css';

export enum EIcons {
  block,
  comments,
  menu,
  saving,
  shared,
  warning,
  anon,
  redditSelf,
}

type TSizes = 12 | 14 | 16 | 20 | 24 | 32 | 40 | 50;

interface IIconProps {
  name: EIcons;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

const getIcon = (name: EIcons) => {
  switch (name) {
    case EIcons.block:
      return <BlockIcon />;
    case EIcons.comments:
      return <CommentsIcon />;
    case EIcons.menu:
      return <MenuIcon />;
    case EIcons.saving:
      return <SavingIcon />;
    case EIcons.shared:
      return <SharedIcon />;
    case EIcons.warning:
      return <WarningIcon />;
    case EIcons.anon:
      return <AnonIcon />;
    case EIcons.redditSelf:
      return <RedditSelfIcon />;
  }
};

export function Icon(props: IIconProps) {
  const { name, size, mobileSize, tabletSize, desktopSize } = props;

  const classes = classNames(
    styles.icon,
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <div className={classes}>{getIcon(name)}</div>;
}
