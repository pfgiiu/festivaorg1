import React from 'react';
import '../styles/Valores.css'; // Adicione um CSS para a nova seção

const Valores = () => {
  return (
    <div className="valores">
      <h1>Valores</h1>
      <div className="sistema">
        <h2>Sistema 1: Eventos Menores</h2>
        <p>Ideal para eventos menores, este sistema oferece funcionalidades limitadas, como:</p>
        <ul>
          <li>Cadastro de participantes</li>
          <li>Gestão de vendas de ingressos</li>
          <li>Relatórios básicos de performance</li>
        </ul>
      </div>

      <div className="sistema">
        <h2>Sistema 2: Eventos de Médio Porte</h2>
        <p>Perfeito para eventos de médio porte, incluindo todas as funcionalidades do Sistema 1 e:</p>
        <ul>
          <li>Gerenciamento de escalas de trabalho</li>
          <li>Comunicação em tempo real</li>
          <li>Relatórios avançados</li>
        </ul>
      </div>

      <div className="sistema">
        <h2>Sistema 3: Grandes Festivais</h2>
        <p>A experiência completa para grandes festivais, com todas as funcionalidades dos sistemas anteriores e:</p>
        <ul>
          <li>Suporte técnico 24/7</li>
          <li>Gestão de VIP e acreditação</li>
          <li>Central de documentação e contratos</li>
        </ul>
      </div>

      <div className="sistema">
        <h2>Sistema 4: Personalização Básica</h2>
        <p>Para contratantes que desejam adicionar funcionalidades específicas, este sistema permite que você escolha as funções que deseja incluir.</p>
      </div>

      <div className="sistema">
        <h2>Sistema 5: Personalização Completa</h2>
        <p>A experiência mais completa, onde o contratante pode solicitar funcionalidades personalizadas e ajustes específicos para suas necessidades.</p>
      </div>
    </div>
  );
};

export default Valores;
