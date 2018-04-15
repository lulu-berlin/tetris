import * as React from 'react';

export type TetrisRowProps = {
  row: boolean[];
};

export const TetrisRow: React.SFC<TetrisRowProps> = ({row}) => (
  <span>
  {row.map(cell => cell ? '\u25A1' : '\u00a0')}
  <br/>
  </span>
);
