'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';

const Home = () => {
  // Stati per gestire il tema e la lingua
  const [theme, setTheme] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('it');

  // Funzione per cambiare tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  // Funzione per caricare il file JSON della lingua
  const loadLanguage = async (lang: string) => {
    try {
      const response = await fetch(`/json/${lang}.json`);
      const data = await response.json();
      document.getElementById('blog-link')!.textContent = data.blog;
      document.getElementById('projects-link')!.textContent = data.projects;
      document.getElementById('skills-link')!.textContent = data.skills;
      localStorage.setItem('language', lang);
      setLanguage(lang);
    } catch (error) {
      console.error('Errore nel caricamento della lingua:', error);
    }
  };

  // Caricare il tema e la lingua salvati all'avvio
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }

    const savedLanguage = localStorage.getItem('language') || 'it';
    loadLanguage(savedLanguage);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
        <title>Lorenzo Zoccarato</title>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </Head>

      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="px-4 py-2 text-gray-800 dark:text-white">
              <svg id="logo" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 500" strokeWidth="1.5" stroke="currentColor" style={{ width: '80px', height: '80px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M174.6 138.1c-3.1 2.4-3.3 5.3-.6 9.4 1.1 1.7 2 4.7 2 7 0 3.7-23.3 88.3-26.7 96.7-1 2.5-3.1 5-5.9 6.9-6 4.1-8 7.3-6.6 10.4.7 1.6 2.2 2.6 4.4 3 1.8.3 27.2.5 56.3.3 51.4-.3 53.1-.4 56.5-2.4 4.8-2.7 7.3-7.8 11.9-23.5 4.3-14.6 5.9-16.9 12.9-18.8 3.8-1.1 22.2-1.5 22.2-.5 0 .3-16.1 17.5-35.7 38.2-19.6 20.7-39.2 41.4-43.4 45.9-9.4 9.9-12.3 15.1-11.6 20.6.7 4.9 4.8 9.4 9.9 10.8 2.4.6 22.7.9 55.7.7 50.9-.3 52-.3 54.8-2.4 4.8-3.6 6.8-7.6 10.7-22 4.4-15.8 4.2-17.8-1.7-20.7-2.7-1.4-4.8-1.7-8-1.2-3.7.6-5.4 1.9-15.7 12.4-6.3 6.5-12.5 12.4-13.7 13-1.3.7-7.8 1.1-16.5 1.1h-14.3l46.4-46.4c25.6-25.5 47-47.5 47.7-48.9 3.9-7.4 1.9-15.7-4.6-18.9-3.2-1.6-8-1.8-56-1.8-48.7 0-52.8.2-56.5 1.9-4.8 2.2-7.2 6.4-11 19.3-2 7-3.5 9.8-7.5 14.6-6.5 7.8-9.6 9.2-20.4 9.2-4.7 0-8.6-.2-8.6-.4 0-1.1 25.2-89.5 26.6-93.3.8-2.3 3.2-5.6 5.2-7.3 2-1.7 4.7-4 6-5 2.8-2.4 3-7.5.3-9-1.2-.6-13.2-1-31.9-1-28.8 0-30 .1-32.6 2.1z"/>
              </svg>
            </div>

            {/* Navigazione */}
            <nav className="hidden md:flex space-x-8">
              <a id="skills-link" href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-white">Competenze</a>
              <a id="projects-link" href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-white">Progetti</a>
              <a id="blog-link" href="#blog" className="text-gray-600 hover:text-gray-900 dark:text-white">Blog</a>
            </nav>

            {/* Cambio Tema e Lingua */}
            <div className="ml-4 flex space-x-4">
              {/* Pulsante per cambio tema */}
              <button onClick={toggleTheme} className="px-4 py-2 text-black dark:text-white rounded-md flex items-center">
                <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-6 w-6 ${theme === 'dark' ? 'hidden' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-6 w-6 ${theme === 'light' ? 'hidden' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </button>

              {/* Bandiere per cambio lingua */}
              <button id="it-flag" onClick={() => loadLanguage('it')} className={`p-2 ${language === 'it' ? 'hidden' : ''}`}>
                <img src="/images/en.svg" alt="Italiano" className="h-6 w-6" />
              </button>
              <button id="en-flag" onClick={() => loadLanguage('en')} className={`p-2 ${language === 'en' ? 'hidden' : ''}`}>
                <img src="/images/it.svg" alt="English" className="h-6 w-6" />
              </button>
            </div>

            {/* Icona menu mobile */}
            <div className="md:hidden">
              <button id="menuButton" className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          <div id="mobileMenu" className="md:hidden hidden px-6 py-4 space-y-2">
            <a id="skills-link-mobile" href="#skills" className="block text-gray-800 hover:text-gray-900 dark:text-white">Competenze</a>
            <a id="projects-link-mobile" href="#projects" className="block text-gray-800 hover:text-gray-900 dark:text-white">Progetti</a>
            <a id="blog-link-mobile" href="#blog" className="block text-gray-800 hover:text-gray-900 dark:text-white">Blog</a>
          </div>
        </header>
      </body>
    </>
  );
};

export default Home;