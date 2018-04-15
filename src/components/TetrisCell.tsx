import * as React from 'react';

export type TetrisCellProps = {
  cell: boolean;
};

export const TetrisCell: React.SFC<TetrisCellProps> = ({cell}) => (
  <span style={{visibility: cell ? 'visible' : 'hidden'}}>
    {'\u25a1'}
  </span>
);

 //? '\u25A1' : '\u00a0')}
