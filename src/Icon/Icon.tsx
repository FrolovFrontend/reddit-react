import React from "react";
import classNames from "classnames";
import {
  BlockIcon,
  CommentsIcon,
  MenuIcon,
  SavingIcon,
  SharedIcon,
  WarningIcon,
} from "../Icons";
import styles from "./icon.css";

export enum EIcons {
  block,
  comments,
  menu,
  saving,
  shared,
  warning,
}

type TSizes = 12 | 16 | 20 | 24 | 32 | 40;

interface IIconProps {
  name: EIcons;
  size?: TSizes;
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
  }
};

export function Icon(props: IIconProps) {
  const { name, size = 16, mobileSize, tabletSize, desktopSize } = props;

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <span className={classes}>{getIcon(name)}</span>;
}
