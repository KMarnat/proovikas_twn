import { Person } from "../../types/dataTypes";
import Button from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  data: {
    list: Person[];
  };
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  data,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(data?.list.length / itemsPerPage);

  const getPageRange = () => {
    // Pages that are visible in the pagination, for example if current page is "7", pagination shows "5 6 7 8 9"
    const visiblePages = 5;

    // Calculates starting page and end page
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    // Start page is adjusted if the range does not fit the numbers (on page 19, it showed only 7 18 19 20). This if statement checks that and adjusts
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, startPage - (visiblePages - (endPage - startPage + 1)));
    }

    // Array of the range numbers that are looped to render the pagination
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const pageNumbers = getPageRange();

  return (
    <div className="pagination">
      <Button
        navigateBack={false}
        label="&larr;"
        type="pagination-back"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination__number ${
            pageNumber === currentPage ? "pagination__number--active" : ""
          }`}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <Button
        navigateBack={false}
        label="&rarr;"
        type="pagination-forward"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      />
    </div>
  );
};

export default Pagination;
