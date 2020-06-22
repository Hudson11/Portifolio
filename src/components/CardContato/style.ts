import styled from 'styled-components';

export const Container = styled.div`

`;

export const  Form = styled.form`
  display: flex;
  flex-direction: column;

  .box-field{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    > input { 
      height: 45px;
      border: none; 
      border-bottom: 1px solid #d60000;
      background-color: transparent;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-weight: bold;
      padding-left: 10px;
    }

    > textarea {
      height: 45px;
      border: none; 
      border-bottom: 1px solid #d60000;
      background-color: transparent;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-weight: bold;
      padding-left: 10px;
    }

    > label {
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      color: #fff;
      font-weight: bold;
    }
  }

  > button {
      text-decoration: none;
      background-color: transparent;
      height: 50px;
      color: #d60000;
      font-size: 18px;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  > p {
    font-size: 30px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`
export const IconButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover{
    background-color: black;  
  }
  > i {
    width: 24px;
    color: white;
  }

`;