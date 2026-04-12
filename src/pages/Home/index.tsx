import React from 'react';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { HowItWorks } from '../../components/HowItWorks';
import { Footer } from '../../components/Footer';
import { HomeContainer, ContentArea } from './styles';

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <ContentArea>
        <SearchBar />
        <HowItWorks />
      </ContentArea>
      <Footer />
    </HomeContainer>
  );
};

