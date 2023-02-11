import remove from "../images/remove.svg"
import downArrow from "../images/drop-down-minor.svg"

import SizeMenu from "./SizeMenu";
import ColorMenu from "./ColorMenu";

export default function ClothingCard(props) {
    return (
        <div className="flex flex-row gap-2 items-center bg-white pl-5 rounded-xl">
            <h3 className="flex-grow mr-8">{props.title}</h3>
            <div id="buttons" className="flex flex-col gap-y-2 py-2">
                <SizeMenu>
                    <ul className="">
                        <input
                            type="text"
                            id="size"
                            onChange={(e) => props.sizeChange(e.target.value)}
                            className="bg-primary border-solid border-secondary border-2 rounded-xl text-white px-5 py-2 absolute translate-x-3"></input>
                    </ul>
                </SizeMenu>
                <ColorMenu>
                    <input type="text" id="color" className="bg-primary border-solid border-secondary border-2 rounded-xl text-white px-5 py-2 absolute translate-x-16"></input>
                </ColorMenu>
            </div>
            <div className="rounded-md bg-primary-dark text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary">
                <input type="image" src={remove} alt="remove button" className="pl-3 w-12 h-12" />
            </div>


        </div>
    );
}