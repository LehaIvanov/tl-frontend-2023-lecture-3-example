import { FeedbackForm } from './components/FeedbackForm';
import "./App.css";
import { Feedback, FeedbackContext, } from './context/feedback';
import { useState } from 'react';

function App() {
  const [state, setState] = useState<Feedback>({rating: 1, message: ''});

  return (
    <div>
      <FeedbackContext.Provider value={{feedback: state, setFeedback: setState}}>
        <FeedbackForm title='How nice was my reply?'/>
      </FeedbackContext.Provider>
    </div>
  )
}

export default App
