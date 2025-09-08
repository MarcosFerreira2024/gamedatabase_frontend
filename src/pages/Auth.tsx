import AuthLayout from "../layout/AuthLayout";
import Anchor from "../components/ui/Anchor";
import AuthForm from "../components/AuthForm";
import type { InputLabelProps } from "../components/ui/InputLabel";

function Auth({
  title,
  text,
  data,
  onSubmit,
  anchors,
}: {
  title: string;
  text: string;
  anchors: {
    to: string;
    text: string;
  }[];
  data: InputLabelProps[];
  onSubmit: () => void;
}) {
  return (
    <AuthLayout title={title}>
      <AuthForm
        buttonText={text}
        data={data}
        handleSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      />

      <div className="flex justify-between w-full mt-2">
        {anchors.map((anchor, index) => (
          <Anchor key={index} to={anchor.to}>
            {anchor.text}
          </Anchor>
        ))}
      </div>
    </AuthLayout>
  );
}

export default Auth;
