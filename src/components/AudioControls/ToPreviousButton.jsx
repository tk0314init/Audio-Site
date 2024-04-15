import React, { useState, useRef } from 'react';
import './styles.css';

function ToPreviousButton({toSkipPrevious}) {
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
      onClick={toSkipPrevious}
    >
      <div className="bar" />
      <div className="previous" />
    </div>
    );
}

export default ToPreviousButton