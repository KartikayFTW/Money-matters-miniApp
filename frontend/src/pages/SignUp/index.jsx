import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const { register, errors, submitHandler } = useSignUp();

  return (
    <div>
      <div className="flex flex-col  items-center">
        <p className="font-quickSand font-semibold sm:text-4xl text-xl text-white">
          Money Matters
        </p>
        <p className="font-quickSand font-medium sm:text-lg text-sm text-white">
          Transfer your money in ease
        </p>
      </div>
      <div className="bg-gray-100  shadow-2xl rounded-xl h-[37rem] sm:w-[30rem] w-screen max-w-full  flex flex-col gap-2 px-6">
        <div className="flex flex-col gap-2 items-center pt-4">
          <h1 className="text-4xl font-semibold font-quickSand">Sign Up</h1>
          <p className="font-poppins sm:text-lg text-sm text-center">
            Sign Up to start your journey
          </p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={submitHandler}>
          <div className="flex flex-col gap-2 h-20">
            <label
              htmlFor="firstName"
              className="text-sm font-semibold font-poppins"
            >
              First name
            </label>
            <input
              id="firstName"
              placeholder="John"
              type="text"
              {...register("firstName")}
              className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 ${
                errors.firstName ? "border-1 border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs font-quickSand h-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 h-20">
            <label
              htmlFor="lastName"
              className="text-sm font-semibold font-poppins"
            >
              Last Name
            </label>
            <input
              id="lastName"
              placeholder="Miller"
              type="text"
              {...register("lastName")}
              className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 ${
                errors.firstName ? "border-1 border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs font-quickSand h-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 h-20">
            <label
              htmlFor="email"
              className="text-sm font-semibold font-poppins"
            >
              Email
            </label>
            <input
              id="email"
              placeholder="john@jj.com"
              type="text"
              {...register("email")}
              className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 ${
                errors.firstName ? "border-1 border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-quickSand h-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 h-20">
            <label
              htmlFor="password"
              className="text-sm font-semibold font-poppins"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="*********"
              type="password"
              {...register("password")}
              className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 ${
                errors.firstName ? "border-1 border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs font-quickSand h-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button className="bg-[#122140] p-2 rounded-lg text-white text-lg w-full font-semibold font-poppins">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-2 text-xs sm:text-base underline">
          <Link to="/sign_in" className="flex gap-2">
            <span>Already Have a account ?</span>
            <span>Signin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
