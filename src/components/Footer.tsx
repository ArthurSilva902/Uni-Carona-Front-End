import React from 'react';
import styled from 'styled-components';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2563eb;
  color: #ffffff;
  padding: 64px 32px 32px 32px;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  margin-top: 64px;
`;

const FooterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
  gap: 16px;
`;

const BrandTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const BrandDescription = styled.p`
  font-size: 14px;
  color: #bfdbfe;
  line-height: 1.5;
  margin: 0;
`;

const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  color: #bfdbfe;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;

  a {
    color: #bfdbfe;
    transition: color 0.2s;
    
    &:hover {
      color: #ffffff;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid #3b82f6;
  color: #bfdbfe;
  font-size: 14px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <Column>
          <BrandTitle>UniCarona</BrandTitle>
          <BrandDescription>
            Conectando estudantes para viagens mais seguras, econômicas e sustentáveis. A sua comunidade universitária em movimento.
          </BrandDescription>
        </Column>

        <Column>
          <ColumnTitle>Serviços</ColumnTitle>
          <FooterLink>Buscar Caronas</FooterLink>
          <FooterLink>Oferecer Carona</FooterLink>
          <FooterLink>Rotas Frequentes</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Segurança</ColumnTitle>
          <FooterLink>Verificação de Estudantes</FooterLink>
          <FooterLink>Diretrizes de Comunidade</FooterLink>
          <FooterLink>Central de Ajuda</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Sobre nós</ColumnTitle>
          <FooterLink>Nossa História</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Carreiras</FooterLink>
        </Column>

        <Column>
          <ColumnTitle>Redes Sociais</ColumnTitle>
          <SocialIcons>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
          </SocialIcons>
        </Column>
      </FooterGrid>

      <Copyright>
        © {new Date().getFullYear()} UniCarona. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};
