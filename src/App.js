import './App.css';
import WorkSpace from './components/Workspace';
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './colors';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <WorkSpace />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
