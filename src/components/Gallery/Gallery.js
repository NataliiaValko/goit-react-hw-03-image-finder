import PropTypes from "prop-types";
import s from "./Gallery.module.css";
import Container from "../Container";
import ImageGallery from "../ImageGallery";

const Gallery = ({ query }) => (
  <section className={s.gallery}>
    <Container>
      <ImageGallery query={query} />
      {/* <Modal /> */}
    </Container>
  </section>
);

export default Gallery;

Gallery.propTypes = {
  // nameForClass: PropTypes.string.isRequired,
};
