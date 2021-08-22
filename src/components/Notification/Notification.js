import { store } from "react-notifications-component";

const showNotification = () => {
  store.addNotification({
    title: "Oops!",
    message: "Sorry we couldn’t find anything =/. Change your request, please!",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export default showNotification;
