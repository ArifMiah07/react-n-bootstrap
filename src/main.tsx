import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom SCSS file
import './custom.scss';

// Optionally import Bootstrap JS (for modals, tooltips, etc.)
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
