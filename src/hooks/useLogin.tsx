import React from "react";

function useLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {};

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
  };
}

export default useLogin;
