import React from 'react';
import styled, { keyframes } from 'styled-components';
import step1Img from '../assets/images/image1.jpg';
import step2Img from '../assets/images/image2.png';
import step3Img from '../assets/images/image3.png';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 32px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 80px;
  width: 100%;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  color: #1e293b;
  text-align: center;
  margin-bottom: 24px;
`;

const BlockContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 64px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  width: 100%;
  animation: ${fadeInUp} 1s both;
  animation-timeline: view();
  animation-range: entry 10% cover 40%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StepTitle = styled.h3`
  font-size: 28px;
  color: #2563eb;
  margin: 0;
`;

const StepDescription = styled.p`
  font-size: 18px;
  color: #475569;
  line-height: 1.6;
  margin: 0;
`;

export const HowItWorks: React.FC = () => {
  return (
    <SectionContainer>
      <MainTitle>Como funciona o UniCarona</MainTitle>

      <BlockContainer>
        <ImageWrapper>
          <img src={step1Img} alt="Encontre uma carona" />
        </ImageWrapper>
        <TextWrapper>
          <StepTitle>Encontre uma carona</StepTitle>
          <StepDescription>
            Descubra motoristas da sua universidade indo para o mesmo destino que você, de forma rápida e prática.
          </StepDescription>
        </TextWrapper>
      </BlockContainer>

      <BlockContainer reverse>
        <ImageWrapper>
          <img src={step2Img} alt="Reserve sua vaga" />
        </ImageWrapper>
        <TextWrapper>
          <StepTitle>Reserve sua vaga</StepTitle>
          <StepDescription>
            Escolha o melhor horário, confirme sua participação e garanta seu lugar com poucos cliques.
          </StepDescription>
        </TextWrapper>
      </BlockContainer>

      <BlockContainer>
        <ImageWrapper>
          <img src={step3Img} alt="Vá com segurança" />
        </ImageWrapper>
        <TextWrapper>
          <StepTitle>Vá com segurança</StepTitle>
          <StepDescription>
            Viaje com pessoas verificadas da sua instituição e tenha uma experiência mais segura e confiável.
          </StepDescription>
        </TextWrapper>
      </BlockContainer>
    </SectionContainer>
  );
};
