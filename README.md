# grid

[![Greenkeeper badge](https://badges.greenkeeper.io/nordnet/grid.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Grid system

## Install

```sh
npm install --save @nordnet/grid
# or
yarn add @nordnet/grid
```

## Usage

```js
import React from 'react';
import { Grid, Row, Col } from '@nordnet/grid';

const App = () => (
  <Grid>
    <Row>
      <Col xs={12} sm={8} md={6} lg={4}>
        GRID
      </Col>
    </Row>
  </Grid>
)

export default App;
```

See more at https://nordnet.github.io/grid/

## Example (docs)

(`yarn` is interchangable with `npm` in this example)

```sh
yarn run docs:install
# then
yarn run docs:start
```


## License

MIT © [Nordnet Bank AB](https://www.nordnet.se)

[npm-url]: https://npmjs.org/package/@nordnet/grid
[npm-image]: https://img.shields.io/npm/v/@nordnet/grid.svg?style=flat-square

[travis-url]: https://travis-ci.org/nordnet/grid
[travis-image]: https://img.shields.io/travis/nordnet/grid.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/nordnet/grid
[coveralls-image]: https://img.shields.io/coveralls/nordnet/grid.svg?style=flat-square

[depstat-url]: https://david-dm.org/nordnet/grid
[depstat-image]: https://david-dm.org/nordnet/grid.svg?style=flat-square
