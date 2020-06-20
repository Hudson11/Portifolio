import React from 'react';

import { Container, Body } from './style';
import ContentInit from '../../components/ContentInit';
import NavBar from '../../components/NavBar';
import ContentSobre from '../../components/ContentSobre';
import ContentServicos from '../../components/ContentServicos';
import ContentContato from '../../components/ContentContato';
import Footer from '../../components/Footer';

const Home: React.FC= () => {
  return(
    <Container>
      <NavBar />
      <Body id="contentInit">
        <ContentInit />
      </Body>
      <ContentSobre />
      <ContentServicos />
      <ContentContato />
      <Footer />
    </Container>
  );
}

export default Home;