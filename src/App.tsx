import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles';
import LoveSharePage from './pages/LoveSharePage';
import RelationshipPage from './pages/RelationshipPage';
// import Matches from './pages/Matches';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import Messages from './pages/Messages';
// import Events from './pages/Events';
// import NotFound from './pages/NotFound';

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
  const [count, setCount] = useState(0)

  return (
     <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LoveSharePage />} />
            <Route path="/relacionamento" element={<RelationshipPage />} />
            {/* <Route path="/matches" element={<Matches />} /> */}
            {/* <Route path="/messages" element={<Messages />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  )
}

export default App
