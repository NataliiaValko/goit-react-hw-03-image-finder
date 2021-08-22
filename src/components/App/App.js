// import s from "./App.module.css";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "../Gallery";
import Searchbar from "../Searchbar";
// import Modal from "../Modal";

class App extends Component {
  state = {
    query: "",
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Gallery query={this.state.query} />
        {/* <Modal/> */}
      </>
    );
  }
}

export default App;
