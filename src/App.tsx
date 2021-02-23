import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Search } from './Search';
import { Breedings } from './Breedings';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/szukaj">
            <Search />
          </Route>
          <Route path="/krok-2">
            <Step2 />
          </Route>
          <Route exact path="/">
            <Step1 />
          </Route>
          <>
            <Navbar />
            <Route path="/hodowle">
              <Breedings />
            </Route>
            <Footer />
          </>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
