import { Card, Col, Rate, Row } from "antd";
import { useState } from "react";
import "../../pages/dashboard/index.scss";
import RateModal from "../models/RateModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCompaniesRequest, getCompaniesRequest } from "../../redux/actions/staffs";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;


const EmployersContent = () => {
const [rateVisible, setRateVisible ] = useState(false);
let [modal_data, setData] = useState(null);
const [rating, setRating] = useState(null);

const showRateModal = () => {
 
     setRateVisible(true);
};

const handleData = async (item) => {
          // eslint-disable-next-line no-unused-vars
      setRating(currRating => item.rating);
     setData(null);
     setData({name:item.name,icon:item.picture,rating: item.rating, id:item.id});
    
   
};
const hideRateModal = () => {
     setRateVisible(false);
};

const showDeleteModal = (item) => {
  return  confirm({
    title: <h4>Are you sure you want to delete <b>{item.name}</b>?</h4>,
    icon: <ExclamationCircleOutlined />,
    content: "",
    okText: <p onClick={() => { dispatch(deleteCompaniesRequest(item?.id,item?.name)); }}>Yes</p>,
    okType: "danger",
    cancelText: "No",
  });
};

const dispatch = useDispatch();

const companies = useSelector(state => state.StaffsReducer.companies);
const rated = useSelector(state => state.StaffsReducer.rated);
const deleted = useSelector(state => state.StaffsReducer.deleted);
const companyDeleteIsLoading = useSelector(state => state.StaffsReducer.deleteIsLoading);




 useEffect(() => {
        dispatch(getCompaniesRequest());
    },[]);
useEffect(() => {
     dispatch(getCompaniesRequest());
     setRateVisible(false);
},[rated,deleted]);





return (
     <>
      <RateModal rating={rating} modal_data={modal_data} rateVisible={rateVisible} showRateModal={showRateModal} hideRateModal={hideRateModal}/>
   {companies?.map((item,key) => (
        <Row key={key} className="staff-cards-row" >
       <Card className="staff-card"> <Row className="staff-row"><Col className="staff-company-col" span={2}> <img className="staff-company-icon" src={item.picture}/></Col><Col span={5} className="
       company-name-col"> {item.name}</Col><Col className="rate-col" span={8}><Rate className="rating-stars" allowHalf value={Number(item.rating? item.rating : null)}  /></Col> <Col className="rate-text-col cursor_pointer" span={6} onClick={() => {showRateModal(); handleData(item);}}>Rate</Col>
       <Col className="action-icon-col" span={1}><svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/></svg></Col>
       <Col className="action-icon-col"   span={1}><svg className="delete-icon" type="button" disabled={companyDeleteIsLoading} disap onClick={() => showDeleteModal(item)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.731 2 1.631 2h5.712z"/></svg></Col>
       </Row></Card>
   </Row>
   ))}
     </>
 );
};
export default EmployersContent;