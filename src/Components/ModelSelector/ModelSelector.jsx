import React from "react";
import backgroundImage from "/Pexels.png"; // Import your image here
import "./index.css"; // Import your CSS file here if needed
import { Link } from "react-router-dom";
import useSelectedModel from "../../Utils/selectedModel";
import useImageStore from '../../Utils/useImageStore'
import { useNavigate } from "react-router-dom";
import { images } from "../../Constants/Skimmer14";
import { images16 } from "../../Constants/Skimmer16";
export default function ModelSelector() {
  const {setModel} = useSelectedModel(); // Updating model in the store
  const { selectedImage, setSelectedImage } = useImageStore();

  const navigate = useNavigate();
  const updateModel = (newModelValue) => {
    console.log("Model",newModelValue)
    setModel(newModelValue)
  };
  const handleClick = () => {

    updateModel('Skimmer 14');
    setSelectedImage(images.images[0])
    navigate("/Skimmer14");

  };
  const handleClick16 = () => {
    updateModel('Skimmer 16');
    setSelectedImage(images16.images[0])

    navigate("/Skimmer16");

  };

  return (
    
    <>
    
      <div className="page-container">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
        <div className="centered-text">
          <span>SELECT</span> <span>MODEL</span>
        </div>
        <button  className="back-button" onClick={() => {
              window.location.href = "https://skimmerskiff.com";
            }}>Back to Website</button>
        <div className="boats-container">
          <div
            className="boat-container"
            onClick={() => {
              handleClick()
              console.log("SKIMMER14")

            }}
          >
            <div className="boat-heading">
              <span className="boat-name">14'</span>
            </div>

            <div className="boat-image">
              <div className="circular-overlay"></div>
              <img className="boat-img" src="/14.png" alt="boat" />
            </div>
          </div>
          <div
            className="boat-container"
            onClick={() => {
              
              handleClick16()

              console.log("SKIMMER16")
            }}
          >
            <div className="boat-heading-1">
              <span className="boat-name">16'</span>
            </div>
            <div className="boat-image-1">
              <div className="circular-overlay-1"></div>
              <img className="boat-img-1" src="/16.png" alt="boat" />
            </div>
          </div>
        </div>
        <div className="bottom-text">
          This is a simulated representation of our models, actual color / shape
          may differ. Contact our facility regarding your specific order.
        </div>
      </div>
      {/* Mobile version */}
      <div className="page-container-mobile">
        {/* top */}
        <div className="top">
          <div className="centered-text">
            <span>SELECT</span> <span>MODEL</span>
          </div>
          <button onClick={() => {
              window.location.href = "https://skimmerskiff.com";
            }}>Back to Website</button>
        </div>
        {/* boats container */}
        <div className="boats-container">
          <div
            className="boat-container"
            onClick={() => {
             

            }}
          >
            <div className="boat-heading">
              <span className="boat-name">14'</span>
            </div>

            <div className="boat-image boat-wrap">
              <img
                className="boat-img"
                style={{ padding: "1rem 0" }}
                src="/14.png"
                alt="boat"
              />
            </div>
          </div>
          <div
            className="boat-container"
            onClick={() => {
              
            }}
          >
            <div className="boat-heading">
              <span className="boat-name">16'</span>
            </div>
            <div className="boat-image boat-wrap boat-two">
              <img className="boat-img" src="/16.png" alt="boat" />
            </div>
          </div>
        </div>
        <div className="bottom-text">
          <p>
            This is a simulated representation of our models, actual color /
            shape may differ. Contact our facility regarding your specific order.
          </p>
        </div>
      </div>
    </>
  );
}
