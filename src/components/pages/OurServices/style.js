/** @format */

import styled from 'styled-components';
import { ReactComponent as truck } from '../../../assets/Icons/truck.svg';

export const Block = styled.div`
  width: 100%;
  height: 800px;
  /* display: grid;
	grid-template-columns: 10% 1fr;
	padding-top: 120px; */
  display: grid;
  grid-template-columns: 10% 1fr;
  padding-right: 130px;
`;

Block.Right = styled.div``;
Block.RightInsetBig = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
`;

Block.RightInset = styled.div`
  height: 100%;
  text-align: ${({ poss }) => (poss ? poss : 'none')};
  padding: 50px 50px;
`;

Block.Img = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(truck)`
  width: 119px;
  height: 57px;
  margin: 0 auto;
`;

export const Main = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;
  box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.2);
`;
Main.Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 60px;
  color: #4f4f4f;
  text-align: center;
  margin: 10px 0;
`;
Main.Anchor = styled.div`
  margin-top: 100px;
`;

export default Block;
