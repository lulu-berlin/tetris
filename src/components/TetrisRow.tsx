import * as React from 'react';

import {TetrisCell} from './TetrisCell';

export type TetrisRowProps = {
  row: boolean[];
};

export const TetrisRow: React.SFC<TetrisRowProps> = ({row}) => (
  <>
    {row.map(cell => <TetrisCell cell={cell}/>)}
    <br/>
  </>
);
