import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './styles/Faq.css'

function Faq({ faqStatic, linkFaq }) {
  return (
  
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-content">
              <h1 ref={linkFaq}>Frequently Asked Question</h1>
              <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempore.</h5>
            </div>
          </div>
          <div className="col-md-6">

            <Accordion className="accordion" defaultActiveKey='1'>
              {faqStatic.map((item) => {
                return (
                  <div key={item.id}>

                    <Accordion.Item eventKey={item.id} >
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>
                        {item.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                )
              })}
            </Accordion>
       
        </div>
      </div>
    </div>
  );
}

export default Faq;