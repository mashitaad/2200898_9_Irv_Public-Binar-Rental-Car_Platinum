import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Styles from "./styles/carlist.css";
import { Link } from "react-router-dom";
import ImageWithLoading from "../../../../components/ui/ImageWithLoading";
import nullImage from '../../../../assets/img/imagenotfound.jpeg'
import LoadingSpinner from '../../../../components/ui/LoadingSpinner'

export default function CarList(props) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (!props.data?.length) {
    return (
      <>
        <Container className="container-car">
          <div className="carnotfound">
            <h1>car not found!!!</h1>
          </div>
        </Container>
      </>
    );
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  });


  return (
    <>
      <Container className="container-car">
        <Row>
          {props.data.map(o =>

            <Col md='4' key={o.id}>
              <Card className={Styles.card} >
                {o.image === null ?
                  (
                    <div>
                      <ImageWithLoading
                        src={nullImage}
                        alt={'nll'}
                      />
                    </div>
                  ) :
                  (
                    <div>
                      <ImageWithLoading
                        src={o.image}
                        alt={o.name}
                      />
                    </div>
                  )
                }
                <Card.Body>
                  <p>{o.name}</p>
                  <h6>{formatter.format(o.price)} / hari</h6>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est natus repellendus inventore, similique necessitatibus cumque architecto a nesciunt vitae! Minus.
                  </Card.Text>
                  <Link 
                  // to={`${o.id}`}
                  >
                    <div className="d-grid gap-2">
                      <Button variant="flat">
                        Pilih Mobil
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}

CarList.defaultProps = {
  data: {
    cars: []
  }
}
