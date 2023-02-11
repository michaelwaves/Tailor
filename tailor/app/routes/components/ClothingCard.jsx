import remove from "../images/remove.svg"

export default function ClothingCard(props) {
    return (
        <div className="flex flex-row gap-2 items-center bg-white pl-5 rounded-xl">
            <h3 className="flex-grow mr-8">{props.title}</h3>
            <button id="choose-size" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">Size</button>
            <button id="choose-color" className="rounded-md bg-primary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-light">Color</button>
            <div className="rounded-md bg-primary-dark text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary">
                <input type="image" src={remove} alt="remove button" className="pl-3 w-12 h-12" />
            </div>

        </div>
    );
}