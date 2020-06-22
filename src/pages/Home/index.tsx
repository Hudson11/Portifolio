import React, { useState } from 'react';

import { Container, Body, Fab } from './style';
import ContentInit from '../../components/ContentInit';
import NavBar from '../../components/NavBar';
import ContentSobre from '../../components/ContentSobre';
import ContentServicos from '../../components/ContentServicos';
import ContentContato from '../../components/ContentContato';
import Footer from '../../components/Footer';
import CardContato from '../../components/CardContato';

const Home: React.FC= () => {

  const [open, setOpen] = useState(false);

  return(
    <Container>
      <NavBar />
      <Body id="contentInit">
        <ContentInit />
      </Body>
      <ContentSobre />
      <ContentServicos />
      <ContentContato />
      <CardContato/>
      <Fab id="fabButton" onClick={()=>setOpen(!open)}><i className="material-icons">{open ? 'close' : 'contact_mail'}</i> </Fab>
      <Footer />
    </Container>
  );
}

export default Home;