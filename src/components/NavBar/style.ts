import styled from 'styled-components';

interface Props {
  open: boolean
}

export const Logo = styled.img`
  width: 150px;
`;

export const Header = styled.header`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Nav = styled.nav<Props>`
  width: 500px;
  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: 0.4s ease;
  }

  > ul, li, a {
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s ease;
    font-weight: bold;
    text-decoration: none;
    > img {
      margin-right: 10px;
    }
  }

  .button-menu {
    :hover {
      color: #d60000;
    }
  }

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
    > i {
      color: white;
      font-size: 45px
    }
  }

  @media screen and (max-width: 700px){
    > ul {
      transition: display 0.4s ease;
      display: ${props => props.open ? 'flex' : 'none'};
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      padding: none;
      margin: none;
      background-color: black;
    }
    > button {
      display: block;
    }
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

`;