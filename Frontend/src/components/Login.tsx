import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = new useNavigate();

 const sendBackToLandingPage = () => {
    navigate("/landingpage")
 }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Perform authentication logic here
      // For example, send the username and password to your backend server
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect user to profile page or perform any other action on successful login
        window.location.href = "/profile";
      } else {
        // Handle login failure, display error message, etc.
        setError("Incorrect username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
}, [])

  return (
    

    <>
      <div className="h-screen w-screen dark:bg-nightTheme-background bg-dayTheme-background flex justify-center items-center">
      <div className="fixed top-10 left-10 z-50 cursor-pointer ">
        <FontAwesomeIcon
          className="btn btn-md text-dayTheme-text dark:text-nightTheme-text"
          icon={faArrowLeft}
          size="2xl"
          onClick={sendBackToLandingPage}
        />
      </div>
        <div className=" h-2/5 w-4/5 md:w-3/6 lg:w-2/6 rounded-2xl dark:bg-nightTheme-primary bg-dayTheme-primary">
          <div>
            <h2 className="mt-6 text-center dark:text-nightTheme-text text-dayTheme-text text-h5">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 flex flex-col justify-center items-center max-w-5xl" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="">
              <div>
                <p className="text-p mx-3 text-dayTheme-text dark:text-nightTheme-text ">
                    Username
                </p>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="p-2 m-3 rounded-lg text-dayTheme-text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <p className="text-p mx-3 text-dayTheme-text dark:text-nightTheme-text ">
                    Password
                </p>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-2 m-3 rounded-lg text-dayTheme-text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <div className="mt-4 w-48 flex justify-start items-start">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-dayTheme-text dark:text-nightTheme-text  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
