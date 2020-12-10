import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import Nav from "../../Layout/nav";
import {
  Button,
  Jumbotron,
  Alert,
  Modal,
  Form,
  Pagination,
} from "react-bootstrap";
import { Row, Col, Layout, Dropdown, Modal as Modals } from "antd";
import { Menu } from "antd";
import UserCard from "./components/usercard";
// import ProfileFilter from "./components/profileFilter";
import ChaletCard from "./components/chaletCard";
import SubscribeCard from "./components/subscribeCard";
import "../../Styling/profile.css";
import Foter from "../../Layout/Footer";
import AboutChaletModal from "../../Components/modal/chaletModal";
import {
  getOnlineUserProfile,
  verifyMobile,
} from "../../redux/actions/userActionCreator";
import { getUserChalet } from "../../redux/actions/chaletActionCreator";
import {
  getSentRentRequests,
  getReciviedRentRequests,
} from "../../redux/actions/requestActionCreator";
const { Sider, Content } = Layout;

function Profile(props) {
  const {
    user,
    chalets,
    errorMessg,
    status,
    pagesNum,
    total,
    sentRentRequests,
    reciviedRentRequests,
  } = props;
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  // const [statuss, setStatus] = useState(status);
  // const [error, setError] = useState(err);
  const [filterStatus, setFilterStatus] = useState("My Chalets");
  const [code, setCode] = useState(0);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [requestfilterStatus, setRequestFilterStatus] = useState("0");
  const [requestTypefilterStatus, setRequestTypeFilterStatus] = useState("0");

  const handleRequestFilter = (e) => {
    console.log(typeof e.key);
    if (e.key === "1") setRequestFilterStatus("1");
    else if (e.key === "0") setRequestFilterStatus("0");
  };
  const handleTypeRequestFilter = (e) => {
    console.log(typeof e.key);
    if (e.key === "0") setRequestTypeFilterStatus("0");
    if (e.key === "1") setRequestTypeFilterStatus("1");
  };
  const menu1 = (
    <Menu onClick={handleRequestFilter}>
      <Menu.Item key="0">
        <button className="filterbtn">Rent</button>
      </Menu.Item>
      <Menu.Item key="1">
        <button className="filterbtn">Exchange</button>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  const menu2 = (
    <Menu onClick={handleTypeRequestFilter}>
      <Menu.Item key="0">
        <button className="filterbtn">Sent</button>
      </Menu.Item>
      <Menu.Item key="1">
        <button className="filterbtn">Receivied</button>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  function warning() {
    Modals.warning({
      title: "This is a warning message",
      content: "You need to Verify your Account First ",
    });
  }
  useEffect(() => {
    // console.log(match.params.id);
    // setStatus(status);
    // if (err) setError(err);
    if (
      filterStatus === "Requests" &&
      requestfilterStatus === "0" &&
      requestTypefilterStatus === "0"
    )
      dispatch(getSentRentRequests());
    else if (
      filterStatus === "Requests" &&
      requestfilterStatus === "0" &&
      requestTypefilterStatus === "1"
    )
      dispatch(getReciviedRentRequests());
    console.log(requestTypefilterStatus, requestfilterStatus);
    dispatch(getUserChalet(currentPage));
    dispatch(getOnlineUserProfile());
    if (
      errorMessg === "The code must be 4 digits." ||
      errorMessg === "not verified"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }

    console.log(status, errorMessg);
  }, [
    dispatch,
    errorMessg,
    status,
    currentPage,
    requestTypefilterStatus,
    requestfilterStatus,
    filterStatus,
  ]);
  console.log(chalets);
  const handleFilter = (e) => {
    const { textContent } = e.target;
    // console.log(typeof textContent);
    if (textContent === "Requests") {
      setFilterStatus("Requests");
      console.log(filterStatus);
    } else if (textContent === "My Chalets") {
      setFilterStatus("My Chalets");
      console.log(filterStatus);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(code);
  };
  const handleClick = (e) => {
    setCurrentPage(e.target.textContent);
  };
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= pagesNum; number++) {
    items.push(
      <Pagination.Item
        onClick={handleClick}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyMobile(code));
    console.log(props);
  };
  // const onFinish = (values, props) => {
  //   console.log(values, props);
  //   dispatch(verifyMobile(values));
  //   console.log(statuss);
  //   setShow(false);
  // };
  console.log(sentRentRequests, reciviedRentRequests);
  return (
    <>
      {user.mobile_verfied === 0 && (
        <Alert variant="warning" className="mb-0">
          You need to verify your phone number
          <Alert.Link href="#">
            {" "}
            <Button
              variant="primary"
              className="border-0 text-warning"
              onClick={handleShow}
            >
              Click here
            </Button>
          </Alert.Link>{" "}
          to verify it.
        </Alert>
      )}
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Verify Phone Number</Modal.Title>
        </Modal.Header>
        <Form
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 14 }}
          // layout="horizontal"
          // onFinish={onFinish}
          // onSubmit={handleSubmit}
          onSubmit={handleSubmit}
          // initialValues={{ size: componentSize }}
          // onValuesChange={onFormLayoutChange}
          // size={componentSize}
        >
          <Modal.Body>
            <Form.Group>
              <Form.Control type="number" name="code" onChange={handleChange} />
            </Form.Group>
            {errorMessg && <Alert variant="danger">{errorMessg}</Alert>}
            {/* <Form.Item>
              <Input
                // {...props}
                name="code"
                onChange={handleChange}
                // className="input-field d-block p-3 ml-3 inputs"
                // placeholder="The Number of Guests"
                maxLength={4}
                type="number"
              />
            </Form.Item> */}
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="text-dark"
              >
                Close
              </Button>
              <Button
                // htmlType="submit"
                type="submit"
                variant="primary"
                className="text-dark"
                // onClick={handleClose}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>
      <div
        className={`profile ${user.mobile_verfied === 0 ? "fadee" : "nofade"}`}
      >
        <Layout>
          <Nav auth={props.auth} />
          <Jumbotron fluid>
            <Row>
              <Col span={5}>
                <UserCard user={user} chaletsCount={total} />
              </Col>
              <h2 className="username">{user.first_name}</h2>
            </Row>
          </Jumbotron>
          <Button
            className="addButton color p-4 h5"
            onClick={
              user.status !== "verified" ? warning : () => setModalShow(true)
            }
            disabled={user.mobile_verfied === 0 ? true : false}
          >
            <i class="fas fa-plus-circle color add mr-3"></i>
            <span>ADD NEW CHALET</span>
          </Button>
          <AboutChaletModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Layout className="content">
            <Content>
              <Row>
                <Col xl={15} span={5} offset={1}>
                  <Button
                    variant="primary"
                    className="prof-filter active shadow p-5 cardButton"
                    onClick={handleFilter}
                    disabled={user.mobile_verfied === 0 ? true : false}
                  >
                    <img src="/images/Chalets-Icon.png" alt="chalet" />
                    <br />
                    <span className=" mt-1" onClick={handleFilter}>
                      My Chalets
                    </span>
                  </Button>
                  <Button
                    variant="primary"
                    className="prof-filter bg-light ml-5 shadow p-5 cardButton"
                    onClick={handleFilter}
                    disabled={user.mobile_verfied === 0 ? true : false}
                  >
                    <img src="/images/requests icon.png" alt="chalet" />
                    <br />
                    <span
                      className="text-secondary mt-1"
                      onClick={handleFilter}
                    >
                      Requests
                    </span>
                  </Button>
                </Col>
              </Row>
              <Row>
                {/* chalits*/}
                {filterStatus === "My Chalets" && (
                  <Col xl={20} xxl={15} offset={2}>
                    <Row>
                      {chalets && chalets.length !== 0 ? (
                        chalets.map((chalet) => (
                          <>
                            <Col xl={10} xxl={7} span={6}>
                              <ChaletCard userChalet={chalet} key={chalet.id} />
                            </Col>
                            <Col md={1} span={1}></Col>
                          </>
                        ))
                      ) : (
                        <p>No Chlets Added</p>
                      )}
                    </Row>
                    {currentPage < total && (
                      <Pagination
                        size="lg"
                        className="justify-content-end mr-5 mt-5"
                      >
                        {/* <Pagination.Prev /> */}
                        {items}
                        {/* <Pagination.Next /> */}
                      </Pagination>
                    )}
                  </Col>
                )}
                {/* Requests*/}
                {filterStatus === "Requests" && (
                  <Col span={15} xl={23} xxl={16} offset={2} className="mt-5">
                    <Row className="requestfilter">
                      <Dropdown
                        overlay={menu1}
                        trigger={["click"]}
                        className="pr-5 pl-5"
                      >
                        <button
                          className="ant-dropdown-link filterbtn d-flex"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fas fa-angle-down arrow"></i>
                          {/* <DownOutlined /> */}
                          Rent
                        </button>
                      </Dropdown>
                      <Dropdown
                        overlay={menu2}
                        trigger={["click"]}
                        className="pr-5 pl-5"
                      >
                        <button
                          className="ant-dropdown-link filterbtn d-flex"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i class="fas fa-angle-down arrow"></i>
                          {/* <DownOutlined /> */}
                          Sent
                        </button>
                      </Dropdown>
                    </Row>

                    <div className="bg-light p-3 mt-5">
                      {/*sent request */}
                      {requestTypefilterStatus === "0" &&
                        requestfilterStatus === "0" &&
                        (sentRentRequests && sentRentRequests !== 0 ? (
                          sentRentRequests.map(
                            (request) =>
                              request.chalet !== null && (
                                <Row className="mt-5 mb-5">
                                  <Col span={15}>
                                    {requestTypefilterStatus === "0" && (
                                      <p className="request-content">
                                        You have Sent{" "}
                                        <span className="red">Rent</span>{" "}
                                        Request to{" "}
                                        <span className="yellow">
                                          {request.chalet &&
                                            request.chalet.address}
                                        </span>{" "}
                                      </p>
                                    )}
                                  </Col>
                                  <>
                                    <Col span={4}></Col>
                                    <Col xl={5} span={3}>
                                      <Row>
                                        <Button
                                          variant="primary"
                                          className="active pl-4 pr-4 p-3 viewbtn d-flex border-0"
                                        >
                                          view
                                        </Button>
                                        {/*it will show in received only*/}
                                        {requestfilterStatus === "0" &&
                                          request.chalet !== null && (
                                            <Button className="border-0">
                                              <i class="fas fa-trash-alt trash"></i>
                                            </Button>
                                          )}
                                      </Row>
                                    </Col>
                                  </>
                                </Row>
                              )
                          )
                        ) : (
                          <p>No Sent Rent Requests yet</p>
                        ))}
                      {requestTypefilterStatus === "1" &&
                        requestfilterStatus === "0" &&
                        (reciviedRentRequests && reciviedRentRequests !== 0 ? (
                          reciviedRentRequests.map(
                            (request) =>
                              request.chalet !== null && (
                                <Row className="mt-5 mb-5">
                                  <Col span={15}>
                                    {requestTypefilterStatus === "1" && (
                                      <p className="request-content">
                                        You have Recivied a Request from{" "}
                                        <span className="yellow">
                                          {request.chalet && request.user}
                                        </span>{" "}
                                        to <span className="red">Rent</span>{" "}
                                        your{" "}
                                        <span className="yellow">
                                          {request.chalet &&
                                            request.chalet.address}
                                        </span>{" "}
                                        Chalet
                                      </p>
                                    )}
                                  </Col>
                                  <Col span={4}></Col>
                                  <Col xl={5} span={3}>
                                    <Row>
                                      <Button
                                        variant="primary"
                                        className="active pl-4 pr-4 p-3 viewbtn d-flex border-0"
                                      >
                                        view
                                      </Button>
                                      {/*it will show in received only*/}
                                      {/* {requestfilterStatus === "0" && (
                                <Button className="border-0">
                                  <i class="fas fa-trash-alt trash"></i>
                                </Button>
                              )} */}
                                    </Row>
                                  </Col>
                                </Row>
                              )
                          )
                        ) : (
                          <p>No Recivied Rent Requests yet</p>
                        ))}
                    </div>
                  </Col>
                )}

                {/* end of requests*/}
                <Col span={5} offset={25} className="ml-5 side">
                  <Row>
                    <Sider>
                      <Col span={25} offset={10} className="m-0">
                        <SubscribeCard />
                        <br />
                        <img
                          src="/images/adds.png"
                          alt="adds"
                          className="adds"
                        />{" "}
                      </Col>
                    </Sider>
                  </Row>
                </Col>
              </Row>
            </Content>
          </Layout>
          <Foter />
        </Layout>
      </div>
    </>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.Users.user,
    chalets: reduxState.Chalets.currentUserChalets,
    errorMessg: reduxState.Users.errorMessg,
    status: reduxState.Users.status,
    auth: reduxState.Users.auth,
    pagesNum: reduxState.Chalets.pagesNum,
    total: reduxState.Chalets.total,
    sentRentRequests: reduxState.Requests.sentRentRequests,
    reciviedRentRequests: reduxState.Requests.reciviedRentRequests,
  };
};
export default connect(mapStateToProps)(Profile);
