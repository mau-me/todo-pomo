import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}> {
  render(): React.ReactNode {
    const { type = "button", children } = this.props;
    return (
      <button className={style.botao} type={type}>
        {children}
      </button>
    );
  }
}

export default Button;
