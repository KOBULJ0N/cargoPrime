import styled from 'styled-components';
import group from '../../../assets/images/background.png';

export const Container = styled.div`
	height: 1049px;
	/* padding-left: 250px; */
	background-image: url(${group});
	background-size: 100% 100%;
	width: 100%;
	margin-top: 62px;
	display: grid;
	grid-template-columns: 10% 0.94fr;
	padding-right: 150px;
`;


export const Wrapper = styled.div` 


`
export const Title = styled.div`
  text-transform: uppercase;
  text-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
  font-size: 160px;
  color: red;
  width: 777px;
  line-height: 180px;
  span {
    color: #47abd8;
  }
`;



export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  width: 633px;
  margin-top: 15px;
  /* identical to box height */

  color: #4f4f4f;
`;

export const Button = styled.button`
  border-radius: 50px;
  font-size: 22.422px;
  font-weight: 600;
  border: none;
  outline: none;
  padding: 4px 8px;
  margin-right: 15px;
  margin-top: 60px;
  color: #ff4242;
  background: #fff;
  cursor: pointer;
  transition: all 0.1s;
  :hover {
    color: #fff;
    background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
    box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.3);
  }
`;
