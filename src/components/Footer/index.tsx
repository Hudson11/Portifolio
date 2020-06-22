import React from 'react';

import { FooterBar, Container } from './style';

const Footer: React.FC = () => {
  return(
    <FooterBar>
       <Container>
         <p> Created by HudsonDev, All rights reserved. </p>
         <p> @Copyright </p>
       </Container>
    </FooterBar>
  );
}

export default Footer;