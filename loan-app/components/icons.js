import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRightLeft } from "@fortawesome/free-solid-svg-icons";

export const BinIcon = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faTrash}
      style={{ color: "black", fontSize: 30 }}
      alt="bin"
      className="center"
      onClick={onClick}
    />
  );
};

export const ReturnIcon = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faRightLeft}
      style={{ color: "black", fontSize: 30 }}
      alt="bin"
      className="center"
      onClick={onClick}
    />
  );
};
