import React, { useState } from 'react';

import { Header, Logo, Nav } from './style';

const NavBar: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return(
    <Header>
      <Logo src="images/logo.png"/>
      <Nav open={openMenu}>
        <ul>
          <li><a href="#contentInit" className="button-menu">Home</a></li>
          <li><a href="#contentSobre" className="button-menu">Sobre</a></li>
          <li><a href="#contentServicos" className="button-menu">Serviços</a></li>
          <li><a href="#contentContato" className="button-menu">Contato</a></li>
          <li><img src="icons/facebook.png" width="25px" alt="facebook icon" />
            <img src="icons/instagram-sketched.png" width="25px" alt="facebook icon" />
            <img src="icons/github.png" width="25px" alt="facebook icon" /> </li>
        </ul>
        <button><i className="material-icons" onClick={() => setOpenMenu(!openMenu)}>menu</i></button>
      </Nav>
    </Header>
  );
}

export default NavBar;