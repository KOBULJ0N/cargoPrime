import React from 'react';
import { AnchorContainer, Scroll } from './style';

export const Anchor = ({href}) => {
  return (
    <AnchorContainer href={href}>
      <Scroll />
    </AnchorContainer>
  );
};
export default Anchor;
