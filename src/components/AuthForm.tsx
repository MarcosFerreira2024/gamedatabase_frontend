import React from "react";
import Button from "./buttons/Button";
import InputLabelList from "./ui/InputLabelList";
import type { InputLabelProps } from "./ui/InputLabel";

function AuthForm({
  handleSubmit,
  data,
  buttonText,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  data: InputLabelProps[];
  buttonText: string;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 mt-4">
      <InputLabelList data={data} />
      <Button size="xl" variant="darkContrast">
        {buttonText}
      </Button>
    </form>
  );
}

export default AuthForm;
