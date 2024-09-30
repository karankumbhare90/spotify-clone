import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

const ListAlbum = () => {
    const [data, setData] = useState([]);

    const fetchAlbum = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            if (response.data.success) {
                setData(response.data.albums); // Changed from 'songs' to 'albums'
            }
        } catch (error) {
            toast.error("Something went wrong: " + error.message); // Fixed toast error handling
        }
    }

    useEffect(() => {
        fetchAlbum();
    }, []); // Added dependency array to ensure it runs only once

    const removeAlbum = async (id) => {
        try {
            const response = await axios.post(`${url}/api/album/remove`, { id });

            if (response.data.success) {
                toast.success(response.data.message);
                fetchAlbum(); // Removed unnecessary 'await'
            }
        } catch (error) {
            toast.error('Something went wrong: ' + error.message); // Fixed toast error handling
        }
    }

    return (
        <div>
            <p>All Albums List</p> {/* Changed title from 'Songs' to 'Albums' */}
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Description</b>
                    <b>Album Color</b>
                    <b>Action</b>
                </div>
                {
                    data.map((item) => {
                        return (
                            <div key={item._id} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
                                <img src={item.image} alt="" className="w-12" />
                                <p>{item.name}</p>
                                <p>{item.desc}</p>
                                <input type="color" value={item.bgColor} readOnly /> {/* Added readOnly */}
                                <p onClick={() => removeAlbum(item._id)} className="cursor-pointer text-xl"><IoClose /></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListAlbum;
