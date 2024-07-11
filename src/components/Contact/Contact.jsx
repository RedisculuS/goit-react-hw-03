import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.dataContainer}>
      <ul className={css.dataInfo}>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhone />
          {number}
        </li>
      </ul>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
