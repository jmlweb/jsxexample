import React from 'react';
import styled from 'styled-components';

// import Container from 'muicss/lib/react/container';
// import Row from 'muicss/lib/react/row';
// import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
//import Button from '../button/button';

const MuiExample = () => (

  <div>

    {/* <Container fluid={true}>
      <Row>
        <Col md="1">md-1</Col>
      </Row>
      <Row>
        <Col md="8">md-8</Col>
        <Col md="4">md-4</Col>
      </Row>
      <Row>
        <Col md="4">md-4</Col>
        <Col md="4">md-4</Col>
        <Col md="4">md-4</Col>
      </Row>
      <Row>
        <Col md="6">md-6</Col>
        <Col md="6">md-6</Col>
      </Row>
    </Container> */}

    <div>
      <Button>button</Button>
      <Button color="primary">button</Button>
      <Button color="danger">button</Button>
      <Button color="accent">button</Button>
    </div>
    <div>
      <Button disabled={true}>button</Button>
      <Button color="primary" disabled={true}>button</Button>
      <Button color="danger" disabled={true}>button</Button>
      <Button color="accent" disabled={true}>button</Button>
    </div>
  </div>
);

export default MuiExample;