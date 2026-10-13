import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1 style={{ color: '#ff2d20' }}>Laravel + React + Docker</h1>
            <p>Welcome! Your team Docker development environment is running successfully.</p>
        </div>
    );
}

const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<App />);
}
