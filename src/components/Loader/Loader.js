import CustomLoader from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <>
    <CustomLoader
      type="Bars"
      color="#5ab1e4"
      height={80}
      width={80}
      className={s.loader}
    />
    <p>Loading...</p>
  </>
);

export default Loader;
