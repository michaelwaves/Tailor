import { Link } from '@remix-run/react';

export default function Carousel() {
    return (
        <div className="flex flex-row gap-2 items-center bg-white pl-5 rounded-xl">
            <h1>View Your Beautiful Pics Below :D</h1>
            <Link to="/">
                <button id="submit-button" className=" text-3xl rounded-md bg-white px-3.5 py-1.5 font-bold leading-7 shadow-lg hover:bg-primary-light"><h3 className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text">LET'S GO BACK!</h3></button>
            </Link>
        </div>

    )
}