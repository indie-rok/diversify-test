import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import {
  XYPlot,
  AreaSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

import { getOrderBook } from "../../utils/api";

export default function Orderbook() {
  const [orderbook, setOrderBook] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getOrderBook();
      setOrderBook(data);
    }
    fetchData();
  }, []);

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
          <AreaSeries data={orderbook} />
        </XYPlot>
      </Row>
    </Container>
  );
}
