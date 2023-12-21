import React from 'react';
import UserGreeting from './UserGreeting';

function App() {
  const sampleUsername = 'JadeQuintero';

  return (
    <div className="App">
      <UserGreeting username={sampleUsername} />
    </div>
  );
}

export default App;