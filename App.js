import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PerfisComportamentais from './PerfisComportamentais';
import PerfilDominante from './PerfilDominante';
import PerfilInfluente from './PerfilInfluente';
import PerfilEstavel from './PerfilEstavel';
import PerfilConformidade from './PerfilConformidade';
import TesteDISC from './TesteDISC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfis-comportamentais" element={<PerfisComportamentais />} />
        <Route path="/perfil-dominante" element={<PerfilDominante />} />
        <Route path="/perfil-influente" element={<PerfilInfluente />} />
        <Route path="/perfil-estavel" element={<PerfilEstavel />} />
        <Route path="/perfil-conformidade" element={<PerfilConformidade />} />
        <Route path="/teste-disc" element={<TesteDISC />} />
      </Routes>
    </Router>
  );
}

export default App;
