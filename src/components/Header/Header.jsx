import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { Logo } from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import note from "../../assets/images/note.png";
export function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <Logo
          onClick={() => navigate("/")}
          subtitle="Manage your notes"
          image={note}
        />
      </div>
      <div className={`col-xs-12 col-sm-8 col-md-8 col-lg-8  ${s.buttonCont}`}>
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Add note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
