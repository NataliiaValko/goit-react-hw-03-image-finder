import { BsSearch } from "react-icons/bs";
// import Button from "../Button";

import s from "./Form.module.css";

const Form = ({ onSubmit, onChange }) => (
  <form className={s.searchForm} onSubmit={onSubmit}>
    <input
      className={s.searchForm__input}
      name="valueToSearch"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={onChange}
    />
    <button type="submit" className={s.searchForm__button}>
      <BsSearch className={s.icon} />
    </button>
  </form>
);

export default Form;
