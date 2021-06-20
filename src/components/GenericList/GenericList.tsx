import { ReactNode } from 'react';

export interface IGenericListItem {
  id: string;
  icon?: ReactNode;
  text: string | ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IGenericListItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', icon, text, onClick, className, id, href }) => (
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
