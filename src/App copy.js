import React from 'react';
import './styles/global.scss';

const App = () => {
  const rows = 1;
  const columns = 10;

  return (
    <div
      className='grid-container'
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div className='grid-item' key={index}>
          {index === 4 && (
            <>
              <p
                style={{ display: 'flex', color: '#fff', alignItems: 'center' }}
              >
                hello
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
