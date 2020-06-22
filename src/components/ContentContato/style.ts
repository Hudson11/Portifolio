import styled from 'styled-components';

export const Content = styled.div`
  padding: 20px 5px 20px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  > strong {
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > label{
    margin-bottom: 10px;
    color: #fff;
    font-size: 20px;
  }
`;