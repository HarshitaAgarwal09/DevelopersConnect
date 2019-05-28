import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
    this.props.loginUser(user, this.props.history);
    console.log(this.props.errors);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    } else {
      this.setState({ errors: {} });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="text-center">Login</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
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
                    value={this.state.password}
                    name="password"
                    placeholder="Enter your password"
                    onChange={this.onChange}
                  />
                  {this.state.errors.password ? (
                    <p className="text-danger">
                      <i className="fas fa-exclamation-triangle"> </i>
                      {this.state.errors.password}
                    </p>
                  ) : null}
                  <button type="submit" className="btn btn-success">
                    Login
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
  { loginUser }
)(Login);
