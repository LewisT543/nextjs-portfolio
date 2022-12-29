import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is a baseline react/next.js app, demonstrating what a very small amount of work can do using these tools
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;