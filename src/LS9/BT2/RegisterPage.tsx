import React from "react";
import { InferType } from "yup";
import { registerSchema } from "./schema";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
type FormData = InferType<typeof registerSchema>;
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) });
  const onSubmit = (data: FormData) => {
    console.log("data: ", data);
  };
  const url =
    "https://calmiddle.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg";
  const location = useLocation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen w-screen p-5 gap-2">
      <div className="col-span-1 overflow-hidden flex items-center justify-center border-r-2 border-gray-300">
        <img src={url} alt="" className="w-full h-[250px] md:h-full object-cover" />
      </div>

      <div className="col-span-2 bg-gray-50 flex items-center justify-center border-r-2 border-gray-300">
        <div className="flex flex-col items-center justify-center w-full h-full p-10">
          <label className="text-2xl font-bold mb-2">Register</label>
          <span className="text-sm text-gray-700 mb-6">
            Manage all your lottery efficiently
          </span>

          <form
            className="flex flex-col gap-6 w-full max-w-4xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Row 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label className="mb-1">First Name</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1">Last Name</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label className="mb-1">Phone Number</label>
                <input
                  {...register("phoneNumber")}
                  type="text"
                  className="border p-2 rounded"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1">Email</label>
                <input
                  type="text"
                  className="border p-2 rounded"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label className="mb-1">Password</label>
                <input
                  type="password"
                  className="border p-2 rounded"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col flex-1">
                <label className="mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="border p-2 rounded"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" {...register("newletter")} />
                <span>Yes,I want to receive Loterry Display Email</span>
              </div>
              {errors.newletter && (
                <p className="text-red-500 text-sm">
                  {errors.newletter.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="checkbox" {...register("agree")} />
                <span>Yes,I want to receive Loterry Display Email</span>
              </div>
              {errors.agree && (
                <p className="text-red-500 text-sm">{errors.agree.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-[400px] mx-auto p-5 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded transition"
            >
              Create Account{" "}
            </button>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to={`${location.pathname}/login`}
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
