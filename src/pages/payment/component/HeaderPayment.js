import React from "react";
import "../styles/headerpayment.css";
import rectangle from "../assets/images/rectangle36.png";
import {
  BsArrowLeftShort,
  Bs1CircleFill,
  Bs2Circle,
  Bs3Circle,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
function HeaderPayment() {
  return (
    <div className="bg-secondary mb-40px">
      <Container className="mb-7">
        <Row className="d-flex justify-content-between">
          <Col className="text-start">
            <Link
              className="mb-4 text-decoration-none"
              style={{ color: "black" }}
            >
              <BsArrowLeftShort size={25} /> {"Pembayaran"}
            </Link>
          </Col>
          <Col className="text-end">
            <Bs1CircleFill color="blue" className="me-2" />
            {"Pilih Metode"}
            <img src={rectangle} alt="rectangle" className="me-2 ms-2" />
            <Bs2Circle color="blue" className="me-2" />
            {"Bayar"}
            <img src={rectangle} alt="rectangle" className="me-2 ms-2" />
            <Bs3Circle color="blue" className="me-2" />
            {"Tiket"}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderPayment;
