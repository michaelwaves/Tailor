import rightArrow from "../images/right-arrow-solid.svg"
import { useState } from "react"

export default function SizeMenu(props) {

    return (
        <div id="choose-size" className="flex flex-row rounded-md bg-primary px-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">
            <button >Size</button>
            <input type="image" src={rightArrow} alt="expand button" onClick={() => props.setOpen(!props.open)} className="w-5 h-5 self-center justify-self-end ml-3"></input>
            {props.open && props.children}
        </div>
    )
}