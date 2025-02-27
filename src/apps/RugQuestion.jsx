import { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import chickey1 from '../assets/images/chickey-1.png';
import chickey2 from '../assets/images/chickey-2.jpg';
import chickey3 from '../assets/images/chickey-3.png';
import chickey4 from '../assets/images/chickey-4.png';
import chickey5 from '../assets/images/chickey-5.png';
import chickey6 from '../assets/images/chickey-6.png';
import drif from '../assets/images/drifloon-cute-1.png';
import drif2 from '../assets/images/drifloon-cute-2.jpg';
import drif3 from '../assets/images/drifloon-cute-3.png';
import drif4 from '../assets/images/drifloon-cute-4.png';
import drif5 from '../assets/images/drifloon-cute-5.jpg';
import drif6 from '../assets/images/drifloon-cute-6.png';
import '../css/RugQuestion.css';

function RugQuestion() {
  const [isFirst, setIsFirstVisible] = useState(true);
  const [showChickenOptions, setShowChickenOptions] = useState(false);
  const [showDrifOptions, setShowDrifOptions] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const WEB3FORMS_ACCESS_KEY = "bdd87c47-3fcf-4210-b13c-7c8b17f8a5dd"; // Replace with your Web3Forms access key

  const handleChickey = () => {
    setIsFirstVisible(false);
    setShowChickenOptions(true);
  };

  const handleDrif = () => {
    setIsFirstVisible(false);
    setShowDrifOptions(true);
  };

  const handleCollectionItemClick = async (itemName) => {
    // Send data to Web3Forms
    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        {
          access_key: WEB3FORMS_ACCESS_KEY,
          name: "Collection Item Selected",
          item: itemName, // Pass the selected item's name
          message: `User selected ${itemName} from the collection.`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    // Reset the UI
    setIsFirstVisible(false);
    setShowChickenOptions(false);
    setShowDrifOptions(false);
    setShowFinalMessage(true);
  };

  return (
    <div id="question-container">
      <div id="heading-container">
        <h1 id="heading">Pick one!</h1>
      </div>
      <div id="rug-container">
        {showFinalMessage ? (
          <div id="final-message">
            <h1>Thanks, see you soon!</h1>
          </div>
        ) : (
          <>
            {isFirst ? (
              <>
                <img
                  className="rug-image"
                  src={chickey1}
                  alt="Chickey"
                  width={250}
                  onClick={handleChickey}
                />
                <img
                  className="rug-image"
                  src={drif}
                  alt="Drif"
                  width={250}
                  onClick={handleDrif}
                />
              </>
            ) : (
              <div id="options">
                {showChickenOptions && (
                  <div className="collection">
                    <img src={chickey1} alt="Chickey" width={225} onClick={() => handleCollectionItemClick("Chickey 1")} />
                    <img src={chickey2} alt="Chickey" width={225} onClick={() => handleCollectionItemClick("Chickey 2")} />
                    <img src={chickey3} alt="Chickey" width={325} onClick={() => handleCollectionItemClick("Chickey 3")} />
                    <img src={chickey4} alt="Chickey" width={225} onClick={() => handleCollectionItemClick("Chickey 4")} />
                    <img src={chickey5} alt="Chickey" width={225} onClick={() => handleCollectionItemClick("Chickey 5")} />
                    <img src={chickey6} alt="Chickey" width={250} onClick={() => handleCollectionItemClick("Chickey 6")} />
                  </div>
                )}
                {showDrifOptions && (
                  <div className="collection">
                    <img className="collection-item" src={drif} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 1")} />
                    <img className="collection-item" src={drif2} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 2")} />
                    <img className="collection-item" src={drif3} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 3")} />
                    <img className="collection-item" src={drif4} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 4")} />
                    <img className="collection-item" src={drif5} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 5")} />
                    <img className="collection-item" src={drif6} alt="Drif" width={225} onClick={() => handleCollectionItemClick("Drif 6")} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default RugQuestion;