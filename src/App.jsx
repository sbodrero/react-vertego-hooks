import React, { useEffect, useState } from 'react';
import AppLayout from './components/layouts';
import './App.css';

function App() {
  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');
  const createPhrase = () => {
    setPhrase(val);
    set('');
  };
  useEffect(() => {
    console.log(`typing "${val}"`);
  });
  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  });
  return (
    <AppLayout>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        Favorite phrase:
        <input
          value={val}
          placeholder={phrase}
          onChange={(e) => set(e.target.value)}
        />
      </label>
      <button type="button" onClick={createPhrase}>send</button>
    </AppLayout>
  );
}

export default App;
