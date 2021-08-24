import PropTypes from "prop-types";
import s from "./ImageDataView.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import Modal from "../Modal";
import Loader from "../Loader";

const ImageDataView = ({
  images,
  showModal,
  onLoading,
  openModal,
  closeModal,
  urlModal,
  toggleOnloading,
}) => {
  return (
    <>
      {showModal && (
        <Modal onClose={closeModal}>
          {onLoading && <Loader />}
          <img
            onLoad={toggleOnloading}
            src={urlModal}
            alt=""
            className={s.image}
          />
        </Modal>
      )}

      <ul className={s.imageGallery__list}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            openModal={openModal}
            toggleOnloading={toggleOnloading}
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageDataView;

ImageDataView.propTypes = {
  urlModal: PropTypes.string.isRequired,
  toggleOnloading: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  onLoading: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
