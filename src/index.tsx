import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Playground} from './components/Playground';

const matrix = [
  [false, false, false, false, false, false, false, false, false, false],
  [true,  true,  true,  true,  true,  true,  true,  false, false, false],
  [false, false, false, true,  false, false, true,  false, false, false],
  [false, false, false, true,  false, false, true,  false, false, false],
  [true,  true,  true,  true,  true,  true,  true,  false, false, false],
  [false, false, false, true,  false, false, true,  false, false, false],
  [false, false, false, true,  false, false, true,  false, false, false],
  [true,  true,  true,  true,  true,  true,  true,  false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false]
];

ReactDOM.render(
  <Playground matrix={matrix}/>,
  document.getElementById('tetris')
);
