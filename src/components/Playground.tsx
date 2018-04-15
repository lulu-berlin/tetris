import * as React from 'react';

import {TetrisRow} from './TetrisRow';

export type PlaygroundProps = {
  matrix: boolean[][];
};

export const Playground: React.SFC<PlaygroundProps> = ({matrix}) => (
  <>{matrix.map(row => <TetrisRow row={row}/>)}</>
);
