import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRightLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import laptop from "../images/laptop.jpg";
import keyboard from "../images/keyboard.jpeg";
import monitor from "../images/monitor.webp";
import mouse from "../images/mouse.jpeg";
import Image from "next/image";

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

export const ReturnIcon = ({ onClick, loanList }) => {
  return (
    <FontAwesomeIcon
      icon={faRightLeft}
      style={{ color: "black", fontSize: 30 }}
      alt="return"
      className="center"
      onClick={onClick}
      loanList={loanList}
    />
  );
};

export const ItemIcon = ({ name }) => {
  if (name === "Laptop") {
    return <Image src={laptop} alt="laptop" width={150} height={100} />;
  }
  if (name === "Mouse") {
    return <Image src={mouse} alt="mouse" width={150} height={100} />;
  }
  if (name === "Monitor") {
    return <Image src={monitor} alt="monitor" width={150} height={100} />;
  }

  return <Image src={keyboard} alt="keyboard" width={150} height={100} />;
};
