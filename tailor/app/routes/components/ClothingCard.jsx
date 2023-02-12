import { useState } from "react";

import remove from "../images/remove.svg"
import downArrow from "../images/drop-down-minor.svg"
import send from "../images/send-1.svg"

import SizeMenu from "./SizeMenu";
import ColorMenu from "./ColorMenu";

export default function ClothingCard(props) {
    const [openSize, setOpenSize] = useState(false)
    const [openColor, setOpenColor] = useState(false)

    function handleSubmitSize() {
        setOpenSize(!openSize)
        //props.setClothesPrompts({ title: props.clothesPrompts.title, color: props.clothesPrompts.color, size: props.size })
    }
    function handleSubmitColor() {
        setOpenColor(!openColor)
        //props.setClothesPrompts({ title: props.clothesPrompts.title, color: props.color, size: props.clothesPrompts.size })
    }

    return (
        <div className="flex flex-row gap-2 items-center bg-white pl-5 rounded-xl">
            <h3 className="flex-grow mr-8">{props.title}</h3>
            <div id="buttons" className="flex flex-col gap-y-2 py-2">
                <SizeMenu setOpen={setOpenSize} open={openSize}>
                    <div className="absolute translate-x-14 -translate-y-4">
                        <input
                            type="text"
                            id="size"
                            value={props.size}
                            onChange={(e) => props.setSize(e.target.value)}
                            className="bg-primary border-solid border-secondary border-2 rounded-xl text-white px-5 py-2 "></input>
                        <input
                            type='image'
                            src={send}
                            id="size-submit"
                            onClick={() => handleSubmitSize()}
                            className="w-6 h-6 -translate-x-8 translate-y-1" />
                    </div>
                </SizeMenu>
                <ColorMenu setOpen={setOpenColor} open={openColor}>
                    <div className="absolute translate-x-20">
                        <input type="text" id="color"
                            value={props.color}
                            onChange={(e) => props.setColor(e.target.value)}
                            className="bg-primary border-solid border-secondary border-2 rounded-xl text-white px-5 py-2"></input>
                        <input
                            type='image'
                            src={send}
                            id="size-submit"
                            onClick={() => handleSubmitColor()}
                            className="w-6 h-6 -translate-x-8 translate-y-1" />
                    </div>
                </ColorMenu>
            </div>
            <div className="rounded-md bg-primary-dark text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary">
                <input type="image"
                    src={remove}
                    alt="remove button"
                    className="pl-3 w-12 h-12"
                    onClick={() => props.remove(props.title)} />
            </div>


        </div>
    );
}