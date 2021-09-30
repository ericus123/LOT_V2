import {  Button, Col, Modal, Rate, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import "./index.scss";

const RateModal = ({rateVisible, showRateModal, hideRateModal, rate, modal_data}) => {

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
        onCancel={hideRateModal}
        
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
    <Rate className="rating-stars" allowHalf defaultValue={rate} />
    </Col>
  </Row>
  <Row>
    <Button className="bg_dark_blue btn_small text_white item_center txt_bold">
      Rate
    </Button>
  </Row>

</Content>
        </Modal>
      </>
    );
};

export default RateModal;
 