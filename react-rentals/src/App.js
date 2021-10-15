import { Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { createBrowserHistory } from "history";
import ScrollToTop from "./ScrollToTop";
import { WavyContainer } from "react-wavy-transitions";
import { ApplicationProvider } from "./providers/ApplicationProvider";
import TopErrorBoundary from "./components/errors/TopErrorBoundary";
import SignInCallback from "./components/auth/SignInCallback";
import SilentRenew from "./components/auth/SilentRenew";
import SignOutCallback from "./components/auth/SignOutCallback";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <WavyContainer />
      <TopErrorBoundary>
        <ApplicationProvider>
          <Router history={history}>
            <ScrollToTop>
              <Navbar />
              <Content />
              <Footer />
            </ScrollToTop>
            <Switch>
              <Route path="/oidc-callback" component={SignInCallback} />
              <Route
                path="/oidc-signout-callback"
                component={SignOutCallback}
              />
              <Route path="/oidc-silent-renew" component={SilentRenew} />
              <Route path="/sign-in" />
              <Route path="/sign-out" />
            </Switch>
          </Router>
        </ApplicationProvider>
      </TopErrorBoundary>
    </>
  );
}

// Force reload when mobile
// orientation changes
window.screen.orientation.addEventListener("change", function (e) {
  window.location.reload(false);
});

export default App;
