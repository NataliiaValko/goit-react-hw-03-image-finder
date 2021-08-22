import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags = "photo" }) => (
  <li className={s.ImageGalleryItem}>
    <img
      src={webformatURL}
      data-large={largeImageURL}
      alt={tags}
      className={s.ImageGalleryItem__image}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
