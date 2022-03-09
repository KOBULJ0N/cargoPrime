import styled from 'styled-components';
// import { ReactComponent as logo } from '../../../assets/Icons/logo.svg';
import { ReactComponent as instagram } from '../../../assets/Icons/instagramm.svg';
import { ReactComponent as facebook } from '../../../assets/Icons/facebook2.svg';
import { ReactComponent as google } from '../../../assets/Icons/google.svg';

import logo from '../../../assets/images/header/logo.png';

export const Container = styled.div`
  background: #29637d;
  display: flex;
  color: #fff;
  justify-content: space-between;
  padding: 100px 100px 30px 100px !important;
  padding: 3% 8%;
  flex-wrap: wrap;

  font-style: normal;
  font-weight: normal;
  font-size: 25.456px;
  line-height: 38px;
`;

export const Logo = styled(logo)`
  cursor: pointer;
`;

Logo.NavLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
`;
Logo.Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: ${({ blue }) => (blue ? 'var(--colorBlue)' : 'var(--colorRed)')};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: ${({ end }) => end === 'true' && 'end'};
`;

export const Link = styled.a`
  text-decoration: none;
  max-width: 256px;
  /* margin-right: ${({ marginright }) => marginright && '15px'}; */
  color: var(--colorWhite);
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    border-bottom: 1px solid var(--colorWhite);

    display: ${({ invisible }) => (invisible ? 'none' : 'block')};
    opacity: 0;
    bottom: 0;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
`;

Logo.Info = styled.div`
  width: 226px;
`;

Wrap.Number = styled.div``;

export const Iconlink = styled.a`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* text-align: center; */
`;

export const Brandname = styled.img.attrs({
  src: `${logo}`,
})`
  width: 245.8px;
  height: 45px;
  cursor: pointer;
`;

export const Instagram = styled(instagram)`
  height: 27px;
  width: 27px;
  path {
    fill: #fff;
  }
`;
export const Facebook = styled(facebook)`
  height: 27px;
  width: 27px;
  path {
    fill: #fff;
  }
`;
export const Google = styled(google)`
  height: 27px;
  width: 27px;
  path {
    fill: #fff;
  }
`;
