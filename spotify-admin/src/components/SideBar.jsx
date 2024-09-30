import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const SideBar = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-[#003A10] min-h-screen pl-[4vw]">
            <img onClick={() => { navigate('/admin') }} src={assets.logo} alt="" className="mt-5 w-[max(10vw,100px)] hidden sm:block cursor-pointer" />
            <img onClick={() => { navigate('/admin') }} src={assets.logo_small} alt="" className="mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block cursor-pointer" />

            <div className="flex flex-col gap-5 mt-10">
                <NavLink to={'/admin/add-song'} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FB5B] text-sm font-medium">
                    <img src={assets.add_song} alt="" className="w-5" />
                    <p className="hidden sm:block">Add Song</p>
                </NavLink>

                <NavLink to={'/admin/list-song'} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FB5B] text-sm font-medium">
                    <img src={assets.song_icon} alt="" className="w-5" />
                    <p className="hidden sm:block">List Song</p>
                </NavLink>

                <NavLink to={'/admin/add-album'} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FB5B] text-sm font-medium">
                    <img src={assets.add_album} alt="" className="w-5" />
                    <p className="hidden sm:block">Add Album</p>
                </NavLink>

                <NavLink to={'/admin/list-album'} className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FB5B] text-sm font-medium">
                    <img src={assets.album_icon} alt="" className="w-5" />
                    <p className="hidden sm:block">List Album</p>
                </NavLink>
            </div>
        </div>
    )
}

export default SideBar