# grid

[![NPM version][npm-image]][npm-url]
[![Unix Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Grid system

## Install

    npm install --save @nordnetab/grid
    # or
    yarn add @nordnetab/grid

## Usage

```js
import { Grid, Row, Col } from 'grid';

const App = () => (
  <Grid>
    <Row>
      <Col xs={12} sm={8} md={6} lg={4}>
        …
      </Col>
    </Row>
  </Grid>
)
```

See more at https://nordnet.github.io/grid/

## License

MIT © [Nordnet Bank AB](https://www.nordnet.se)

[npm-url]: https://npmjs.org/package/grid
[npm-image]: https://img.shields.io/npm/v/grid.svg?style=flat-square

[travis-url]: https://travis-ci.org/nordnet/grid
[travis-image]: https://img.shields.io/travis/nordnet/grid.svg?style=flat-square&label=unix

[appveyor-url]: https://ci.appveyor.com/project/nordnet/grid
[appveyor-image]: https://img.shields.io/appveyor/ci/nordnet/grid.svg?style=flat-square&label=windows

[coveralls-url]: https://coveralls.io/r/nordnet/grid
[coveralls-image]: https://img.shields.io/coveralls/nordnet/grid.svg?style=flat-square

[depstat-url]: https://david-dm.org/nordnet/grid
[depstat-image]: https://david-dm.org/nordnet/grid.svg?style=flat-square
