import s from "./ImageErrorView.module.css";

const ImageErrorView = ({ message }) => {
  return <p className={s.text}>Oops! {message}</p>;
};

export default ImageErrorView;
