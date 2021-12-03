import { Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { createBrowserHistory } from "history";
import ScrollToTop from "./ScrollToTop";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import SignInCallback from "./components/auth/SignInCallback";
import SilentRenew from "./components/auth/SilentRenew";
import SignOutCallback from "./components/auth/SignOutCallback";
import { Proomkabar } from "proomkatest";
import { useAppContext } from "./providers/ApplicationProvider";
import axios from "axios";
import ReactDOM from "react-dom";
import { Alert } from "proomkatest";

const history = createBrowserHistory();

export const GetImg = () => {
  const [{ accessToken }] = useAppContext();
  axios
    .get("https://oauth.pslib.cloud/api/account/icon", {
      responseType: "blob",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
    .then((resp) => {
      ReactDOM.render(
        <Alert
          textColor="white"
          width="16rem"
          height="4rem"
          color="#00ae7c"
          delay="5000"
        >
          <i className="far fa-check-circle icon" /> Fotka aktualizována
        </Alert>,
        document.getElementById("alerts")
      );
      const url = URL.createObjectURL(resp.data);
      document.getElementById("myImg").src = url;
    });
};

function App() {
  const [{ userManager, accessToken }] = useAppContext();
  const w = window.innerWidth;

  return (
    <>
      <WavyContainer className="indexed" />

      <Router history={history}>
        <ScrollToTop>
          <div>
            <Proomkabar className="indexed">
              {accessToken ? (
                <img
                  src=""
                  id="myImg"
                  alt="login"
                  className="login"
                  onClick={() => {
                    userManager.signoutRedirect();
                  }}
                ></img>
              ) : (
                <i
                  className="fas fa-user login"
                  onClick={() => {
                    userManager.signinRedirect();
                  }}
                ></i>
              )}

              <WavyLink
                waveColor="#007784"
                className="navigation-item"
                tag={Link}
                to={"/"}
                activeClassName={"active"}
              >
                {w < 1280 ? (
                  <i className="fas fa-home"></i>
                ) : (
                  <>
                    <i className="fas fa-home"></i>
                    <p>Domů</p>
                  </>
                )}
              </WavyLink>

              <WavyLink
                waveColor="#007784"
                className="navigation-item"
                tag={Link}
                to={"/favorite"}
                activeClassName={"active"}
              >
                {w < 1280 ? (
                  <i className="fas fa-heart"></i>
                ) : (
                  <>
                    <i className="fas fa-heart"></i>
                    <p>Oblíbené</p>
                  </>
                )}
              </WavyLink>
              <WavyLink
                waveColor="#007784"
                className="navigation-item"
                tag={Link}
                to={"/account"}
                activeClassName={"active"}
              >
                {w < 1280 ? (
                  <i className="fas fa-user"></i>
                ) : (
                  <>
                    <i className="fas fa-user"></i>
                    <p>Profil</p>
                  </>
                )}
              </WavyLink>
              <WavyLink
                waveColor="#007784"
                className="navigation-item"
                tag={Link}
                to={"/bag"}
                activeClassName={"active"}
              >
                {w < 1280 ? (
                  <i className="fas fa-shopping-bag"></i>
                ) : (
                  <>
                    <i className="fas fa-shopping-bag"></i>
                    <p>Košík</p>
                  </>
                )}
              </WavyLink>
              <WavyLink
                waveColor="#007784"
                className="navigation-item"
                tag={Link}
                to={"/admin"}
                activeClassName={"active"}
              >
                {w < 1280 ? (
                  <i className="fas fa-cog"></i>
                ) : (
                  <>
                    <i className="fas fa-cog"></i>
                    <p>Admin</p>
                  </>
                )}
              </WavyLink>
            </Proomkabar>
            <Content />
          </div>

          <Footer />
        </ScrollToTop>
        <Switch>
          <Route path="/oidc-callback" component={SignInCallback} />
          <Route path="/oidc-signout-callback" component={SignOutCallback} />
          <Route path="/oidc-silent-renew" component={SilentRenew} />
          <Route path="/sign-in" />
          <Route path="/sign-out" />
        </Switch>
      </Router>
    </>
  );
}

// Force reload when mobile
// orientation changes
window.screen.orientation.addEventListener("change", function (e) {
  window.location.reload(false);
});

export default App;
