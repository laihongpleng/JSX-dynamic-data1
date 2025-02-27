import React from 'react';

function Header() {
  return (
    <header>
      <h1>The amazing atomic clock</h1>
    </header>
  );
}

function Time({ dateTime }) {
  const time = new Date(dateTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div>
      <p>The date now is:</p>
      <p>{time}</p>
    </div>
  );
}

function Main() {
  const now = new Date(); // Get current date and time

  return (
    <main>
      <Time dateTime={now} />
    </main>
  );
}

function App() {
  return (
    <div id="block"> {/* Added block div for styling */}
      <Header />
      <Main />
    </div>
  );
}

export default App;