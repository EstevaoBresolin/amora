
import LoveSharePage from './pages/LoveSharePage';
import RelationshipPage from './pages/RelationshipPage';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#FFD166',
    dark: '#2C3E50',
    light: '#FFFFFF',
    background: '#F8F9FA',
    gray: '#ADB5BD',
    success: '#06D6A0',
    warning: '#FFD166',
    danger: '#EF476F',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }
};

function App() {

  return (
     <ThemeProvider theme={theme}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LoveSharePage />} />
            <Route path="/relacionamento" element={<RelationshipPage />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
