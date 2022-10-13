import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Photos from "./components/Photos";
import AddPhoto from "./components/AddPhoto";
// import Login from "./components/Login"

function App() {
  const [photo, setPhoto] = useState([]);
  const [comments, setComments] = useState([]);

  function updateComments(id, comments) {
    const myComments = photo.map((pic) => {
      if (pic.id === id) {
        return { ...photo, comments };
      } else {
        return photo;
      }
    });
    setPhoto(myComments);
  }

  useEffect(() => {
    fetch("/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
      });
  }, []);

  console.log(comments);

  return (
    <div className="App">
      {/* <Login/> */}
      <Navbar />
      <Home />
      <Service />
      <Footer />
      <Photos photo={photo} setPhoto={setPhoto} setComments={setComments} comments={comments} />
      <AddPhoto setPhoto={setPhoto} photo={photo} updateComments={updateComments} />
    </div>
  );
}

export default App;
