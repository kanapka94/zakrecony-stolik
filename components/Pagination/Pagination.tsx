import { getButtons } from './getButtons';
import { PageInput } from './PageInput';

interface PaginationProps {
  pages: number;
  activePage: number;
  onChange: (pageId: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { pages, activePage, onChange } = props;

  const firstGroupNumber = pages > 7 ? 3 : pages;
  const firstGroup = getButtons(firstGroupNumber, activePage);

  let secondGroup = null;

  if (pages > 7) {
    secondGroup = getButtons(3, activePage, pages - 2);
  }

  return (
    <nav className="flex justify-center p-4">
      <ul className="flex justify-center items-center">
        {firstGroup}
        {pages > 7 && <PageInput onChange={onChange} />}
        {secondGroup}
      </ul>
    </nav>
  );
};
