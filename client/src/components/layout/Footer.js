import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-primary mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} DevelopersConnect
        </footer>
      </div>
    );
  }
}
export default Footer;
