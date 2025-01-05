import React from 'react';
import ChatbotComponent from './components/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100 bg-secondary'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-white shadow p-2 fw-bold mb-2 my-5 bg-primary rounded'>Welcome to Chatbot</h3>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <ChatbotComponent />
      </div>
      <footer className='mt-auto py-1  bg-dark'>
        <div className='container'>
          <p className='text-center text-white'>&copy; Copyright {new Date().getFullYear()} Akash Jadhav</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

