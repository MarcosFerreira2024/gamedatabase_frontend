import React from "react";

function useAccordion() {
  const [open, setOpen] = React.useState(false);

  const [openContent, setOpenContent] = React.useState(0);

  const handleOpen = () => {
    setOpen(!open);
    setOpenContent(openContent + 1);
    console.log(openContent);
  };

  return {
    open,
    handleOpen,
  };
}

export default useAccordion;
