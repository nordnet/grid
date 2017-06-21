import React from 'react';
import { Row, Col } from './grid';
import Box from './Box';
import StyleGuideItem from './StyleGuideItem'

class Reversing extends React.Component {
  render() {
    const simplifiedMarkup = `<Grid>
  <Row>
    <Col xs={5} noPadding>
      Left half
    </Col>
    <Col xs={5} noPadding>
      Right half
    </Col>
  </Row>
</Grid>`;

    const markup = (
      <Row>
        <Col xs={12} noPadding>
          <Row>
            <Col xs={6} noPadding>
              <Box style={{ borderRight: '1px solid darkblue', padding: '1rem' }}>
                Left half
              </Box>
            </Col>
            <Col xs={6} noPadding>
              <Box style={{ padding: '1rem' }}>
                Right half
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
    );

    return (
      <StyleGuideItem
        title="No Padding"
        simplifiedMarkup={ simplifiedMarkup }
      >
      { markup }
      </StyleGuideItem>
    );
  }
}

export default Reversing;
