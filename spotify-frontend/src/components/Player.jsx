import { useContext } from "react"
import { assets } from "../assets/frontend-assets/assets"
import { PlayerContext } from "../context/PlayerContext"

const Player = () => {

    const { seekBar, seekBg, playerStatus, play, pause, track, time, previousSong, nextSong, seekBarSong } = useContext(PlayerContext)

    return track ? (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img src={track.image} alt="" className="w-12" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img src={assets.shuffle_icon} alt="" className="w-4 cursor-pointer" />
                    <img onClick={previousSong} src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />
                    {
                        playerStatus
                            ? <img onClick={pause} src={assets.pause_icon} alt="" className="w-4 cursor-pointer" />
                            : <img onClick={play} src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
                    }
                    <img onClick={nextSong} src={assets.next_icon} alt="" className="w-4 cursor-pointer" />
                    <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
                </div>

                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second >= 10 ? time.currentTime.second : "0" + time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekBarSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second >= 10 ? time.totalTime.second : "0" + time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img src={assets.play_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.mic_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.queue_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.volume_icon} alt="" className="w-4 cursor-pointer" />
                <div className="w-20 bg-slate-50 h-1 rounded">

                </div>
                <img src={assets.mini_player_icon} alt="" className="w-4 cursor-pointer" />
                <img src={assets.zoom_icon} alt="" className="w-4 cursor-pointer" />
            </div>
        </div>
    ) : null
}

export default Player