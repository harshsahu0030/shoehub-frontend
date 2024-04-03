import { Link, useParams } from "react-router-dom";
import LoginSignup from "../components/LoginSignup";
import { myAccount } from "../data/myAccount";

const MyAccount = () => {
  const isAuthenticated = true;

  const { pathname } = useParams();

  return (
    myAccount && (
      <div className="myaccount_container">
        <div className="wrapper">
          {!isAuthenticated ? (
            <div className="section_login_signup">
              <LoginSignup />
            </div>
          ) : (
            <div className="account_setting">
              <ul>
                {myAccount.navbar.map((item, i) => (
                  <li className={pathname === item.name && "active"} key={i}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pathname === "dashboard" && (
            <div className="dashboard">
              <p>
                Hello <b>harsh0030</b> (not <b>harsh0030</b>?{" "}
                <Link to={"/"}>Log out</Link>)
              </p>
              <p>
                From your account dashboard you can view your{" "}
                <Link to={"/"}>recent orders</Link>, manage your{" "}
                <Link to={"/my-account/address"}>
                  shipping and billing addresses
                </Link>
                , and &nbsp;
                <Link to={"/my-account/account-details"}>
                  edit your password and account details
                </Link>
                .
              </p>
            </div>
          )}

          {pathname === "account-details" && (
            <div className="account_details"></div>
          )}
        </div>
      </div>
    )
  );
};

export default MyAccount;
