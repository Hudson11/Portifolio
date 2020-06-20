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