import React from 'react';
import NavBar from '../Navbar/NavBar';
import TextResults from '../TextResults/TextResults';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <TextResults />
    </div>
  );
}