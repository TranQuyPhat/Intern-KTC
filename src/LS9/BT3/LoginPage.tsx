import React from "react";
import { loginSchema } from "./schema";
import { InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useForm } from "react-hook-form";
import "../.././App.css"; // Import your CSS file
type FormData = InferType<typeof loginSchema>;
export default function LoginPage() {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: FormData) => {
    console.log("data: ", data);
  };
  const url =
    "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fnhannn87dn.github.io%2Fui-form-antd-yup%2Fstatics%2Fimg%2Fgrovia.png";
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-screen w-screen">
  <div className="md:col-span-3 hidden md:flex items-center justify-center " style={{background:"rgb(236,241,244)"}}>
    <img src={url} alt="" className="w-[80%] h-[80%] object-cover" />
  </div>

  <div className="col-span-1 md:col-span-2 flex items-center justify-center">
    <div className="flex flex-col items-center w-full h-full p-6 md:p-10">
      <div className="flex flex-col gap-1 w-full max-w-md">
        <div>
          <span
            className="text-3xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            Logo
          </span>
        </div>
        <p className="text-xl mt-6 text-black font-bold">
          Login to your account
        </p>
        <p className="text-sm mt-3 text-gray-700">
          Welcome back! Please enter your credentials to access your account.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-1 w-full max-w-md mt-6"
      >
        <label>User Name</label>
        <input
          {...register("userName")}
          type="text"
          placeholder="User Name"
          className="border w-full p-2 rounded bg-white text-black"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm">{errors.userName.message}</p>
        )}

        <label>Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded bg-white text-black"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center gap-2">
            <input
              {...register("rememberMe")}
              type="checkbox"
              className="accent-red-600"
            />
            Remember me
          </label>
          <p className="hover:[color:var(--color-primary)] cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <button
          type="submit"
          style={{ background: "var(--color-primary)" }}
          className="text-white px-4 py-2 rounded mt-4"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span
            className="cursor-pointer hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  </div>
</div>

  );
}
