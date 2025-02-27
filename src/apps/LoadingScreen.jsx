import { useState } from 'react';
import '../css/LoadingScreen.css';
import heartImage from '../assets/images/heart.png';
import RugQuestion from '../apps/RugQuestion';

function LoadingScreen() {
  const [isHeartVisible, setIsHeartVisible] = useState(true); // Toggle for the heart image
  const [showContainer, setShowContainer] = useState(false); // To control visibility of the container div

  const handleImageClick = () => {
    setIsHeartVisible(false); // Hide the heart image
    setShowContainer(true); // Show the empty container div
  };

  return (
    <>
      {isHeartVisible ? (
        <img
          id="heart"
          src={heartImage}
          alt="Loading"
          width={250}
          className="spin-twice-pause"
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        showContainer && (
          <div
            id="main-container"
          >
            {/* Add your future elements here */}
              <RugQuestion></RugQuestion>

          </div>
        )
      )}
    </>
  );
}

export default LoadingScreen;
