import { Content } from "antd/lib/layout/layout";
import { Col, Row } from "antd";
import RightContainer from "../../components/dashboard/RightContainer";
import ReportTable from "../../components/dashboard/ReportTable";
import DatePickerComponent from "../../components/dashboard/DatePicker";

const ReportsPage = () => {

    return (
  <Content  >
       <Row className="dashboard-div" style={{marginTop:"2%"}}>
           <Col className="reports-page" span={18}>
      <Row>
           <Col  className="dash-title">
           Stundents rate
           </Col>
             <Col  className="date-from">
               <Row className="datepicker-wrapper">
                 <Col  span={10}><h1 className="from-to">From </h1></Col>
                 <Col span={14}><DatePickerComponent/></Col>
               </Row>
             </Col>
              <Col className="date-to">
               <Row className="datepicker-wrapper">
                 <Col className="from-to"><h1 className="from-to">To</h1> </Col>
                 <Col><DatePickerComponent/></Col>
               </Row>
             </Col>                
       </Row>
  
  <ReportTable/>
     </Col>
          <RightContainer/>
       </Row>
      
   </Content>

    );
};

export default ReportsPage;