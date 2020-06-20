import styled from 'styled-components';


export const Content = styled.div`
  padding:0 5px 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelSection = styled.p`
  color: #fff;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Box = styled.div`
  width: 110px;
  height: 90px;
  background-color: #d60000;
  display:flex;
  align-items: center;
  justify-content: center;
  > label {
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    margin: 5px;
  }
`;

export const Container = styled.div`
  width: 70%;
`;

export const Grid = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s ease;
  @media screen and (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  padding: 10px 10px 30px;
  margin: 5px;
  background-color: #212121;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  * {
    color: #fff;
  }

  > p {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }

  > a {
    text-decoration: none;
    color: #d60000;
    font-size: 18px;
    width: 150px;
    height: 50px;
    border: 2px solid #d60000;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      background-color: #d60000;
      color: #fff;
      box-shadow: 0px 0px 5px #d60000;
    }
  }
`;