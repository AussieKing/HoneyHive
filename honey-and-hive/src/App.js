import React, { useState } from 'react';
import Layout from './components/Layout';
import FeedbackForm from './components/FeedbackForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [feedback, setFeedback] = useState([]);

    const handleNewFeedback = (newFeedback) => {
        setFeedback([...feedback, newFeedback]);
    };

    return (
      <div className='App'>
          <Layout>
              <FeedbackForm onSubmitFeedback={handleNewFeedback} />
              <div>
                  <h2>Feedback Received:</h2>
                  <ul>
                      {feedback.map((item, index) => (
                          <li key={index}>
                              <strong>{item.name}</strong> ({item.email}): {item.message}
                          </li>
                      ))}
                  </ul>
              </div>
          </Layout>
      </div>
  );
}

export default App;

