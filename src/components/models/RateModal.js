import {  Button, Col, Modal, Rate, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { rateCompaniesRequest } from "../../redux/actions/staffs";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.scss";
import { useState } from "react";

const RateModal = ({rateVisible, showRateModal, hideRateModal,rating, modal_data}) => {

  const antIcon = <LoadingOutlined style={{ fontSize: 22 }} spin />;
  const [comp_rating, setRating] = useState(rating);

  const dispatch = useDispatch();

  const handleRating = () => {
    dispatch(rateCompaniesRequest(modal_data?.id, modal_data?.name, {rating: Number(rating)}));
  };
  
  
  const isLoading = useSelector(state => state.StaffsReducer.rateIsLoading);
  

    return (
      <>
        <Modal
        centered={true}
        closable={false}
        maskClosable
        footer={null}
        title={<h1 className="rate-modal-title txt_dark_blue txt_font_weight_700 txt_center">Rate Company</h1>}
        visible={rateVisible}
        width={300}
        mask={true}
        onOk={showRateModal}
        onCancel={ () => { hideRateModal(); setRating(rating);}}
        >
<Content>

  <Row>
    <div className="rate-icon-wrapper">
   {modal_data ?  <img className="rate-icon" src={modal_data.icon}/> : null} 
 
 <h1 className="rate-modal-company-name txt_dark_blue txt_font_weight_700 txt_center">{modal_data?.name}</h1>
    </div> 
 
  </Row>
    <Row>
        <h1 className="rating-txt">
        To rate this company you will First choose the stars and save By clicking “rate”
    </h1>
  </Row>
  <Row className="rating-footer" gutter={[10,10]}>
    <Col span={6}>
    <h1 className=" rate-text-title txt_normal">RATE</h1>
    </Col>
    <Col span={14}>
    <Rate className="rating-stars"  disabled={isLoading} allowHalf value={Number(comp_rating)}onChange={(value) => setRating(value)} />
    </Col>
  </Row>
  <Row>
    <Button disabled={isLoading} className="bg_dark_blue btn_small text_white item_center txt_bold" onClick={handleRating}>
        {isLoading ? <Spin indicator={antIcon} />: "Rate"}
    </Button>
  </Row>
</Content>
        </Modal>
      </>
    );
};

export default RateModal;
 