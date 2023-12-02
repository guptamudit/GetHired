import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    // console.log(values);
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        setSubmitButtonDisabled(false);
        alert("Succesfully Logged in!");
        const user = res.user;

        navigate("/");
        // console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Log in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        pass: event.target.value,
                      }))
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <b className="text-sm font-extrabold  text-red-600 flex justify-center">
                  {errorMsg}
                </b>

                <button
                  disabled={submitButtonDisabled}
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Log in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don't have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-blue hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
