import Header from "@/components/composite/Header";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    if (username && password && email) {
      e.preventDefault();
      axios.post(`https://620fb871ec8b2ee2834aaadf.mockapi.io/api/register`, {
        username: username,
        email: email,
        password: password,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      alert("Register Success");
      router.push("/login");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <Header />

      <div className="container mx-auto max-w-sm px-2 mt-10">
        <div className="px-6 py-8 rounded shadow-2xl text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>

          <input
            type="text"
            className="block border w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            className="block border w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="w-full py-3 rounded bg-green-300 hover:bg-green-400"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
