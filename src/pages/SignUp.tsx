import React from "react";
import type { InputLabelProps } from "../components/ui/InputLabel";
import Auth from "./Auth";
import useSignUp from "../hooks/useSignUp";

function Login() {
  const {
    handleEmailChange,
    email,
    confirmPassword,
    handleConfirmPasswordChange,
    handleSignUp,
    handlePasswordChange,
    password,
  } = useSignUp();

  const anchors = [
    { to: "/forgot-password", text: "Esqueci minha senha" },
    { to: "/", text: "Já possui conta? Entrar" },
  ];

  const SignUpData: InputLabelProps[] = [
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
    {
      name: "confirmPassword",
      label: "Confirmar Senha",
      id: "confirmPassword",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleConfirmPasswordChange(e),
      value: confirmPassword,
      type: "password",
      variant: "dark",
      size: "xl",
      placeholder: "Confirme sua Senha",
    },
  ];

  return (
    <Auth
      anchors={anchors}
      data={SignUpData}
      title="Registre-se"
      text="Criar Conta"
      onSubmit={handleSignUp}
    />
  );
}

export default Login;
