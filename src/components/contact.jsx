import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                </div>
                  <div className="contact-item">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="contact-item">
                    <p>
                      <span>
                        <i className="fa fa-envelope-o"></i> Email
                      </span>{" "}
                      {this.props.data ? this.props.data.email : "loading"}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
