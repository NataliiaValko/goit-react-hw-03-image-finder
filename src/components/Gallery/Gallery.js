import PropTypes from "prop-types";
import s from "./Gallery.module.css";
import Container from "../Container";
import ImageGallery from "../ImageGallery";
import Button from "../Button";

const Gallery = ({
  query,
  images,
  page,
  error,
  status,
  total,
  handleIncrement,
}) => (
  <section className={s.gallery}>
    <Container>
      {status === "resolved" && (
        <p className={s.text}>Results on request of "{query}"</p>
      )}
      <ImageGallery
        query={query}
        images={images}
        page={page}
        error={error}
        status={status}
      />
      {page < total && (
        <Button text="Load more" handleIncrement={handleIncrement} />
      )}
    </Container>
  </section>
);

export default Gallery;

Gallery.propTypes = {
  query: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number,
  handleIncrement: PropTypes.func.isRequired,
};
