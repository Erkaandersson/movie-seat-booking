
import React from 'react';
import './App.css';
import  MoviePicker  from './components/MoviePicker.jsx';
import BookingForm  from './components/BookingForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoviePicker />
        <BookingForm />
      </header>
    </div>
  );
}

export default App;
