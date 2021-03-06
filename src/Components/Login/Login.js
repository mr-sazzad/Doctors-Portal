import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  //react firebase hooks
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  
  //navigate user to from
  const location = useLocation();


  // react hook form  from npm
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  let errorMessage;

  if (gError || error || profileError) {
    errorMessage = <p className="text-red-500 text-center">{error?.message || gError?.message || profileError?.message}</p>;
    return;
  }

  if (gLoading || loading || updating) {
    return (
      <Loading />
    );
  }
  if (user || gUser) {
    navigate(from, { replace: true });
  }
  const onSubmit = async (data) => {
    console.log(data);
    await signInWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('update done')
    navigate('/appointment')
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-secondary">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 digit",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <p className="mb-2"><small>New in Doctors ? <Link className="text-secondary underline" to="/signup">Please SignUp</Link></small></p>
            {errorMessage}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
