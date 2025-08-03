
import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Vpn from './pages/Vpn';
import Dns from './pages/Dns';
import Monitoring from './pages/Monitoring';
import Awareness from './pages/Awareness';
import Settings from './pages/Settings';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-900">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <MainContent />
        </div>
      </div>
    </HashRouter>
  );
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const currentLink = NAV_LINKS.find(link => link.path === location.pathname) || { title: 'Dashboard', path: '/' };

  return (
    <>
      <Header title={currentLink.title} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-900 p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vpn" element={<Vpn />} />
          <Route path="/dns" element={<Dns />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
};


export default App;
