import React from "react";
import type { InputLabelProps } from "../components/ui/InputLabel";
import useLogin from "../hooks/useLogin";
import Auth from "./Auth";

function Login() {
  const {
    handleEmailChange,
    email,
    handleLogin,
    handlePasswordChange,
    password,
  } = useLogin();

  const anchors = [
    { to: "/forgot-password", text: "Esqueci minha senha" },
    { to: "/sign-up", text: "Criar uma conta" },
  ];

  const LoginData: InputLabelProps[] = [
    {
      name: "email",
      label: "Email",
      id: "email",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleEmailChange(e),
      value: email,
      type: "email",
      variant: "dark",
      size: "xl",
      placeholder: "Digite seu Email",
    },
    {
      name: "password",
      label: "Senha",
      id: "password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handlePasswordChange(e),
      value: password,
      type: "password",
      variant: "dark",
      size: "xl",
      placeholder: "Digite sua Senha",
    },
  ];

  return (
    <Auth
      anchors={anchors}
      data={LoginData}
      title="Login"
      text="Entrar"
      onSubmit={handleLogin}
    />
  );
}

export default Login;
