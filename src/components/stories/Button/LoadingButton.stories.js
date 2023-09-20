import React, { useState } from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Buttons/LoadingButton",
};

export const Loading = (args) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Button
      {...args}
      label={loading ? "Loading..." : "Click me"}
      onClick={handleClick}
      loading={loading}
    />
  );
};
Loading.args = {
  type: "primary",
  size: "large",
  shape: null,
  icon: null,
  onClick: () => alert("Clicked"),
};
