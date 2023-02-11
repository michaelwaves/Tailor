import { useState } from "react";
import downArrow from "../images/drop-down-minor.svg";

export default function ColorMenu(props) {
    const [open, setOpen] = useState(false);
    return (
        <div id="choose-color" className="flex flex-row rounded-md bg-primary px-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">
            <button onClick={() => setOpen(!open)}>Color</button>
            <input type="image" src={downArrow} alt="remove button" className="w-6 h-6" />
            {open && props.children}
        </div>

    )

}