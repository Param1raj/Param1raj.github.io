import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { Box } from '@mui/material';
import background from './assets/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg';
function App() {
  return (
    <Box className="App" sx={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: "fixed", backgroundPositionY: { xs: "0rem", lg: "0rem", xl: "0rem", }, backgroundPositionX: { xs: "-8rem", sm: "0rem" } }}>
      <Home />
    </Box>
  );
}

export default App;
