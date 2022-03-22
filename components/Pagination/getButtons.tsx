import { ReactNode } from 'react';
import { PageNumber } from './PageNumber';

export const getButtons = (pages: number, activePage: number, offset = 1): ReactNode => {
  if (!pages) {
    return;
  }

  return (
    <>
      {Array.from({ length: pages }, (_, index) => (
        <PageNumber
          key={index + offset}
          page={index + offset}
          isActive={activePage === index + offset}
        />
      ))}
    </>
  );
};
