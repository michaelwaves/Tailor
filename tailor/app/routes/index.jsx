import ClothingCard from "./components/ClothingCard";
import axios from 'axios';
import { Configuration, OpenAIApi } from "openai";

//const firstDALLE = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-un2DR2kzat9tY9F5lIVeQVqn/user-bvrSYe4h4WKq4fHQ8xlYqITX/img-IB2GPtlBwVESQkV4keGmPsSZ.png?st=2023-02-12T05%3A06%3A58Z&se=2023-02-12T07%3A06%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-02-11T21%3A38%3A08Z&ske=2023-02-12T21%3A38%3A08Z&sks=b&skv=2021-08-06&sig=OJ%2B7Apsvl3gfyVStGdnO1mUlouq7zV1%2BDNtD0D10odg%3D"

import { useEffect, useState } from "react";
import { Link } from '@remix-run/react';
import styles from "../tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Index() {

  const [imgURL, setImgURL] = useState("https://picsum.photos/200/300")
  const [prom, setProm] = useState("")

  const [title, setTitle] = useState("t-shirt");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("casual");
  const [place, setPlace] = useState("home");

  const [clothes, setClothes] = useState([]);
  const [clothesPrompts, setClothesPrompts] = useState({ title: "shirt", color: "blue", size: "large" })
  const [allClothesPrompts, setAllClothesPrompts] = useState([])

  //useEffect(() => { setSize(size), setColor(color), setTitle(title) }, [size, color, title])
  //openai stuff
  const configuration = new Configuration({
    apiKey: "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"
  });

  const openai = new OpenAIApi(configuration);


  async function getImage(prompt) {
    try {
      const result = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256"
      })
      console.info(result);
      const url = result.data.data[0].url
      return url
    }
    catch (error) {
      console.error(error)
    }
    return null
  }


  //openapi end
  //https://random-word-form.herokuapp.com/random/noun
  //https://random-word-api.herokuapp.com/word
  const randomApi = "https://random-word-form.herokuapp.com/random/noun"
  async function getClothing() {
    try {
      const response = await axios.get(randomApi);
      console.info(response);
      const returned_info = response.data[0]
      return returned_info
    } catch (error) {
      console.error(error);
    }
    return null
  }

  async function handleAdd() {
    const cloth = await getClothing()
    setTitle(cloth)
    addClothes(cloth)
    setAllClothesPrompts([...allClothesPrompts, { title: title, color: color, size: size }])
    //console.log(allClothesPrompts)
  }

  async function handleSubmit() {
    const p = { place: place, style: style }
    /*let acp = [...allClothesPrompts, { title, color, size }]
    acp.shift()*/
    handleAdd()
    let acp = [...allClothesPrompts, { title, color, size }]
    acp.shift()
    const outfitList = acp.map((clothesPrompt) => (clothesPrompt.size + ' ' + clothesPrompt.color + ' ' + clothesPrompt.title))

    const outfits = outfitList.join(' and a ')
    const prompt = 'Draw a picture of a person wearing a ' + outfits + ' at ' + p.place + ' in a ' + p.style + ' style.'
    console.log(prompt)
    setProm(prompt)

    const result = await getImage(prompt)
    setImgURL(result)
    console.log(imgURL)
  }
  /*
  function constructClothesPrompt(title, color, size) {
    const clothesPrompt = { title: title, color: color, size: size }
  }

  function constructPlacePrompt(place, style) {
    const placePrompt = { place: place, style: style }
  }*/

  //const clothing = "Men's Cotton Blend T-Shirt"

  const addClothes = (clothing) => {
    setClothes([...clothes, clothing])
  }
  const removeClothes = (clothing) => {
    setClothes(clothes.filter((item) => item !== clothing))
  }

  const resetClothes = () => {
    setClothes([])
  }

  const c = [clothesPrompts.title, clothesPrompts.color, clothesPrompts.size]
  const testClothesComponents = c.map((clothing) => (<p>{clothing}</p>))

  const clothesComponents = clothes.map((clothing) =>
  (<ClothingCard title={clothing}
    size={size} setSize={setSize}
    color={color} setColor={setColor}
    remove={removeClothes}
    clothesPrompts={clothesPrompts} setClothesPrompts={setClothesPrompts} />))

  return (
    <body className="flex w-full h-full bg-gradient-to-tr from-green-200 via-blue-400 to-red-400">
      <div className=" flex-col flex mx-auto w-1/2 h-full py-32 sm:py-48 lg:py-5 items-center">
        <div id="title-container"></div>
        <h1 className="text-4xl text-primary-dark font-bold">Welcome to T<span className="text-bold font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">AI</span>lor</h1>
        <h2 className="text-2xl font-bold text-white flex flex-row">Your personal <div className="bg-white rounded-xl mx-2 px-2"> <p className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">ART</p></div> assistant</h2>
        <div id="clothes-container" className="w-1/2 mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-5 py-4 px-4 w-3xl rounded-xl ">
          {clothesComponents}
        </div>
        <div id="buttons-container" className="mt-5 flex items-center justify-end gap-x-6">
          <button
            id="add-clothes-button"
            className="rounded-md bg-secondary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-secondary-light"
            onClick={() => handleAdd()}
          >Add</button>
          <button
            id="reset-clothes-button"
            className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light"
            onClick={() => resetClothes()}
          >Reset</button>
        </div>
        <div id="personalized-container" className="w-1/2 mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-2 py-4 px-4 w-3xl rounded-xl">
          <h2 className="text-2xl font-bold text-white flex flex-row">Make it <div className="bg-white rounded-xl mx-2 px-2"> <p className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">YOURS</p></div> :{')'}</h2>
          <p className="text-white font-bold">Choose your style</p>
          <input
            type="text"
            id="style"
            className="bg-primary rounded-xl text-white px-5 py-2"
            onChange={(e) => setStyle(e.target.value)}>
          </input>
          <p className="text-white font-bold">Choose your place</p>
          <input type="text"
            id="place"
            className="bg-primary rounded-xl text-white px-5 py-2"
            onChange={(e) => setPlace(e.target.value)}>

          </input>
        </div>
        <div id="submit button" className="mt-5">

          <button id="submit-button"
            className=" text-3xl rounded-md bg-white px-3.5 py-1.5 font-bold leading-7 shadow-lg hover:bg-primary-light"
            onClick={handleSubmit}
          ><h3
            className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text"
          >LET'S GO!</h3></button>

        </div>
        <div id="submit button dalle" className="mt-5">
          <div id="image-frame" className="w-full mt-3 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-2 py-4 px-4 w-3xl rounded-xl">
            <img src={imgURL} alt="haha" className="rounded-md shadow-xl"></img>
          </div>
        </div>
        <div className="w-full mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-2 py-4 px-4 w-3xl rounded-xl">
          <p className="text-white py-3 px-3">{prom}</p>
        </div>

      </div>
    </body>
  );
}
