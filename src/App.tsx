// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectGeniusSports from './pages/ProjectGeniusSports';
import ProjectVinted from './pages/VintedCloseUps';
import { BeatLoader } from 'react-spinners';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/projectgeniussports':
        title = 'LiveStats';
        metaDescription = 'Work in Genius Sports';
        break;
      case '/vintedvinted':
        title = 'Vinted';
        metaDescription = 'Close-Ups - Elevating Online Shopping with Immersive Visual Experiences';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }

    setLoading(false);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <BeatLoader color="#123abc" loading={loading} size={15} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectgeniussports" element={<ProjectGeniusSports />} />
          <Route path="/projectvinted" element={<ProjectVinted />} />
        </Routes>
      )}
    </>
  );
};

export default App;
