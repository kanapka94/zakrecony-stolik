import { MouseEvent } from 'react';
import { OnChangeCallback } from './Pagination';

interface PageNumberProps {
  page: number;
  isActive: boolean;
  onChange: OnChangeCallback;
}
export const PageNumber = ({ page, isActive, onChange }: PageNumberProps) => {
  const handleChange = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onChange(page);
  };

  return (
    <li className="mr-2">
      <a
        href="#"
        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded ${
          isActive && 'text-blue-600'
        }`}
        {...(isActive && { 'aria-current': 'page' })}
        onClick={handleChange}
      >
        {page}
      </a>
    </li>
  );
};
