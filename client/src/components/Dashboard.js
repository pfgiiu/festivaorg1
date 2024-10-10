import React from 'react';
import '../styles/Dashboard.css'; // Certifique-se de que o caminho está correto

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <h1>Bem-vindo ao FestivaOrg</h1>
      <p>O FestivaOrg é um sistema inovador para gerenciar grandes eventos de forma eficiente e organizada.</p>
      <p>Explore nossas funcionalidades e veja como podemos ajudar a tornar seu evento um sucesso!</p>

      <div className="system-section">
        <h2>Nosso Sistema</h2>
        <div>
          <h3>Como o Festiva te Ajuda?</h3>
          <p>O FestivaOrg facilita a organização do seu evento, permitindo um gerenciamento mais ágil e eficaz.</p>
        </div>
        <div>
          <h3>Como ele melhora o desempenho das pessoas?</h3>
          <p>Com ferramentas intuitivas, os membros da equipe podem se concentrar no que realmente importa: a experiência do público!</p>
        </div>
        <div>
          <h3>Por que usar o FestivaOrg?</h3>
          <p>O FestivaOrg oferece suporte técnico em tempo real e relatórios que ajudam a tomar decisões informadas durante o evento.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
