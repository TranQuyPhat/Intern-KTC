import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import * as yup from "yup";
type Props = {};
const schema = yup.object({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;
export default function LoginPage({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const navigate=useNavigate()
  const url =
    "https://videos.openai.com/vg-assets/assets%2Ftask_01jzppm6z1fxcawa17xv7d2nee%2F1752034905_img_0.webp?st=2025-07-09T02%3A45%3A05Z&se=2025-07-15T03%3A45%3A05Z&sks=b&skt=2025-07-09T02%3A45%3A05Z&ske=2025-07-15T03%3A45%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Etzu10az7zc5klhD6C8jD9UNeBQMGgsTBCTH5JTRxLc%3D&az=oaivgprodscus";
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="w-[400px] h-[700px]  bg-cover bg-center rounded-lg border-2 border-black shadow-lg p-5 flex flex-col justify-between mx-auto"
    >
      <IoIosArrowBack size={50} className="text-white" />
      <div>
        <span className="text-4xl text-white font-bold mb-20 ">Login</span>
        <div className="flex flex-col justify-center gap-4 items-center backdrop-filter backdrop-blur-sm bg-neutral-50/20 p-5 rounded-lg mt-6">
          <div className="flex gap-2 justify-center items-start">
            <img
              src={url}
              alt=""
              className="w-14 h-14 rounded-full object-cover mr-4"
            />

            <div className="flex flex-col items-start justify-center">
              <p className="font-bold text-gray-200 text-lg">Jane Dow</p>
              <p className="text-sm text-gray-200">jane.doe@gmail.com</p>
            </div>
          </div>
          <form
            className="w-[300px] flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative w-[300px] pt-1">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1 text-sm text-blue-700"
              >
                {showPassword ? "Hide" : "View"}
              </button>
              {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}  
              <label
                className="absolute left-3 top-1 mb-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
              >
                Password
              </label>
            </div>
            <button onClick={()=>navigate("/")} type="submit" className="hover:bg-blue-700 w-[300px] bg-blue-600 text-white px-8 rounded">
              Continue
            </button>
          </form>

          <p className="text-green-500  text-lg hover:text-green-400">Forgot password</p>
        </div>
      </div>
    </div>
  );
}
