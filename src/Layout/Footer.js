import React from "react";
import "../Styling/footer.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
// const { Footer } = Layout;

export default function Foter() {
  return (
    //   <Footer className="text-white">
    //  <div>
    //     <span className=" h1"> Stay in touch</span>
    //     <div className="ml-4 mt-3 h3">
    //       <i class="fab fa-facebook-square mr-2"></i>
    //       <i class="fab fa-google-plus mr-2"></i>
    //       <i class="fab fa-twitter mr-2"></i>
    //       <i class="fab fa-instagram mr-2"></i>
    //       </div>
    //       </div>
    //   <div>
    //   <span className="font-weight-bold h2 mb-3">Contact</span>
    //   <br />
    //   <span>
    //   <i class="fas fa-phone-alt mr-2"></i>000-000-0000
    //     </span>
    //     <span>
    //     <i class="fas fa-envelope mr-2 ml-2"></i>info@email.com
    //     </span>
    //     <br />
    //     <span>
    //     <i class="fas fa-map-marker-alt mr-2"></i>Cairo , Egypt
    //     </span>
    //   </div>
    //     </Footer>
    <div className="footer-container">
      <Row>
        <Col span={12}>
          <div className="d-inline-block social-footer">
            <span className=" h1"> Stay in touch</span>
            <div className="ml-4 mt-3 h3">
              <i class="fab fa-facebook-square mr-2"></i>
              <i class="fab fa-google-plus mr-2"></i>
              <i class="fab fa-twitter mr-2"></i>
              <i class="fab fa-instagram mr-2"></i>
            </div>
          </div>
          <div className="footer-seprator d-inline-block"></div>
          <ul className="d-inline-block p-0 footer-list">
            <li className="mb-3">CONTACT </li>
            <li>
              <Link className="text-white" to="/refund">
                POLICY{" "}
              </Link>
            </li>
          </ul>
          <div className="footer-seprator second-seprator  d-inline-block"></div>
          <ul className="d-inline-block p-0 footer-list">
            <li className="mb-1">
              {" "}
              <Link className="text-white" to="/aboutus">
                ABOUT{" "}
              </Link>
            </li>
            <li className="mt-1">
              <Link className="text-white" to="/refund">
                TERMS
              </Link>
            </li>
          </ul>
        </Col>
        <Col span={12} className="d-flex justify-content-end">
          <div>
            <div className="font-weight-bold h2 mb-3 text-center">Contact</div>
            <div className="mt-2 d-flex h4">
              <div className="mr-3">
                {" "}
                <i class="fas fa-phone-alt mr-2"></i>000-000-0000
              </div>
              <div>
                <i class="fas fa-envelope mr-2 ml-2"></i>info@email.com
              </div>
            </div>
            <div className="text-center mt-3 h4">
              <i class="fas fa-map-marker-alt mr-2"></i>Cairo , Egypt
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
