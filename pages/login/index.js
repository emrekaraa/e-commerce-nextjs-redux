import Header from "@/components/composite/Header";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { REGISTER } from "@/redux/api/register/register";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from "@/redux/actions/LoginActions";
import { loginUserInfo } from "@/redux/actions/LoginActions";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedInState = useSelector((state) => state.LoginReducer.isLoggedIn);

  const onSubmit = async (e) => {
    if (username && password) {
      const accounts = await axios.get(REGISTER).then((res) => res.data);

      for (let i = 0; i < accounts.length; i++) {
        if (
          accounts[i].password === password &&
          accounts[i].username === username
        ) {
          dispatch(isLoggedIn(true));
          alert(`Welcome ${accounts[i].username}`);
          router.push("/");
          dispatch(loginUserInfo(accounts[i].username, accounts[i].email));
          break;
        }
      }
    } else {
      alert("Please enter username & password");
    }
  };

  return (
    <>
      <Header />
      {isLoggedInState ? (
        <h1 className="text-3xl text-red-500 mt-10 text-center">
          Already logged in
        </h1>
      ) : (
        <div className="container mx-auto max-w-sm px-2 mt-10">
          <div className="px-6 py-8 rounded shadow-2xl text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <input
              type="text"
              className="block border w-full p-3 rounded mb-4"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={(e) => onSubmit(e)}
              type="submit"
              className="w-full py-3 rounded bg-blue-300 hover:bg-blue-400"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
