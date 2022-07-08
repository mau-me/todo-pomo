import React from "react";
import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: Props) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

// CLASS COMPONENT

// class Button extends React.Component<{
//   children?: React.ReactNode;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
// }> {
//   render(): React.ReactNode {
//     const { children, type = "button", onClick } = this.props;
//     return (
//       <button className={style.botao} type={type} onClick={onClick}>
//         {children}
//       </button>
//     );
//   }
// }

export default Button;
