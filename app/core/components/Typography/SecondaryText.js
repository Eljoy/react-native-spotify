import React from "react";
import AppText from "./AppText";

const SecondaryText = (props) => {
  const style = {
    opacity: .65
  };
  return (
    <AppText size={1} style={style} {...props} />
  );
};

export default SecondaryText;
