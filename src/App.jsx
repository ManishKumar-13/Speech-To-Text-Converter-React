import React from 'react';
import '@babel/polyfill';
import SpeechToTextConverter from './components/SpeechToTextConverter.jsx';

function App() {
  return (
    <div className="App">
      <SpeechToTextConverter />
    </div>
  );
}

export default App;
