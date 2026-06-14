import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CTABanner } from './CTABanner';

describe('Componente CTABanner', () => {
  it('deve renderizar o título principal (Call to Action)', () => {
    render(
      <BrowserRouter>
        <CTABanner />
      </BrowserRouter>
    );

    const titulo = screen.getByRole('heading', { level: 2 });
    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveTextContent(/Pronto para começar/i);
  });

  it('deve renderizar o link do botão de ação com o destino correto', () => {
    render(
      <BrowserRouter>
        <CTABanner />
      </BrowserRouter>
    );

    const linkDeAcao = screen.getByRole('link', { name: /Criar conta grátis/i });
    expect(linkDeAcao).toBeInTheDocument();
    expect(linkDeAcao).toHaveAttribute('href', '/cadastro');
  });

  it('deve exibir a tag destacando gratuidade para estudantes', () => {
    render(
      <BrowserRouter>
        <CTABanner />
      </BrowserRouter>
    );

    const tagEstudante = screen.getByText(/Grátis para estudantes/i);
    expect(tagEstudante).toBeInTheDocument();
  });
});
