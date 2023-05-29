import React, { useState } from "react";
import "../styles/headerpayment.css";
import rectangle from "../../../assets/images/rectangle36.png";
import { useParams } from "react-router-dom";
import {
  BsArrowLeftShort,
  Bs1CircleFill,
  Bs2Circle,
  Bs3Circle,
  BsCheckCircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

function HeaderPayment({ navigateBack, set, bankName, padingBottom }) {

  const { id } = useParams();
  const [style, setStyle] = useState(padingBottom);
  const renderIcons = () => {
    let icon1, icon2, icon3;

    if (set === 2) {
      icon1 = <BsCheckCircleFill color="blue" className="me-1" />;
      icon2 = <Bs2CircleFill color="blue" className="me-2" />;
      icon3 = <Bs3Circle color="blue" className="me-2" />;
    } else if (set === 3) {
      icon1 = <BsCheckCircleFill color="blue" className="me-1" />;
      icon2 = <BsCheckCircleFill color="blue" className="me-2" />;
      icon3 = <Bs3CircleFill color="blue" className="me-2" />;
    } else {
      icon1 = <Bs1CircleFill color="blue" className="me-1" />;
      icon2 = <Bs2Circle color="blue" className="me-2" />;
      icon3 = <Bs3Circle color="blue" className="me-2" />;
    }
    return (
      <>
        {icon1} Pilih Metode{" "}
        <img src={rectangle} alt="rectangle" className="me-2 ms-2" />
        {icon2} Bayar{" "}
        <img src={rectangle} alt="rectangle" className="me-2 ms-2" />
        {icon3} Tiket
      </>
    );
  };
  return (
    <div
      className={`bg-secondary-custom mb-40px ${style ? "pb-custom" : "mb-2"}`}
    >
      <Container className="mb-7">
        <Row className="justify-content-between">
          <Col className="text-start">
            <Link
              className="mb-4 text-decoration-none"
              style={{ color: "black" }}
              onClick={navigateBack}
            >
              <BsArrowLeftShort size={25} />{" "}
              {bankName ? bankName : "Pembayaran"}
            </Link>
            {id && <p className="ms-4">Order ID: {id}</p>}
          </Col>
          <Col className="text-end">{renderIcons()}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderPayment;
