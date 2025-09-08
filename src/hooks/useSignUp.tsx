import React from "react";

function useSignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  const handleSignUp = () => {};

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
    handleSignUp,
    handleConfirmPasswordChange,
    confirmPassword,

    handleEmailChange,
    handlePasswordChange,
  };
}

export default useSignUp;
