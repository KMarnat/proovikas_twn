import { useNavigate } from "react-router";

interface ButtonProps {
  navigateBack: boolean;
  label: string;
  type?: string;
  id?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ navigateBack, label, type, id, onClick }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigateBack && navigate(-1);
  };

  const handleClickForward = () => {
    id && navigate(`/article/${id}`);
  };

  if (type === "rect")
    return (
      <button className="button-rect" onClick={handleClickForward}>
        {label}
      </button>
    );

  if (type === "round")
    return (
      <button className="button-round" onClick={handleClickBack}>
        {label}
      </button>
    );

  if (type === "pagination-back")
    return (
      <button className="button-arrow" onClick={onClick}>
        {label}
      </button>
    );
  if (type === "pagination-forward")
    return (
      <button onClick={onClick} className="button-arrow">
        {label}
      </button>
    );
};

export default Button;
