import React from "react";
import "../Styling/footer.css";
import { Layout } from "antd";
const { Footer } = Layout;

export default function Foter() {
  return (
    <Footer className="text-white">
      <div>
        <span className=" h1"> Stay in touch</span>
        <div className="ml-4 mt-3 h3">
          <i class="fab fa-facebook-square mr-2"></i>
          <i class="fab fa-google-plus mr-2"></i>
          <i class="fab fa-twitter mr-2"></i>
          <i class="fab fa-instagram mr-2"></i>
        </div>
      </div>
      <div>
        <span className="font-weight-bold h2 mb-3">Contact</span>
        <br />
        <span>
          <i class="fas fa-phone-alt mr-2"></i>000-000-0000
        </span>
        <span>
          <i class="fas fa-envelope mr-2 ml-2"></i>info@email.com
        </span>
        <br />
        <span>
          <i class="fas fa-map-marker-alt mr-2"></i>Cairo , Egypt
        </span>
      </div>
    </Footer>
  );
}
