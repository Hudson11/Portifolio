import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Logo = styled.h2`
  color: #fff;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 0px);
  background-image: url('/images/fundo.jpg');
`;

export const Fab = styled.button`
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  border: 2px solid #d60000;
  color: #d60000;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s ease;
  > i {
    font-size: 30px;
  }
  :hover{
    background-color: #d60000;
    color: white;
  }
`;