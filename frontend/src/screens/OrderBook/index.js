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

export default function Orderbook({ userId, setUserId }) {
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
        <Col>
          <h5>
            Set User Id <small>always have a value or gives errors</small>
          </h5>
          <input
            type="text"
            placeholder="Enter user id"
            value={userId}
            onChange={(event) => parseInt(setUserId(event.target.value))}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <XYPlot height={500} width={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <AreaSeries data={orderbook} />
          </XYPlot>
        </Col>
      </Row>
    </Container>
  );
}
