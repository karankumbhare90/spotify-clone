import axios from "axios";
import { useEffect, useState } from "react"
import { url } from "../App";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const ListSong = () => {

    const [data, setData] = useState([]);

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);

            console.log(response.data);

            if (response.data.success) {
                setData(response.data.songs);
            }
        } catch (error) {
            toast.error("Something went wrong", error);
        }
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    const removeSong = async (id) => {
        try {
            const response = await axios.post(`${url}/api/song/remove`, { id });

            if (response.data.success) {
                toast.success(response.data.message);
                await fetchSongs();
            }
        } catch (error) {
            toast.error('Something went wrong', error);
        }
    }


    return (
        <div>
            <p>All Songs list</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Album</b>
                    <b>Duration</b>
                    <b>Action</b>
                </div>
                {
                    data.map((item, index) => {
                        return (<div key={index} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
                            <img src={item.image} alt="" className="w-12" />
                            <p>{item.name}</p>
                            <p>{item.album}</p>
                            <p>{item.duration}</p>
                            <p onClick={() => removeSong(item._id)} className="cursor-pointer text-xl"><IoClose /></p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default ListSong