"@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Main, openState } from "./AppNavBar";
import { userIsLoggedInState } from "../store/selectors/userIsLoggedIn";
import "./style.css";

function LandingPage() {
  const [isLoggedIn] = useRecoilState(userIsLoggedInState);
  const [open] = useRecoilState(openState);
  const navigate = useNavigate();
  console.log(isLoggedIn);
  return (
    <Main open={open}>
      <div className="landing-page-container">
        <div className="text-content">
          <h1 className="title">
            Buy <span style={{ color: "#bc1c44" }}>IT Projects</span> for B.E,
            BTech, BCA, MCA, BSC-IT, etc.
          </h1>
          <div className="projectDetails">
          <h1>Projects Topics - </h1>
          <br />
            <ul>
            <li><h2>Web Development</h2></li>
            <li><h2>Programming</h2></li>
            <li><h2>Data Analysis</h2></li>
            <li><h2>Game Projects</h2></li>
            <li><h2>AI / ML</h2></li>
            </ul>
          </div>

          <button
            className="button-style"
            onClick={() => navigate(isLoggedIn ? "/courses" : "/login")}
          >
            {isLoggedIn ? "View Courses" : "Login Here"}
          </button>
        </div>
        <div>
          <img
            className="img-content"
            src="https://opensource.com/sites/default/files/lead-images/browser_web_internet_website.png"
            alt=""
          />
        </div>
      </div>
    </Main>
  );
}

export default LandingPage;
