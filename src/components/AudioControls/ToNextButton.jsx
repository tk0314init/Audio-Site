import React, { useState, useRef } from 'react';
import './styles.css';

function ToNextButton({toSkipNext}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        opacity: isHovered ? 1 : 0.3,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toSkipNext}
    >
      <div className="next" />
      <div className="bar" />
    </div>
    );
}

export default ToNextButton