'use client';
// app/skills/page.tsx

import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-3xl font-bold">Competenze</h1>
      <ul className="mt-4">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        {/* Aggiungi altre competenze qui */}
      </ul>
    </div>
  );
};

export default Skills;
