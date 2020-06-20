import styled from 'styled-components';

export const Logo = styled.img`
  width: 110px;
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 5px;

  > p {
    margin-top: 20px;
    color: #fff;
    font-size: 30px;
    font-family: 'Quicksand';
  }

  > span {
    font-size: 30px;
    color: #fff;
    font-family: 'Quicksand';
    text-align: center;
  }

  > a {
    text-decoration: none;
    color: #d60000;
    font-size: 18px;
    padding: 20px 30px 20px;
    border: 2px solid #d60000;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    margin-top: 20px;
    :hover {
      background-color: #d60000;
      color: #fff;
      box-shadow: 0px 0px 5px #d60000;
    }
  }
`;