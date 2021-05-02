import React,{useState} from 'react';
import {Row,Col,Card,Container} from 'react-bootstrap';
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { nanoid } from "nanoid";

function Cards(){
    const key = useState(nanoid());

    return(
        <div>
        <Container style={{paddingTop:"40px"}} fluid>
            <Row>
    
                <Col lg={8} md={8} sm={8}>
                    <Marquee key={key} velocity={25}>
                        {times(4, Number).map(id => (
                        <Row style={{paddingBottom:"40px"}}>
                            <Col>
                                <Card className="cardstyle" body>This is some text within a card body.</Card>
                            </Col>
                            <Col>
                                <Card className="cardstyle" body>This is some text within a card body.</Card>
                            </Col>
                            <Col>
                                <Card className="cardstyle" body>This is some text within a card body.</Card>
                            </Col>
                            <Col style={{paddingRight:"40px"}}>
                                <Card className="cardstyle" body>This is some text within a card body.</Card>
                            </Col>
                        </Row>
                        ))}
                    </Marquee>  
                </Col>
                    

                <Col lg={4} md={4} sm={4}>
                    <Col>
                        <Card body>This is some text within a card body.</Card>
                    </Col>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Cards;