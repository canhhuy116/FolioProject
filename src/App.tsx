import React from 'react';
import './assets/style/App.scss';
import HeaderPage from './components/Header/Header';
import WhoWeArePage from './components/WhoWeAre/WhoWeAre';
import ServicesPage from './components/Services/Services';
import WorksPage from './components/Works/Works';
import CTAPage from './components/CTA/CTA';
import JobPage from './components/Job/Job';
import FooterPage from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <WhoWeArePage />
      <ServicesPage />
      <WorksPage />
      <CTAPage />
      <JobPage />
      <FooterPage />
    </div>
  );
}

export default App;
