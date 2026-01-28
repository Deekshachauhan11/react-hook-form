import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let handleFormData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-3xl font-semibold mb-4">Register here</h1>
      <form
        action=""
        onSubmit={handleSubmit(handleFormData)}
        className="flex flex-col gap-4 bg-white p-8 rounded"
      >
        <input
          {...register("name", { required: true })}
          className="py-2 px-7 border-1 rounded outline-0"
          type="text"
          placeholder="Enter name"
        ></input>
         {errors.name && <p className="text-red-600 text-[14px] -mt-1 font-medium">Name is requried</p>}

        <input
          {...register("password", { required: true })}
          className="py-2 px-7 border-1 rounded outline-0"
          type="text"
          placeholder="Enter password"
        ></input>
              {errors.password?.type === "required" && (
          <p className="text-red-600 text-[14px] -mt-1 font-medium">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-600 text-[14px] -mt-1 font-medium">At least 6 characters required</p>
        )}

        <input
          {...register("email", { required: true, minLength:6 })}
          className="py-2 px-7 border-1 rounded outline-0"
          type="text"
          placeholder="Enter Email"
        ></input>
         {errors.email && <p className="text-red-600 text-[14px] -mt-1 font-medium">Emial is requried</p>}

        <button className="py-2 px-7  rounded outline-0 text-white bg-blue-700 cursor-pointer active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
