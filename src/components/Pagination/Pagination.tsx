import { Person } from "../../types/dataTypes";
import Button from "../Button/Button";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
  data: {
    list: Person[];
  };
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, data }) => {
  return (
    <div className="pagination">
      <Button
        navigateBack={false}
        label="&larr;"
        type="pagination-back"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      />
      <h2>{`${currentPage} / ${data?.list.length / 10}`}</h2>
      <Button
        navigateBack={false}
        label="&rarr;"
        type="pagination-forward"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, data?.list.length / 10))}
      />
    </div>
  );
};

export default Pagination;
