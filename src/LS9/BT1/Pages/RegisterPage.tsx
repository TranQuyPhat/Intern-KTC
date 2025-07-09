import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

type Props = {};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  agree: yup
    .boolean()
    .oneOf([true], "You must agree to the Terms and Privacy Policy"),
});

type FormData = yup.InferType<typeof schema>;

export default function RegisterPage({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
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

  const url =
    "https://videos.openai.com/vg-assets/assets%2Ftask_01jzppm6z1fxcawa17xv7d2nee%2F1752034905_img_0.webp?st=2025-07-09T02%3A45%3A05Z&se=2025-07-15T03%3A45%3A05Z&sks=b&skt=2025-07-09T02%3A45%3A05Z&ske=2025-07-15T03%3A45%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Etzu10az7zc5klhD6C8jD9UNeBQMGgsTBCTH5JTRxLc%3D&az=oaivgprodscus";

  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className="w-[400px] h-[750px] bg-cover bg-center rounded-lg border-2 border-black shadow-lg p-5 flex flex-col justify-between mx-auto"
    >
      <IoIosArrowBack size={30} className="text-white" />
      <div>
        <span className="text-3xl text-white font-bold mt-5">Sign up</span>
        <div className="flex flex-col justify-center gap-4 items-center backdrop-blur-sm bg-neutral-50/20 p-5 rounded-lg mt-4">
          <p className="text-sm text-white">
            Looks like you don't have an account.
            <br />
            Let’s create a new account for quyphat.162@gmail.com
          </p>
          <form
            className="w-[300px] flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full p-2 border rounded bg-white text-black"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full p-2 border rounded pr-16 bg-white text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1 text-sm text-blue-700"
              >
                {showPassword ? "Hide" : "View"}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}

            <label className="flex items-start gap-2 text-sm text-white">
              <input type="checkbox" {...register("agree")} />
              <span>
                By selecting Agree and continue below, I agree to the{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {errors.agree && (
              <span className="text-red-500 text-sm">
                {errors.agree.message}
              </span>
            )}

            <button  onClick={() => navigate("/login")}
              type="submit"
              className="hover:bg-blue-700 bg-blue-600 text-white py-2 rounded transition"
            >
              Agree and continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
