import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "../../Layout/nav";
import {
  Button,
  Jumbotron,
  Alert,
  Modal,
  Form,
  Pagination,
} from "react-bootstrap";
import { Row, Col, Layout, Modal as Modals, Select, Spin } from "antd";
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
  getSentExchangeRequests,
  getReciviedExchangeRequests,
} from "../../redux/actions/requestActionCreator";
import ViewRequestModal from "../../Components/modal/viewRequestModal";
const { Sider, Content } = Layout;
const { Option } = Select;
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
    sentExchangeRequests,
    reciviedExchangeRequests,
  } = props;
  const [modalShow, setModalShow] = useState(false);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [show, setShow] = useState(false);
  // const [statuss, setStatus] = useState(status);
  // const [error, setError] = useState(err);
  const [filterStatus, setFilterStatus] = useState("My Chalets");
  const [code, setCode] = useState(0);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [requestfilterStatus, setRequestFilterStatus] = useState("Rent");
  const [requestTypefilterStatus, setRequestTypeFilterStatus] = useState(
    "Sent"
  );
  const [request, setRequest] = useState({});
  const [loading, setLoading] = useState(true);
  const handleRequestFilter = (value) => {
    if (value === "Exchange") setRequestFilterStatus("Exchange");
    else if (value === "Rent") setRequestFilterStatus("Rent");
  };
  const handleTypeRequestFilter = (value) => {
    // console.log(typeof e.key);
    if (value === "Sent") setRequestTypeFilterStatus("Sent");
    if (value === "Receivied") setRequestTypeFilterStatus("Receivied");
  };
  function warning() {
    Modals.warning({
      title: "This is a warning message",
      content: "You need to Verify your Account First ",
    });
  }
  const handleViewClick = (request) => {
    setViewModalShow(true);
    setRequest(request);
  };
  console.log(request);
  useEffect(() => {
    // console.log(match.params.id);
    // setStatus(status);
    // if (err) setError(err);
    if (
      filterStatus === "Requests" &&
      requestfilterStatus === "Rent" &&
      requestTypefilterStatus === "Sent"
    )
      dispatch(getSentRentRequests());
    else if (
      filterStatus === "Requests" &&
      requestfilterStatus === "Rent" &&
      requestTypefilterStatus === "Receivied"
    )
      dispatch(getReciviedRentRequests());

    if (
      filterStatus === "Requests" &&
      requestfilterStatus === "Exchange" &&
      requestTypefilterStatus === "Sent"
    )
      dispatch(getSentExchangeRequests());
    else if (
      filterStatus === "Requests" &&
      requestfilterStatus === "Exchange" &&
      requestTypefilterStatus === "Receivied"
    )
      dispatch(getReciviedExchangeRequests());
    // console.log(requestTypefilterStatus, requestfilterStatus);
    console.log(currentPage);
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
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    // console.log(status, errorMessg);
  }, [
    dispatch,
    errorMessg,
    status,
    currentPage,
    requestTypefilterStatus,
    requestfilterStatus,
    filterStatus,
  ]);
  // console.log(chalets);
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
  // console.log(errorMessg);
  // console.log(typeof sentRentRequests);
  return (
    <>
      {loading === true ? (
        <div className="loader">
          {" "}
          <Spin size="large" />
        </div>
      ) : errorMessg === "Unauthenticated." ? (
        <Redirect to="/login"></Redirect>
      ) : (
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
                  <Form.Control
                    type="number"
                    name="code"
                    onChange={handleChange}
                  />
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
            className={`profile ${
              user.mobile_verfied === 0 ? "fadee" : "nofade"
            }`}
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
                  user.status !== "verified"
                    ? warning
                    : () => setModalShow(true)
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
                                  <ChaletCard
                                    userChalet={chalet}
                                    key={chalet.id}
                                  />
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
                      <Col
                        span={15}
                        xl={23}
                        xxl={16}
                        offset={2}
                        className="mt-5"
                      >
                        <Row className="requestfilter">
                          <Select
                            defaultValue="Rent"
                            style={{ width: 109 }}
                            onChange={handleRequestFilter}
                          >
                            <Option value="Rent">Rent</Option>
                            <Option value="Exchange">Exchange</Option>
                          </Select>
                          <Select
                            defaultValue="Sent"
                            style={{ width: 109 }}
                            onChange={handleTypeRequestFilter}
                          >
                            <Option value="Sent">Sent</Option>
                            <Option value="Receivied">Receivied</Option>
                          </Select>
                        </Row>

                        <div className="bg-light p-3 mt-5">
                          {/*sent request */}
                          {requestTypefilterStatus === "Sent" &&
                            requestfilterStatus === "Rent" &&
                            (sentRentRequests &&
                            sentRentRequests.length !== 0 ? (
                              sentRentRequests.map(
                                (request) =>
                                  request.chalet !== null && (
                                    <Row className="mt-5 mb-5">
                                      <Col span={15}>
                                        {requestTypefilterStatus === "Sent" && (
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
                                            {requestfilterStatus === "Rent" &&
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
                          {requestTypefilterStatus === "Receivied" &&
                            requestfilterStatus === "Rent" &&
                            (reciviedRentRequests &&
                            reciviedRentRequests.length !== 0 ? (
                              reciviedRentRequests.map(
                                (request) =>
                                  request.chalet !== null && (
                                    <Row className="mt-5 mb-5">
                                      <Col span={15}>
                                        {requestTypefilterStatus ===
                                          "Receivied" && (
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
                                            // onClick={() =>
                                            //   setViewModalShow(true)
                                            // }
                                          >
                                            view
                                          </Button>
                                          {/* <ViewRequestModal
                                            request={request}
                                            show={viewModalShow}
                                            onHide={() =>
                                              setViewModalShow(false)
                                            }
                                          /> */}
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
                          {/*exchange*/}
                          {/*sent request */}
                          {requestTypefilterStatus === "Sent" &&
                            requestfilterStatus === "Exchange" &&
                            (sentExchangeRequests &&
                            sentExchangeRequests.length !== 0 ? (
                              sentExchangeRequests.map(
                                (request) =>
                                  request.chalet_host !== null && (
                                    <Row className="mt-5 mb-5">
                                      <Col span={15}>
                                        {requestTypefilterStatus === "Sent" && (
                                          <p className="request-content">
                                            You have Sent{" "}
                                            <span className="red">
                                              Exchange
                                            </span>{" "}
                                            Request to{" "}
                                            <span className="yellow">
                                              {request.chalet_host &&
                                                request.chalet_host.address}
                                            </span>{" "}
                                            with your Chalet{" "}
                                            <span className="yellow">
                                              {request.chalet_Guest &&
                                                request.chalet_Guest.address}
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
                                              onClick={() =>
                                                handleViewClick(request)
                                              }
                                            >
                                              view
                                            </Button>
                                            {/*it will show in received only*/}
                                            {requestfilterStatus ===
                                              "Exchange" &&
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
                              <p>No Sent Exchange Requests yet</p>
                            ))}
                          <ViewRequestModal
                            filterStatus={requestTypefilterStatus}
                            request={request}
                            show={viewModalShow}
                            onHide={() => setViewModalShow(false)}
                          />
                          {requestTypefilterStatus === "Receivied" &&
                            requestfilterStatus === "Exchange" &&
                            (reciviedExchangeRequests &&
                            reciviedExchangeRequests.length !== 0 ? (
                              reciviedExchangeRequests.map(
                                (request) =>
                                  request.chalet !== null && (
                                    <Row className="mt-5 mb-5">
                                      <Col span={15}>
                                        {requestTypefilterStatus ===
                                          "Receivied" && (
                                          <p className="request-content">
                                            You have Recivied a Request from{" "}
                                            <span className="yellow">
                                              {request.chalet_Guest &&
                                                request.chalet_Guest.user
                                                  .first_name}
                                            </span>{" "}
                                            to{" "}
                                            <span className="red">
                                              Exchange
                                            </span>{" "}
                                            your{" "}
                                            <span className="yellow">
                                              {request.chalet_host &&
                                                request.chalet_host.address}
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
                                            onClick={() =>
                                              handleViewClick(request)
                                            }
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
                              <p>No Recivied Exchange Requests yet</p>
                            ))}
                          <ViewRequestModal
                            filterStatus={requestTypefilterStatus}
                            request={request}
                            show={viewModalShow}
                            onHide={() => setViewModalShow(false)}
                          />
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
      )}
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
    sentExchangeRequests: reduxState.Requests.sentExchangeRequests,
    reciviedExchangeRequests: reduxState.Requests.reciviedExchangeRequests,
  };
};
export default connect(mapStateToProps)(Profile);
