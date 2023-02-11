import ClothingCard from "./components/ClothingCard";

import { useState } from "react";
import { Link } from '@remix-run/react';
import styles from "../tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Index() {

  const [title, setTitle] = useState("t-shirt");
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("small");
  const [style, setStyle] = useState("casual");
  const [place, setPlace] = useState("home");


  return (
    <div className=" flex-col flex mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 items-center">
      <div id="title-container"></div>
      <h1 className="text-3xl text-primary-dark">Welcome to T<span className="text-bold font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">AI</span>lor</h1>
      <p>Your personal fashion assistant</p>
      <div id="clothes-container" className="w-1/2 mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-5 py-4 px-4 w-3xl rounded-xl ">
        <ClothingCard title="top" sizeChange={setSize} colorChange={setColor} />
        <ClothingCard title="pants" />
      </div>
      <div id="buttons-container" className="mt-5 flex items-center justify-end gap-x-6">
        <button id="add-clothes-button" className="rounded-md bg-secondary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-secondary-light">Add</button>
        <button id="reset-clothes-button" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">Reset</button>
      </div>
      <div id="personalized-container" className="w-1/2 mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-2 py-4 px-4 w-3xl rounded-xl">
        <h2 className="text-2xl font-bold text-white flex flex-row">Make it <div className="bg-white rounded-xl mx-2 px-2"> <p className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">YOURS</p></div> :{')'}</h2>
        <p className="text-white font-bold">Choose your style</p>
        <input type="text" id="style" className="bg-primary rounded-xl text-white px-5 py-2"></input>
        <p className="text-white font-bold">Choose your place</p>
        <input type="text" id="place" className="bg-primary rounded-xl text-white px-5 py-2"></input>
      </div>
      <div id="submit button" className="mt-5">
        <Link to="/carousel">
          <button id="submit-button" className=" text-3xl rounded-md bg-white px-3.5 py-1.5 font-bold leading-7 shadow-lg hover:bg-primary-light"><h3 className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">LET'S GO!</h3></button>
        </Link>
      </div>
    </div>
  );
}
