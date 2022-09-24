import React from "react";

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="footer-up">
        <div className="container d-flex justify-content-between">
          <div className="footer-items">
            <h3 className="fs-5 fw-bold mb-4">GET HELP</h3>
            <div className="footer-list d-flex flex-column">
              <a>Contact Us</a>
              <a>Shopping</a>
              <a>NIKEiD</a>
              <a>NIKE +</a>
            </div>
          </div>
          <div className="footer-items">
            <h3 className="fw-bold fs-5 mb-4">ORDERS</h3>
            <div className="footer-list d-flex flex-column">
              <a>Payment options</a>
              <a>Shipping and delivery</a>
              <a>Returns</a>
            </div>
          </div>
          <div className="footer-items">
            <h3 className="fw-bold fs-5 mb-4">REGISTER</h3>
            <div className="footer-list d-flex flex-column">
              <p>
                Create one account to manage everything you do with NIKE, from
                your shopping preferences to your NIKE + activity.
              </p>
              <a className="btn1">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="container d-flex justify-content-between">
          <div className="footer-items">
            <h3 className="fw-bold fs-5 mb-4">EMAIL SIGN UP</h3>
            <div className="footer-list d-flex flex-column">
              <p>
                Be the first to know about know products and special offers.
              </p>
              <a className="btn1">
                Sign up now
              </a>
            </div>
          </div>
          <div className="footer-items">
            <h3 className="fw-bold fs-5 mb-4">GIFT CARDS</h3>
            <div className="footer-list d-flex flex-column">
              <p>Give the gift that alway fits.</p>
              <a className="btn1">
                View cards
              </a>
            </div>
          </div>
          <div className="footer-items">
            <h3 className="fw-bold fs-5 mb-4">STORE NEAR YOU</h3>
            <div className="footer-list d-flex flex-column">
              <p>Locate a NIKE retail store or authorized retailer.</p>
              <a className="btn1">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
