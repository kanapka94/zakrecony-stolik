import { ReactNode } from 'react';
import { PageNumber } from './PageNumber';
import { OnChangeCallback } from './Pagination';

export const getButtons = (
  pages: number,
  activePage: number,
  onChange: OnChangeCallback,
  offset = 1
): ReactNode => {
  if (!pages) {
    return;
  }

  return (
    <>
      {Array(pages)
        .fill(0)
        .map((_, index) => (
          <PageNumber
            key={index + offset}
            page={index + offset}
            onChange={onChange}
            isActive={activePage === index + offset}
          />
        ))}
    </>
  );
};
