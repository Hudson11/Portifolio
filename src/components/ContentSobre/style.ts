import styled from 'styled-components';

export const Content = styled.div`
  padding: 0 5px 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelSection = styled.p`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  color: #fff;
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

export const Grid = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  .imgback {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > img {
      border-radius: 50%;
      width: 80%;
    }
  }
  .description {
    width: 50%;
    * {
      color: white;
      padding: 0;
      margin: 0;
      font-family: 'Quicksand';
    }
    > strong {
      font-size: 30px;
    }
    > p {
      margin-top: 30px;
    }

    > p a{
      color: blue;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  width: 70%;
  @media screen and (max-width: 770px) {
    width: 100%;
    .imgback {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center
    }
    .description {
      width: 100%;
      > p {
        text-align: justify;
      }
      > strong {
        display: flex;
        justify-content: center;
        align-items: center
      }
    }
  }
`;