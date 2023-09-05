import React, { useState, useEffect } from 'react';

const words = ['javascript', 'python', 'ruby on tails'];

function AppOutside(props) {
  const [, renderKey] = useState();

  useEffect(() => {
    window.addEventListener('keydown', renderKey);
    return (() => window.removeEventListener('keydown', renderKey));
  }, []);

  useEffect(() => {
    console.log(words, 'fresh render');
  }, []);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default AppOutside;
