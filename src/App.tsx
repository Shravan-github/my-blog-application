// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Box mt={3}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
