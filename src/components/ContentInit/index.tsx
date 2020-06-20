import React from 'react';

import { Content, Logo } from './style';

const ContentInit: React.FC = () => {
  return (
    <Content>
      <Logo src="images/person.jpg" alt="person avatar"/>
      <p> Hudson Borba </p>
      <span> WebDeveloper and MobileDeveloper </span>
      <a href="#contentSobre"> Get Started </a>
    </Content>
  );
}

export default ContentInit;