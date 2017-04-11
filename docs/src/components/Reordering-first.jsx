import React from 'react';
import { Row, Col } from './grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class ReorderingFirst extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={4}>
      <Box>1</Box>
    </Col>
    <Col xs={4}>
      <Box>2</Box>
    </Col>
    <Col xs={4} xsFirst>
      <Box>3</Box>
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <Row>
        <Col xs={4}>
          <Box>1</Box>
        </Col>
        <Col xs={4}>
          <Box>2</Box>
        </Col>
        <Col xs={4} xsFirst>
          <Box>3</Box>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="First"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default ReorderingFirst;
