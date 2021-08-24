import PropTypes from "prop-types";
import s from "./ImageErrorView.module.css";

const ImageErrorView = ({ message }) => {
  return <p className={s.text}>Oops! {message}</p>;
};

export default ImageErrorView;

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
