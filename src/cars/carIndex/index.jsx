import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const CarIndex = (props) => {
  const formatRupiah= (number)=> {
    return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(number);
  }
   
       if(props?.data?.cars?.length === 0){
        return(
            <>
                <div className="d-flex justify-content-center my-5">
                    <h2 className="text-center"> <strong className="">Data Mobil Tidak Ditemukan</strong> </h2>
                </div>
            </>
        )
    }
//     if(!props.data.cars.length===0){
//     console.log("Kosong")
//   }
  return (
    <>
      <Container>
          <Row>
            {props.data.cars !== undefined &&
              props.data.cars.map((result) => {
                return (
                  <>
                    <Col xs={12} sm={8} md={6} lg={6} xl={4} className="mx-auto mt-4">
                    <Card className="mx-auto w-100">
                      <Card.Img variant="top" height={200} src={result.image} />
                      <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted">{result.name}</Card.Subtitle>
                        <Card.Title>{ formatRupiah(result.price)}/Hari</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Link to={`${result.id}`}>
                          <Button className="w-100 py-3" variant="primary">Pilih Mobil</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
      </Container>
    </>
  );
};

export default CarIndex;