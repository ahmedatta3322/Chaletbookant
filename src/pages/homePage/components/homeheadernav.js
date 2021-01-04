import React from "react";
import { Layout, Menu, Row, Badge } from "antd";
import "../../../Styling/homeheadernav.css";
import { Link, withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { LogOut } from "../../../redux/actions/userActionCreator";
const { Header } = Layout;
function HomeNav({ auth, location, user, errorMessg }) {
  // const token = localStorage.getItem("token");
  // const [auth, setAuth] = useState(props.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.clear();
    // setAuth(false);
    window.location.reload();
    dispatch(LogOut());
  };
  console.log(auth, user);
  return (
    <Layout className="layout">
      <Header id="home-header">
        <div className="logo">
          <img className="logo-img" src="/images/logo.png" alt="logo" />
        </div>
        <Menu
          id="home-menu"
          mode="horizontal"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item className="home-menu-item home-menu-item-active" key="1">
            HOME
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="/chalets">
            <Link to="/chalets" className="text-white text-decoration-none">
              {" "}
              CHALETS
            </Link>
          </Menu.Item>
          {user && (
            // (errorMessg === "Unauthenticated."
            <Menu.Item className="home-menu-item" key="3">
              <Link
                to={user.id !== undefined ? `/profile/${user.id}` : "/login"}
                className="text-white text-decoration-none"
              >
                {" "}
                PROFILE
              </Link>
            </Menu.Item>
          )}
          <Menu.Item className="home-menu-item" key="4">
            ABOUT US
          </Menu.Item>
          <Menu.Item className="home-menu-item" key="5">
            CONTACT
          </Menu.Item>
          {Object.keys(user).length === 0 ||
          errorMessg === "Unauthenticated." ? (
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
                <Link
                  to="/login"
                  variant="primary"
                  // className="login-btn"
                  style={{
                    color: "white",
                    border: "none",
                    borderRadius: "0",
                  }}
                >
                  <i className="fas fa-sign-out-alt font"></i>
                </Link>
              </Menu.Item>
            </>
          )}
          {/* {!auth && !user && (
            <Menu.Item className="home-menu-item" key="/login">
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
          )}
          {auth ||
            (user && (
              <>
                <Menu.Item className="home-menu-item" key="1">
                  <Badge count={25}>
                    <i className="far fa-bell font rotate text-white"></i>
                  </Badge>
                </Menu.Item>
                <Menu.Item
                  className="home-menu-item "
                  key="2"
                  onClick={handleLogOut}
                >
                  <i className="fas fa-sign-out-alt font"></i>
                </Menu.Item>
              </>
            ))} */}
        </Menu>
        <Row>
          <Row>
            <div className="header-content">
              <div className="empty-div-right"></div>
              <h1>
                Book Your <span style={{ color: "##F8B544" }}> Chalet</span>
              </h1>
              <p>From your Home</p>
              <div className="empty-div-left"></div>
            </div>
          </Row>
          <Row>
            <div className="wave">
              <img className="wave-img" src="/images/waves.png" alt="wave" />
            </div>
          </Row>
        </Row>
        <div className="side-wave">
          <img
            className="side-wave-img"
            src="/images/side wave.png"
            alt="wave"
          />
          <img src="/images/chair.jpg" className="chair" alt="chair" />
        </div>
      </Header>
    </Layout>
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
export default connect(mapStateToProps)(withRouter(HomeNav));
