import * as React from 'react';

interface Props {
  link: string;
  children: React.ReactNode;
}

export const ProjectLink = ({ link, children }: Props) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </li>
  );
};
