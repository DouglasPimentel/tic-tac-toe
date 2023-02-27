import React from "react";
import "./styles.css";

type TitleProps = {
  label: string;
};

function Title({ label }: TitleProps) {
  return <h2 className="heading">{label}</h2>
}

export default Title;
