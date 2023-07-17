import "./Blockquote.scss";
import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";

export const Blockquote = () => {
  const { cita } = useContext(GlobalContext);
  const { h2 } = cita;
  return (
    <blockquote class="Blockquote">
      <h2 className="Blockquote-h2" >{h2}</h2>
      <img
        className="Blockquote-logo"
        src="assets/brand/logo.svg"
        alt="Avatar-logo2"
      /> 
    </blockquote>
  );
};
