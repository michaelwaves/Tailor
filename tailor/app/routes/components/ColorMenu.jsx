import { useState } from "react";
import rightArrow from "../images/right-arrow-solid.svg";

export default function ColorMenu(props) {

    return (
        <div id="choose-color" className="flex flex-row rounded-md bg-primary px-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">
            <button onClick={() => setOpen(!open)}>Color</button>
            <input type="image" src={rightArrow} alt="expand button" onClick={() => props.setOpen(!props.open)} className="w-5 h-5 self-center ml-3"></input>
            {props.open && props.children}
        </div>

    )

}
