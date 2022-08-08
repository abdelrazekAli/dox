// Import react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import pages
import Home from "./pages/home/Home";
import NewAd from "./pages/newAD/NewAD";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import NewPass from "./pages/newPass/NewPass";
import Register from "./pages/register/Register";
import ResetPass from "./pages/resetPass/ResetPass";
import NewFullAD from "./pages/newFullAD/NewFullAD";
import AdDetails from "./pages/adDetails/AdDetails";
import AdminsLogin from "./pages/adminsLogin/AdminsLogin";
import SponsoredAd from "./pages/sponsoredAd/SponsoredAd";
import UserAccount from "./pages/userAccount/UserAccount";
import Verification from "./pages/verification/Verification";
import UserSettings from "./pages/userSettings/UserSettings";
import AdminSettings1 from "./pages/adminSettings1/AdminSettings1";
import AdminSettings2 from "./pages/adminSettings2/AdminSettings2";
import AdminSettings3 from "./pages/adminSettings3/AdminSettings3";
import AdminSettings4 from "./pages/adminSettings4/AdminSettings4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/new-ad" component={NewAd} />
        <Route path="/product" component={Product} />
        <Route path="/new-pass" component={NewPass} />
        <Route path="/register" component={Register} />
        <Route path="/ad-details" component={AdDetails} />
        <Route path="/reset-pass" component={ResetPass} />
        <Route path="/new-full-ad" component={NewFullAD} />
        <Route path="/sponsored-ad" component={SponsoredAd} />
        <Route path="/user-account" component={UserAccount} />
        <Route path="/admins-login" component={AdminsLogin} />
        <Route path="/verification" component={Verification} />
        <Route path="/user-settings" component={UserSettings} />
        <Route path="/admin-settings-1" component={AdminSettings1} />
        <Route path="/admin-settings-2" component={AdminSettings2} />
        <Route path="/admin-settings-3" component={AdminSettings3} />
        <Route path="/admin-settings-4" component={AdminSettings4} />
      </Switch>
    </Router>
  );
}

export default App;
