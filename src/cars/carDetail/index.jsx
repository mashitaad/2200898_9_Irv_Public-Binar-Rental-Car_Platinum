import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CarDetail = (props) => {
  console.log("dari data props",props);

  const formatRupiah= (number)=> {
    return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(number);
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={7} lg={8} className="py-5">
            <div className="border p-4 rounded">
              <p className="">
                <strong>Tentang Paket</strong>
              </p>
              <p>
                <strong>Include</strong>
              </p>
              <ul className="text-secondary">
                <li>
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket</li>
                <li>Wisata Sudah termasuk pajak</li>
              </ul>
              <p>
                <strong>Exclude</strong>
              </p>
              <ul className="text-secondary">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li> Tidak termasuk akomodasi penginapan</li>
              </ul>
              <p>
                <strong>Refund, Reschedule, Overtime</strong>
              </p>
              <ul className="text-secondary">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </Col>
          <Col md={5} lg={4} className="py-5">
            <Card>
              <Card.Img
                style={{ height: "218px" }}
                variant="top"
                src={props?.dataDetail?.image}
              />
              <Card.Body>
                <Card.Title className="mb-2">{props?.dataDetail?.name}</Card.Title>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mt-3 bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  </svg>
                  {props?.dataDetail?.category === "small" ? (
                    <Card.Subtitle className="mb-2 mt-3 ms-3 text-muted">
                      2-4 orang
                    </Card.Subtitle>
                  ) : (
                    <div></div>
                  )}
                  {props?.dataDetail?.category === "medium" ? (
                    <Card.Subtitle className="mb-2 mt-3 ms-3 text-muted">
                      <h5>4-6 orang</h5>
                    </Card.Subtitle>
                  ) : (
                    <div></div>
                  )}
                  {props?.dataDetail?.category === "large" ? (
                    <Card.Subtitle className="mb-2 mt-3 ms-3 text-muted">
                     <h5>6-8 orang</h5>
                    </Card.Subtitle>
                  ) : (
                    <div></div>
                  )}
                </div>
                <Card.Text>
                  <div className="mt-5 fw-bolder d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>{ formatRupiah(props?.dataDetail?.price)}</h6>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CarDetail;