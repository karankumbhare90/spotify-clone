import { useContext } from "react"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongItem from "./SongItem"
import { PlayerContext } from "../context/PlayerContext"

const DisplayHome = () => {

    const { songsData, albumsData } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {
                        albumsData.map((item, index) => (
                            <AlbumItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                desc={item.desc}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
                <div className="flex overflow-auto">
                    {
                        songsData.map((item, index) => (
                            <SongItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                desc={item.desc}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default DisplayHome