import Header from "@/components/composite/Header";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { REGISTER } from "@/redux/api/register/register";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    if ((username || email) && password) {
      const accounts = await axios.get(REGISTER).then((res) => res.data);
      accounts.map((account) => {
        if (
          account.password === password &&
          (account.username === username || account.email === email)
        ) {
          alert(`Welcome ${account.username}`);
        }
      });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <Header />

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
          <span>or</span>

          <input
            type="text"
            className="block border w-full p-3 rounded mb-4 mt-4"
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
            className="w-full py-3 rounded bg-blue-300 hover:bg-blue-400"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
