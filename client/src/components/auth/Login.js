import React, { Component } from "react";

class Login extends Component {
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
                    placeholder="Enter your Email Address"
                  />
                  <label>Password:</label>

                  <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <button type="submit" className="btn btn-success">
                    Submit
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
export default Login;
