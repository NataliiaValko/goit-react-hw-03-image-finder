import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ text, handleIncrement }) => (
  <button type="button" className={s.button} onClick={handleIncrement}>
    {text}
  </button>
);

export default Button;

Button.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};
