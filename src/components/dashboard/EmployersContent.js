import { Card, Col, Rate, Row } from "antd";
import { useState } from "react";
import "../../pages/dashboard/index.scss";
import { icons } from "../../utils/icons";
import RateModal from "../models/RateModal";
import data from "../../utils/company_data.json";

const EmployersContent = () => {
const [rateVisible, setRateVisible ] = useState(false);

const showRateModal = () => {
     setRateVisible(true);
};
const hideRateModal = () => {
     setRateVisible(false);
};
const [modal_data, setData] = useState(null);
return (
     <>
      <RateModal modal_data={modal_data} rateVisible={rateVisible} showRateModal={showRateModal} hideRateModal={hideRateModal}/>
     
   {data.map((item,key) => (
        <Row key={key} className="staff-cards-row" >
       <Card className="staff-card"> <Row className="staff-row"><Col className="staff-company-col" span={2}> <img className="staff-company-icon" src={icons[item.icon]}/></Col><Col span={5} className="
       company-name-col">{item.name}</Col><Col className="rate-col" span={8}><Rate className="rating-stars" allowHalf defaultValue={2.5} /></Col> <Col className="rate-text-col cursor_pointer" span={6} onClick={() => {showRateModal(); setData({name:item.name,icon:item.icon});}}>Rate</Col>
       <Col className="action-icon-col" span={1}><svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/></svg></Col>
       <Col className="action-icon-col" span={1}><svg className="delete-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.731 2 1.631 2h5.712z"/></svg></Col>
       </Row></Card>
   </Row>
   ))}
     </>
 );
};
export default EmployersContent;