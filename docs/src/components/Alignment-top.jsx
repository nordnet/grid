import React from 'react';
import { Row, Col } from './grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem';

class AlignmentTop extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row xsTop>
    <Col xs={6}>
      ...
    </Col>
    <Col xs={6}>
      ...
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <Row xsTop>
        <Col xs={6}>
          <Box style={ {minHeight: '6rem'} } />
        </Col>
        <Col xs={6}>
          <Box />
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        subTitle="Top"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default AlignmentTop;
