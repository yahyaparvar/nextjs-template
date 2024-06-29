import React, { useState } from 'react';

// Progressbar component
export const Progressbar = () => {
  const [width, setWidth] = useState(50); // Initial width state

  // Watcher function for width changes
  const handleWidthChange = (value: number) => { // Explicitly typing 'value' as 'number'
    if (value > 100) {
      setWidth(100);
    } else if (value < 0) {
      setWidth(0);
    } else {
      setWidth(value);
    }
  };

  return (
    <div className="my-12">
      {/* Dark mode */}
        {/* Regular with text mode */}
        <div className="bg-gray-900 rounded h-8 mt-5" role="progressbar" aria-valuenow={width} aria-valuemin={0} aria-valuemax={100}>
          <div className="bg-green-400 rounded h-10 text-center text-white text-sm transition" style={{ width: `${width}%`, transition: 'width 2s' }}>
            {`${width}%`}
          </div>
        </div>

      {/* Input to update width */}
      <div className="mt-10 mx-32 mr-40">
        <input
          className="border border-gray-500 rounded ml-50"
          type="number"
        //   className="form-input"
          value={width}
          onChange={(e) => handleWidthChange(Number(e.target.value))} // Ensure value is converted to number
          min="1"
          max="100"
        />
      </div>
    </div>
  );
};
