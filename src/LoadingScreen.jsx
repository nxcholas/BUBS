import { useState } from 'react';
import './LoadingScreen.css';
import heartImage from './assets/images/heart.png';
import drifloon from './assets/images/drifloon-cute-1.png';

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
            id="instructions"
          >
            {/* Add your future elements here */}
            <div className='drifloon-container'>
            <img
              id='drifloon-left'
              className='drifloon-side'
              src={drifloon}
              width={300}
            />
            <img
              id='drifloon-right'
              className='drifloon-side'
              src={drifloon}
              width={300}
            />
            </div>
            <h1 className='heading'>scroll down and please follow the instructions listed below :)</h1>
            <h2 className='list-item'>- dress cute and comfy!</h2>
            <h2 className='list-item'>- make sure to eat breakfast, long activity ahead . . . :p</h2>
            <h2 className='list-item'>- be ready by 12PM!</h2>
            <h2 className='list-item'>- dinner around 7 hehe</h2>
          </div>
        )
      )}
    </>
  );
}

export default LoadingScreen;
