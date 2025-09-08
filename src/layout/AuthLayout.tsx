import React from "react";

function AuthLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex group h-screen">
      <div className="md:w-[440px]  bg-stone-950 flex md:justify-normal  w-full flex-col px-6 items-center mt-40 md:mt-20 ">
        <h1 className="text-4xl text-stone-50">{title}</h1>
        {children}
      </div>
      <div className="w-full h-full md:block hidden relative">
        <div className="bg-black/20 absolute w-full h-screen z-20"></div>
        <img
          src="mock/spiderman.png"
          alt=""
          className="object-cover group-hover:grayscale-0 grayscale-30 transition-all duration-300 object-center h-screen w-screen"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
