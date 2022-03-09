import styled from 'styled-components';


import logo from '../../assets/images/header/logo.png';
import phone from '../../assets/images/header/phone.png';
import zoom from '../../assets/images/header/zoom.png';
import menu from '../../assets/images/header/menu.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding-left: 126px;
  padding-right: 65.61px;
  width: 100%;
  box-shadow: 7px 7px 18px rgba(0,0,0, 0.2);
  background: #fff;
  z-index: 9999999999;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 36px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Button = styled.button`
  border-radius: 50px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  padding: 0 8px;
  background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
  cursor: pointer;
`;

export const ButtonOrange = styled.button`
	border-radius: 50px;
	height: 30px;
	border: none;
	outline: none;
	font-weight: 500;
	font-size: 18px;
	color: #fff;
	padding: 0px 8px;
	background: linear-gradient(179.61deg, #f7931e -194.86%, #ff4242 70.66%);
	cursor: pointer;
`;

export const Brandname = styled.img.attrs({
  src: `${logo}`
})`
  width: 245.8px;
  height: 45px;
  cursor: pointer;
`;

export const Phone = styled.img.attrs({
  src: `${phone}`
})`
  width: 15.28px;
  cursor: pointer;
  height: 26.88px;
  margin: 6.15px;
`;

export const Search = styled.img.attrs({
  src: `${zoom}`
})`
  cursor: pointer;
  width: 26.78px;
  height: 26.9px;
  margin: 6.15px;
`;

export const Hamburger = styled.img.attrs({
  src: `${menu}`
})`
  cursor: pointer;

  width: 26.78px;
  height: 26.9px;
  margin: 6.15px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  color: #47abd8;
`;
