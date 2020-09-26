import React from "react";

interface IItem {
  id: string;
  icon?: React.ReactNode;
  text: string | React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "div", icon, text, onClick, className, id, href }) => (
        <As
          className={className}
          onClick={() => {
            if (onClick) {
              onClick(id);
            }
          }}
          key={id}
          href={href}
        >
          {icon}
          {text}
        </As>
      ))}
    </>
  );
}
