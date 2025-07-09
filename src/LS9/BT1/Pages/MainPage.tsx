import React from "react";
import { FaApple, FaBackward, FaFacebookF } from "react-icons/fa";
import { FaBackwardFast } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

type Props = {};

export default function MainPage({}: Props) {
    const navigate=useNavigate()
    const url="https://videos.openai.com/vg-assets/assets%2Ftask_01jzppm6z1fxcawa17xv7d2nee%2F1752034905_img_0.webp?st=2025-07-09T02%3A45%3A05Z&se=2025-07-15T03%3A45%3A05Z&sks=b&skt=2025-07-09T02%3A45%3A05Z&ske=2025-07-15T03%3A45%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Etzu10az7zc5klhD6C8jD9UNeBQMGgsTBCTH5JTRxLc%3D&az=oaivgprodscus"
  return (
    <div  style={{ backgroundImage: `url(${url})` }} className='w-[400px] h-[700px]  bg-cover bg-center rounded-lg border-2 border-black shadow-lg p-5 flex flex-col justify-between mx-auto'>
      <IoIosArrowBack size={50} className="text-white"/>
      <span className="text-5xl text-white font-bold mt-20">Hi</span>
      <div className="flex flex-col justify-center gap-4 items-center backdrop-filter backdrop-blur-sm bg-neutral-50/20 p-5 rounded-lg">
        <input
          type="text"
          placeholder="Username"
          className="w-[300px] p-2 border rounded bg-white text-black"
        />
        <button  onClick={() => navigate("/register")} className="hover:bg-blue-700 w-[300px] bg-blue-600 text-white px-8 rounded">
          Continue
        </button>
        <span>or</span>
        <div className="flex flex-col gap-3 w-[300px]">
          <button className="flex items-center gap-3 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-black px-4 py-2 rounded-lg transition">
            <FaFacebookF size={20} />
            <span className="mx-auto">Continue with Facebook</span>
          </button>

          <button className="flex items-center gap-3 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-black px-4 py-2 rounded-lg transition">
            <FcGoogle size={20} />
            <span className="mx-auto">Continue with Google</span>
          </button>

          <button className="flex items-center gap-3 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-black px-4 py-2 rounded-lg transition">
            <FaApple size={20} />
            <span className="mx-auto">Continue with Apple</span>
          </button>
        </div>

        <label className="text-green-500  text-lg hover:text-green-400">Don't have an account? Signup</label>
        <label className="text-green-500  text-lg hover:text-green-400">Forgot password</label>
      </div>
    </div>
  );
}
