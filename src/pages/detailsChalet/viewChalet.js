import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Layout, Row, Col, Carousel, Image } from "antd";
import { Pagination } from "react-bootstrap";
import Nav from "../../Layout/nav";
import DetailsChaletCard from "./components/detailsChaletCard";
import GoogleMap from "../../Components/map";
import ChaletCard from "../profilePage/components/chaletCard";
import Foter from "../../Layout/Footer";
import "../../Styling/viewChalet.css";
import GuestsReviews from "./components/guestsReviews";
import {
  getChaletById,
  getChaletsByPrice,
} from "../../redux/actions/chaletActionCreator";
import { getOnlineUserProfile } from "../../redux/actions/userActionCreator";
const { Content } = Layout;
function ViewChalet({ match, chalet, chalets, auth, pagesNum, total, user }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getOnlineUserProfile());
    dispatch(getChaletById(match.params.id));
    dispatch(getChaletsByPrice("5", chalet.fees, currentPage));
  }, [dispatch, match.params.id, chalet.fees, currentPage]);
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
  console.log(chalet, chalets, pagesNum, total);
  return (
    <div>
      <Layout>
        <Nav auth={auth} />
        <Layout className="chalits-details">
          <Content>
            <hr className="d-inline-block mr-0 rightdiv" />
            <h5 className="d-inline-block mt-4 mb-5 headings">
              Chalet Details
            </h5>
            <hr className="d-inline-block ml-0 leftdiv" />
            <Row>
              <Col span={4} offset={1} className="ml-0"></Col>
              <Col xl={10} xxl={11} offset={5} className="m-0">
                <Row>
                  <Col span={15}>
                    <Carousel autoplay>
                      {chalet &&
                      chalet.images &&
                      Object.keys(chalet.images).length !== 0 ? (
                        chalet.images.map((img) => (
                          <div key={img.name}>
                            <img className="image" src={img.url} alt="images" />
                          </div>
                        ))
                      ) : (
                        <Image
                          width={600}
                          height={365}
                          src="error"
                          fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                        />
                      )}
                    </Carousel>
                    <Row
                      className="separator"
                      style={{ height: "2.5rem", backgroundColor: "#0070D3" }}
                    >
                      <Col></Col>
                    </Row>
                    <Row
                      className="view-map"
                      style={{
                        width: "76vw",
                        height: "16.6vh",
                        transform: "translate(0px, -13px)",
                      }}
                    >
                      <Col
                        xl={6}
                        xxl={9}
                        span={10}
                        offset={20}
                        className="m-0 rentchalet"
                      >
                        <GoogleMap
                          langitude={chalet.langitude}
                          latitude={chalet.latitude}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col span={9}>
                    <DetailsChaletCard chalet={chalet} user={user} />
                  </Col>
                </Row>
              </Col>
              <div style={{ width: "37px" }}></div>
              <Col xl={5} xxl={4} offset={5} className="m-0">
                <Row>
                  <Col span={24}>
                    <GuestsReviews rate={chalet.rating} />
                  </Col>
                </Row>
              </Col>
              <Col span={4} offset={1} className="ml-0"></Col>
            </Row>
            <Row className="relatedChalets mb-5">
              {/* chalits*/}
              <hr className="d-inline-block mr-0 rightdiv" />
              <h5 className="d-inline-block headings">Related Chalets</h5>
              <hr className="d-inline-block ml-0 leftdiv" />

              <Col xl={22} xxl={23} offset={1}>
                <Row>
                  {chalets && chalets.length !== 0 ? (
                    chalets.map((chalet) => (
                      <>
                        <Col xl={4} xxl={4} span={6} className="m-chalets">
                          <ChaletCard chalet={chalet} key={chalet.id} />
                        </Col>
                        {/* <Col md={1} span={1}></Col> */}
                      </>
                    ))
                  ) : (
                    <p>No Chlets Added</p>
                  )}

                  {/* <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1} span={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1} span={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col>
                  <Col md={1}></Col>
                  <Col xl={10} xxl={4} span={6}>
                    <ChaletCard />
                  </Col> */}
                </Row>
              </Col>
            </Row>
            {currentPage < total && (
              <Pagination size="lg" className="justify-content-end mr-5">
                {/* <Pagination.Prev /> */}
                {items}
                {/* <Pagination.Next /> */}
              </Pagination>
            )}
          </Content>
        </Layout>
        <Foter />
      </Layout>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    user: reduxState.Users.user,
    chalet: reduxState.Chalets.chalet,
    chalets: reduxState.Chalets.chalets,
    auth: reduxState.Chalets.auth,
    pagesNum: reduxState.Chalets.pagesNum,
    total: reduxState.Chalets.total,
  };
};
export default connect(mapStateToProps)(ViewChalet);
