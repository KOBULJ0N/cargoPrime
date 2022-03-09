/** @format */

import styled from 'styled-components';
import { ReactComponent as star } from '../../../assets/Icons/star.svg';
import { ReactComponent as settings } from '../../../assets/Icons/settings.svg';
import { ReactComponent as croun } from '../../../assets/Icons/croun.svg';

export const Block = styled.div`
	width: 100%;
	height: 900px;
	display: grid;
	grid-template-columns: 10% 1fr;
	padding-right: 150px;
	padding-top: 120px;
`;
Block.Left = styled.div`
	display: grid;
	align-items: center;
	width: 100%;
`;

export const Main = styled.div`
	padding-top: 70px;
	padding-bottom: 30px;
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

Block.Right = styled.div`
	padding-right: 60px;
`;

export const Right = styled.div``;
Right.Title = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 45px;
	color: #4f4f4f;
	text-align: center;
`;

Right.InsetBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: start;
	div {
		display: grid;
		justify-content: center;
		align-items: center;
	}
`;

Right.Block = styled.div`
	width: 289.55px;
	min-height: 320.62px;
	background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
	box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.302);
	border-radius: 20px;
	margin: 0 auto;
	padding: 30px;
	display: grid;
	justify-content: center;
	align-items: center;
`;
export const Img = styled.div``;
Img.Star = styled(star)`
	path {
		fill: #fff;
	}
	width: 40px;
	height: 40px;
`;

Img.Settings = styled(settings)`
	path {
		fill: #fff;
	}
	width: 40px;
	height: 40px;
`;

Img.Croun = styled(croun)`
	path {
		fill: #fff;
	}
	width: 40px;
	height: 40px;
`;

Right.BlockText = styled.div`
	font-family: Poppins;
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 27px;
	color: #f0fbff;
`;

Right.BlockTitle = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #4f4f4f;
	text-align: center;
	width: 100%;
	margin: 30px 0;
`;
Right.ChangeBlock = styled.div`
	margin-top: ${({ end }) => (end ? end : '0')}px;
	height: 100%;
	height: 500px;
`;

export default Block;
