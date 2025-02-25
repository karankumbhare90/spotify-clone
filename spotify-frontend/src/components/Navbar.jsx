import { useNavigate } from "react-router-dom"
import { assets } from "../assets/frontend-assets/assets"

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img
                        src={assets.arrow_left}
                        alt=""
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        onClick={() => { navigate(-1) }}
                    />
                    <img
                        src={assets.arrow_right}
                        alt=""
                        className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
                        onClick={() => { navigate(1) }}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                    <p className="bg-black text-[15px] px-3 py-1 rounded-2xl cursor-pointer">Install App</p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">K</p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>
        </>
    )
}

export default Navbar