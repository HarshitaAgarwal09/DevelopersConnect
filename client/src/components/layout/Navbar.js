import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <a className="navbar-brand" href="/">
              DevelopersConnect
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="profiles">
                    Developers
                  </a>
                </li>
              </ul>
              {isAuthenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      href="login"
                      onClick={this.onLogoutClick.bind(this)}
                      className="nav-link"
                    >
                      <img
                        className="rounded-circle"
                        src={user.avatar}
                        alt={user.name}
                        style={{ width: "25px", marginRight: "5px" }}
                        title="You must have a Gravatar connected to your email to display an image"
                      />{" "}
                      Logout
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="register">
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="login">
                      Login
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
