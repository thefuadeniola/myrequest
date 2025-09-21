"use client"
import Image from "next/image";
import image from "@/app/assets/soundless.jpeg"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const [popup, showPopup] = useState(false)
  const showPopUp = () => showPopup(!popup)
  const router = useRouter()

  return (
    <div className="font-inter p-4">
      Select a request room to make your request
      <div className='w-full h-fit relative'>
        <Image src={image} height={200} width={200} alt="Soundless" className="rounded-md mt-4"  />
        <button 
          onClick={showPopUp}
          className="absolute bottom-2 left-10 mx-auto shadow-md bg-[#a4161a] text-white font-bold text-md rounded-4xl h-12 px-4"
        >
          Enter room
        </button>
      </div>
      <div className="fixed top-0 right-0 h-screen w-screen  bg-black/50 flex items-center justify-center">
        <div className="rounded-md bg-white shadow-md h-fit w-4/5 z-100 p-5">
          <label>Enter room pin for Soundless:</label>
          <input type="number" className="border-1 border-[#d3d3d3] mt-2 rounded-md w-full pl-2 py-1" />
          <button 
            onClick={() => router.push("/request")}
            className="mt-3 bg-[#a4161a] text-white font-bold text-md rounded-md h-8 px-4"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
 