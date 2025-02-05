import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Apps = () => {
  const [isplaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
	if (isplaying) {
	  audioRef.current.pause();
	} else {
	  audioRef.current.play();
	}
	setIsplaying(!isplaying);
  };

  return (
	<div className="flex items-center justify-center h-screen">
	  <audio
		src="public/birthday-music.mp3"
		ref={audioRef}
	  ></audio>
	  <button
		className="text-2xl text-black p-4 bg-teal-400 text-white rounded-full cursor-pointer"
		onClick={handlePlay}
	  >
		{isplaying ? <FaPause /> : <FaPlay />}
	  </button>
	</div>
  );
};

export default Apps;
