import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "../Gallery";
import Searchbar from "../Searchbar";
import apiPixabay from "../../service/image-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
  MORE_LOAD: "moreLoad",
};

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    error: "",
    status: Status.IDLE,
    total: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const newQuery = this.state.query;
    const newPage = this.state.page;

    if (prevState.query !== newQuery) {
      this.setState({ status: Status.PENDING, error: "", images: [], page: 1 });
      apiPixabay
        .fetchImage(newQuery)
        .then(({ hits, total }) => {
          this.setState({
            images: hits,
            total: total / 12 > 500 ? 500 : total / 12,
          });
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

    if (prevState.query === newQuery && prevState.page !== newPage) {
      this.setState({ error: "" });
      apiPixabay
        .fetchImage(newQuery, newPage)
        .then(({ hits, total }) => {
          this.setState({
            images: [...this.state.images, ...hits],
            total: total / 12 > 500 ? 500 : total / 12,
          });
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

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  handleIncrement = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { query, images, page, error, status, total } = this.state;
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Gallery
          handleIncrement={this.handleIncrement}
          query={query}
          images={images}
          page={page}
          error={error}
          status={status}
          total={total}
        />
      </>
    );
  }
}

export default App;
