import { Component } from "react";
import ImageDataView from "../ImageDataView";
import ImageErrorView from "../ImageErrorView";
import ImagePendingView from "../ImagePendingView";
import ImageIdlingView from "../ImageIdlingView";
import apiPixabay from "../../service/image-api";
// import s from "./ImageGallery.module.css";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
  MORE_LOAD: "moreLoad",
};

class ImageGallery extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    error: "",
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const newQuery = this.props.query;

    if (prevProps.query !== newQuery) {
      this.setState({ status: Status.PENDING, error: "", images: [], page: 1 });
      apiPixabay
        .fetchImage(newQuery)
        .then(({ hits }) => {
          this.setState({ images: hits });
          return hits;
        })
        .then((hits) => {
          setTimeout(() => {
            hits[0]
              ? this.setState({ status: Status.RESOLVED })
              : this.setState({
                  status: Status.REJECTED,
                  error:
                    "We couldn’t find anything =/. Change your request, please!",
                });
          }, 300);
        })

        .catch((txt) => {
          this.setState({ status: Status.REJECTED, error: `${txt}` });
        });
    }
  }

  render() {
    const { error, status, images } = this.state;

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
      return <ImageDataView images={images} />;
    }
    return <p>test</p>;
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  //   contacts: PropTypes.arrayOf(
  //     PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  //   ).isRequired,
  //   onDeleteContact: PropTypes.func.isRequired,
};
