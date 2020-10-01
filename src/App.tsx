import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import MovieList from "./components/movies/MovieList";
import MovieView from "./components/movies/MovieView";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Route
        exact
        path="/"
        component={MovieList}
      />
      <Route
        path="/movie/:id"
        component={MovieView}
      />
      <Footer />
    </Router>
  );
}

export default App;
