import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  id,
  openModal,
  toggleOnloading,
  webformatURL,
  largeImageURL,
  tags = "photo",
}) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={(e) => {
          openModal(e.target.dataset.large);
          toggleOnloading();
        }}
        src={webformatURL}
        data-large={largeImageURL}
        alt={tags}
        className={s.ImageGalleryItem__image}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleOnloading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
