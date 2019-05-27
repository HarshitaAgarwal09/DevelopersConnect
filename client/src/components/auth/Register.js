import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
    // axios
    //   .post("/api/users/register", newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
    // console.log(this.state.errors);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center">Register</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Enter your Name"
                    onChange={this.onChange}
                  />
                  {this.state.errors.name ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.errors.name}
                    </p>
                  ) : null}
                  <label>Email:</label>
                  <input
                    className="form-control mb-3"
                    type="email"
                    name="email"
                    value={this.state.email}
                    placeholder="Enter your Email Address"
                    onChange={this.onChange}
                  />
                  {this.state.errors.email ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.errors.email}
                    </p>
                  ) : null}
                  <label>Password:</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {this.state.errors.password ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.errors.password}
                    </p>
                  ) : null}
                  <label>Confirm Password:</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="password2"
                    value={this.state.password2}
                    placeholder="Confirm your password"
                    onChange={this.onChange}
                  />
                  {this.state.errors.password2 ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.errors.password2}
                    </p>
                  ) : null}
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
