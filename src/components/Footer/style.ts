import styled from 'styled-components';

export const Logo = styled.img`
  width: 150px;
`;

export const FooterBar = styled.footer`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;

export const  Container = styled.div`
  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > ul {
    width: 50%;
    list-style: none;
  }
  > p {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    font-family: 'Quicksand';
  }
`;

export const  Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
