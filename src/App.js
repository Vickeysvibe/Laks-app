import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function App() {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      // Ask for camera permission
      await navigator.mediaDevices.getUserMedia({ video: true });

      // Ask for location permission
      navigator.geolocation.getCurrentPosition(
        (position) => console.log("Location access granted."),
        (error) => console.error("Location access denied.", error)
      );
    } catch (error) {
      console.error("Permissions error:", error);
    }
  };
  // Start camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture image from the video stream
  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL("image/jpeg");
    setImage(imageData);
    stopCamera();
  };

  // Stop the camera stream
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
  };

  // Get user's current location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting location:", error)
    );
  };

  // Send image and location to API
  const sendDataToAPI = async () => {
    try {
      const payload = { image, location };
      const response = await axios.post(
        "https://your-api-endpoint.com/upload",
        payload
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Camera PWA</h1>

      <div>
        <button onClick={startCamera}>Open Camera</button>
        <button onClick={getLocation}>Get Location</button>
        <button onClick={captureImage}>Capture Image</button>
        <button onClick={sendDataToAPI} disabled={!image || !location.lat}>
          Send to API
        </button>
      </div>

      <video
        ref={videoRef}
        autoPlay
        style={{ marginTop: "20px", width: "100%", maxWidth: "400px" }}
      />

      {image && (
        <div>
          <h3>Captured Image:</h3>
          <img
            src={image}
            alt="Captured"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
      )}

      {location.lat && (
        <div>
          <h3>Location:</h3>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
}

export default App;
