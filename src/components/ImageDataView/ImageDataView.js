// import PropTypes from "prop-types";
import s from "./ImageDataView.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageDataView = ({ images }) => {
  return (
    <>
      <ul className={s.imageGallery__list}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
      <button type="button" className={s.button}>
        Load more
      </button>
    </>
  );
};

export default ImageDataView;

ImageDataView.propTypes = {
  // nameForClass: PropTypes.string.isRequired,
};
