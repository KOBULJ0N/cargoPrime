/** @format */

import styled from 'styled-components';
import { ReactComponent as img1 } from '../../assets/startBlock/1.svg';
import { ReactComponent as img2 } from '../../assets/startBlock/2.svg';
import { ReactComponent as img3 } from '../../assets/startBlock/3.svg';
import { ReactComponent as img4 } from '../../assets/startBlock/4.svg';
import { ReactComponent as img5 } from '../../assets/startBlock/5.svg';
import { ReactComponent as img6 } from '../../assets/startBlock/6.svg';

export const Block = styled.div`
  position: fixed;
  height: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
  margin-top: 150px;
`;

Block.Inset = styled.div`
  height: 350px;
  display: grid;
  justify-content: center;
  align-items: center;
  div {
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

Block.Img1 = styled(img1)`
  :hover {
    fill: red;
  }
  fill: ${({ active }) => active === 1 && 'red'};
`;
Block.Img2 = styled(img2)`
  :hover {
    fill: red;
  }
  margin-left: 3px;
  fill: ${({ active }) => active === 2 && 'red'};
`;
Block.Img3 = styled(img3)`
  :hover {
    fill: red;
  }
  fill: ${({ active }) => active === 3 && 'red'};
`;
Block.Img4 = styled(img4)`
  :hover {
    fill: red;
  }
  fill: ${({ active }) => active === 4 && 'red'};
`;
Block.Img5 = styled(img5)`
  :hover {
    fill: red;
  }
  fill: ${({ active }) => active === 5 && 'red'};
`;
Block.Img6 = styled(img6)`
  :hover {
    fill: red;
  }
  fill: ${({ active }) => active === 6 && 'red'};
`;

export default Block;
