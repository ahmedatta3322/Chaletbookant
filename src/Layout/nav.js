import React from "react";
import { Layout, Menu, Badge } from "antd";
import "../Styling/nav.css";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { LogOut } from "../redux/actions/userActionCreator";
const { Header } = Layout;
function Nav({ auth, history, user, errorMessg }) {
  // const [auth, setAuth] = useState(props.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.clear();
    // setAuth(false);
    dispatch(LogOut());
    history.push("/");
  };
  console.log(user, auth);
  return (
    // <Layout className="layout">
    <Header className="header">
      <div className="logo">
        <NavLink to="/">
          <img className="logo-immg mb-5" src="/images/logo.png" alt="logo" />
        </NavLink>
      </div>
      <Menu mode="horizontal" className="mt-1">
        <Menu.Item className="home-menu-item" key="1">
          <Link
            to="/"
            variant="primary"
            className="text-decoration-none"
            style={{
              // backgroundColor: "#F8B544",
              color: "white",
              border: "none",
              borderRadius: "0",
            }}
          >
            HOME
          </Link>
        </Menu.Item>
        <Menu.Item className="home-menu-item" key="2">
          <Link to="/chalets" className="text-white text-decoration-none">
            {" "}
            CHALETS
          </Link>
        </Menu.Item>
        <Menu.Item className="home-menu-item" key="3">
          <Link
            to={`/profile/${user.id}`}
            className="text-white text-decoration-none"
          >
            {" "}
            PROFILE
          </Link>
        </Menu.Item>
        <Menu.Item className="home-menu-item" key="4">
          ABOUT US
        </Menu.Item>
        <Menu.Item className="home-menu-item" key="5">
          CONTACT
        </Menu.Item>
        {(!auth && !user) || errorMessg === "Unauthenticated." ? (
          <Menu.Item className="home-menu-item" key="6">
            <Link
              to="/login"
              variant="primary"
              className="login-btn"
              style={{
                backgroundColor: "#F8B544",
                color: "white",
                border: "none",
                borderRadius: "0",
              }}
            >
              Login
            </Link>
          </Menu.Item>
        ) : (
          <>
            <Menu.Item className="home-menu-item" key="7">
              <Badge count={25}>
                <i className="far fa-bell font rotate text-white"></i>
              </Badge>
            </Menu.Item>
            <Menu.Item
              className="home-menu-item "
              key="8"
              onClick={handleLogOut}
            >
              <i className="fas fa-sign-out-alt font"></i>
            </Menu.Item>
          </>
        )}
        {/* {auth ||
          (user && (
            <>
              <Menu.Item className="home-menu-item" key="6">
                <Badge count={25}>
                  <i className="far fa-bell font rotate text-white"></i>
                </Badge>
              </Menu.Item>
              <Menu.Item
                className="home-menu-item "
                key="7"
                onClick={handleLogOut}
              >
                <i className="fas fa-sign-out-alt font"></i>
              </Menu.Item>
            </>
          ))} */}
        {/* <Menu.Item className="home-menu-item" key="1">
          <Badge count={25}>
            <i className="far fa-bell font rotate text-white"></i>
          </Badge>
        </Menu.Item>
        <Menu.Item className="home-menu-item " key="2" onClick={handleLogOut}>
          <i className="fas fa-sign-out-alt font"></i>
        </Menu.Item> */}
      </Menu>
    </Header>
    // </Layout>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.Users.user,
    chalets: reduxState.Chalets.chalets,
    token: reduxState.Users.token,
    auth: reduxState.Users.auth,
    errorMessg: reduxState.Users.errorMessg,
  };
};
export default connect(mapStateToProps)(withRouter(Nav));
