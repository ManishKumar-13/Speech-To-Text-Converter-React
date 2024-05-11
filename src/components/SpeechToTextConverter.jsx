// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import '../SpeechToTextConverter.css';

// const SpeechToTextConverter = () => {
//   const [convertedText, setConvertedText] = useState('');
//   const { transcript, listening, resetTranscript } = useSpeechRecognition();

//   const startListening = () => {
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   const stopListening = () => {
//     SpeechRecognition.stopListening();
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(convertedText);
//     alert('Text copied to clipboard!');
//   };

//   const handleConversion = () => {
//     setConvertedText(transcript);
//   };

//   return (
//     <div className="container">
//       <h1>Speech to Text Converter</h1>
//       <div className="buttons">
//         <button onClick={startListening} disabled={listening} className='start-button'>
//           Start Listening
//         </button>
//         <button onClick={stopListening} disabled={!listening} className='stop-button'>
//           Stop Listening
//         </button>
//         <button onClick={copyToClipboard} disabled={convertedText === ''} className='copy-button'>
//           Copy to Clipboard
//         </button>
//       </div>
//       <div className="converted-text">
//         <textarea value={convertedText} readOnly />
//       </div>
//     </div>
//   );
// };

// export default SpeechToTextConverter;

import React, { useState } from 'react';
import { useEffect } from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../SpeechToTextConverter.css';

const SpeechToTextConverter = () => {
  const [convertedText, setConvertedText] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedText);
    alert('Text copied to clipboard!');
  };

  // Update converted text when speech is recognized
  useEffect(() => {
    if (transcript !== '') {
      setConvertedText(transcript);
    }
  }, [transcript]);

  return (
    <div className="container">
      <h1>Speech to Text Converter</h1>
      <div className="buttons">
        <button onClick={startListening} disabled={listening} className='start-button'>
          Start Listening
        </button>
        <button onClick={stopListening} disabled={!listening} className='stop-button'>
          Stop Listening
        </button>
        <button onClick={copyToClipboard} disabled={convertedText === ''} className='copy-button'>
          Copy to Clipboard
        </button>
      </div>
      <div className="converted-text">
        <textarea value={convertedText} readOnly />
      </div>
    </div>
  );
};

export default SpeechToTextConverter;
