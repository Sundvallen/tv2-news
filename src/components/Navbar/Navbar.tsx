import styles from "./Navbar.module.scss";
import logo from "../../assets/tv2_logo.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img onClick={() => navigate("/")} src={logo} alt="" />
    </div>
  );
}
