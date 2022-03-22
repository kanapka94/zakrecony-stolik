import { useRouter } from 'next/router';
import { getButtons } from './getButtons';
import { PageInput } from './PageInput';

interface PaginationProps {
  pages: number;
  activePage: number;
}

export const Pagination = (props: PaginationProps) => {
  const { pages, activePage } = props;
  const router = useRouter();

  const firstGroupNumber = pages > 7 ? 3 : pages;
  const firstGroup = getButtons(firstGroupNumber, activePage);

  let secondGroup = null;

  if (pages > 7) {
    secondGroup = getButtons(3, activePage, pages - 2);
  }

  const handleChange = (page: number) => {
    router.push(`/products/${page}`);
  };

  return (
    <nav className="flex justify-center p-4">
      <ul className="flex justify-center items-center">
        {firstGroup}
        {pages > 7 && <PageInput onChange={handleChange} />}
        {secondGroup}
      </ul>
    </nav>
  );
};
