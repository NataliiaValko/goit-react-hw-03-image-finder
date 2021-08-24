import PropTypes from "prop-types";
import { Component } from "react";
import ImageDataView from "../ImageDataView";
import ImageErrorView from "../ImageErrorView";
import ImagePendingView from "../ImagePendingView";
import ImageIdlingView from "../ImageIdlingView";

class ImageGallery extends Component {
  state = {
    showModal: false,
    urlModal: "",
    onLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showModal || prevState.showModal) {
      return;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  openModal = (url) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      urlModal: url,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      urlModal: "",
    }));
  };

  toggleOnloading = () => {
    this.setState(({ onLoading }) => ({ onLoading: !onLoading }));
  };

  render() {
    const { onLoading, showModal, urlModal } = this.state;
    const { error, status, images } = this.props;

    if (status === "idle") {
      return <ImageIdlingView />;
    }

    if (status === "pending") {
      return <ImagePendingView />;
    }

    if (status === "rejected") {
      return <ImageErrorView message={error} />;
    }

    if (status === "resolved") {
      return (
        <ImageDataView
          onLoading={onLoading}
          toggleOnloading={this.toggleOnloading}
          urlModal={urlModal}
          images={images}
          closeModal={this.closeModal}
          openModal={this.openModal}
          showModal={showModal}
        />
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
