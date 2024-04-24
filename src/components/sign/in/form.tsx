"use client";
import React, { useState } from "react";

const Sgin_in_form: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleLogin (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

  };
  function handleEmail (e: React.ChangeEvent<HTMLInputElement>) {
    setUser({...user, email: e.target.value});
  };
  function handlePassword (e: React.ChangeEvent<HTMLInputElement>) {
    setUser({...user, password: e.target.value});
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input className="border 1" type="email" name="email" onChange={handleEmail}/>
        </div>
        <div>
          <input type="password" name="pw" onChange={handlePassword}/>
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

export default Sgin_in_form;