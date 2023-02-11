import ClothingCard from "./components/ClothingCard";

import styles from "../tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Index() {
  return (
    <div className=" flex-col flex mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 items-center">
      <div id="title-container"></div>
      <h1 className="text-3xl text-primary-dark">Welcome to T<span className="text-bold font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">AI</span>lor</h1>
      <p>Your personal fashion assistant</p>
      <div id="clothes-container" className="mt-5 bg-gradient-to-r from-secondary to-secondary-dark flex flex-col gap-y-5 py-4 px-4 w-3xl rounded-xl ">
        <ClothingCard title="top" />
        <ClothingCard title="pants" />
      </div>
      <div id="buttons-container" className="mt-5 flex items-center justify-end gap-x-6">
        <button id="add-clothes-button" className="rounded-md bg-secondary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-secondary-light">Add</button>
        <button id="reset-clothes-button" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">Reset</button>
      </div>

    </div>
  );
}
