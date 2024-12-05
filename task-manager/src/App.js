import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
