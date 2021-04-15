import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import {
  XYPlot,
  AreaSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const data = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 },
  { x: 6, y: 6 },
  { x: 7, y: 7 },
  { x: 8, y: 8 },
  { x: 9, y: 9 },
];

export default function Orderbook() {
  const [orderbook, setOrderBook] = useState([]);
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Orderbook for Stock</h1>
        </Col>
      </Row>
      <Row>
        <XYPlot height={500} width={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries data={data} />
        </XYPlot>
      </Row>
    </Container>
  );
}
