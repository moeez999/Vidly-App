import { Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
// import jwtDecode from "jwt-decode";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/resgisterForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  // state = {};

  // componentDidMount() {
  //   const jwt = localStorage.getItem("token");
  //   const user = jwtDecode(jwt);
  //   console.log(user);
  // }
  render() {
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/registerform" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
