import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Preloader from './Preloader/Preloader';
import Modal from './Modal/Modal';
import { useModal } from '../hooks/useModal';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const CardsPage = lazy(() => import('../pages/CardsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const IS_LOADING_MS = 500;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { mode: modalMode, isOpen, openLogin, openRegister, close } = useModal();

  useEffect(() => {
    const handleContentLoaded = () => {
      setTimeout(() => setIsLoading(false), IS_LOADING_MS);
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      handleContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleContentLoaded);
      return () => document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    }
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Suspense fallback={<Preloader isLoading={true} />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage onLoginClick={openLogin} onSignUpClick={openRegister} />} />
                <Route path="/cards" element={<CardsPage onLoginClick={openLogin} onSignUpClick={openRegister} />} />
                <Route path="*" element={<NotFoundPage onLoginClick={openLogin} onSignUpClick={openRegister} />} />
              </Route>
            </Routes>
          </Suspense>
          {isOpen && <Modal onClose={close} mode={modalMode!} />}
        </>
      )}
    </>
  );
};

export default App;
