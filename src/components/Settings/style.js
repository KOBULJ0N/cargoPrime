import styled from 'styled-components';
// import { ReactComponent as down } from '../../assets/Icons/down.svg';
import { ReactComponent as down } from '../../assets/assets/Icons/down.svg';
import { ReactComponent as employee } from '../../assets/assets/Icons/employee.svg';
import { ReactComponent as truck } from '../../assets/Icons/truck.svg';
import { ReactComponent as story } from '../../assets/assets/Icons/bigStory.svg';
import group from '../../assets/images/back.png';

import { ReactComponent as amazon } from '../../assets/assets/Icons/Amazon.svg';
import { ReactComponent as partner2 } from '../../assets/assets/Icons/partner2.svg';
import { ReactComponent as fedex } from '../../assets/assets/Icons/fedex.svg';
import { ReactComponent as silchuk } from '../../assets/assets/Icons/silchuk.svg';
import { ReactComponent as pepsi } from '../../assets/assets/Icons/pepsi.svg';
import { ReactComponent as landstar } from '../../assets/assets/Icons/landstar.svg';
import { ReactComponent as hubgroup } from '../../assets/assets/Icons/hubgroup.svg';
import { ReactComponent as hunt } from '../../assets/assets/Icons/hunt.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 5% 8%; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1850px;
  margin-top: 30px;
`;

Container.Curved = styled.div`
  width: 100%;
`;
export const Employee = styled(employee)`
  margin: 35px 0;
`;
export const Truck = styled(truck)`
  margin: 35px 0;
`;
export const Story = styled(story)`
  margin: 35px 0;
`;
export const Down = styled(down)``;
Down.Wrap = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  margin: 0 auto;
  transition: 0.3s;
  :hover ${Down} {
    path {
      stroke: #00bfea;
    }
    transform: translateY(10px);
  }
`;
export const Card = styled.div`
  padding: 27px 34px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorWhite);
`;

Card.Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 103px;
  margin-bottom: 93px;
  padding: 2% 8%;
  flex-wrap: wrap;
  margin-left: 50px;
`;
Card.WrapperMain = styled.div`
  display: grid;
  justify-content

`;
Card.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 82.459px;
  line-height: 124px;
  color: #47abd8;
`;
Card.Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 21.443px;
  line-height: 32px;
  color: #47abd8;
`;

export const Partner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 86.2vh;
  padding: 8% 0;
  flex-wrap: wrap;
`;

Partner.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: #808080;
  margin-bottom: 60px;
`;

export const Amazon = styled(amazon)``;
export const Partner2 = styled(partner2)``;
export const Fedex = styled(fedex)``;
export const Silchuk = styled(silchuk)``;
export const Pepsi = styled(pepsi)``;
export const Landstar = styled(landstar)``;
export const Hubgroup = styled(hubgroup)``;
export const Hunt = styled(hunt)``;

Partner.Icons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

Partner.Icon = styled.div`
  width: fit-content;
  margin: 0 50px;
`;

export const AboutUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* height: 55vh; */
  height: fit-content;
  padding: 8% 0;
  background-color: #47abd8;
`;

AboutUs.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: var(--colorWhite);
  margin-bottom: 37px;
`;

export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 0.94fr;
  padding-right: 150px;
  align-items: center;
  background-image: url(${group});
  background-size: 100% 100%;
`;
