import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render(): React.ReactNode {
    const { children, type = "button", onClick } = this.props;
    return (
      <button className={style.botao} type={type} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
