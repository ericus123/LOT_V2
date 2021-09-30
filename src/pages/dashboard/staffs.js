import { Button, Col,  Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeesContent from "../../components/dashboard/EmployeesContent";
import EmployersContent from "../../components/dashboard/EmployersContent";
import RightContainer from "../../components/dashboard/RightContainer";
import AddEmployeeModel from "../../components/models/AddEmployee";
import AddEmployerModel from "../../components/models/AddEmployer";
import { getCompaniesRequest, getEmployeesRequest } from "../../redux/actions/staffs";
import "./index.scss";


const StaffsPage  = () => {

    const [tab,setTab] = useState("employers");
    const [visible, setVisible ] = useState(false);

const showModal = () => {
     setVisible(true);
};
const hideModal = () => {
     setVisible(false);
};

  const companyCreated = useSelector(state => state.StaffsReducer.companyCreated);
  const employeeCreated = useSelector(state => state.StaffsReducer.employeeCreated);
const dispatch = useDispatch();

  useEffect(() => {
   if(companyCreated, employeeCreated){
     hideModal();
     dispatch(getCompaniesRequest());
     dispatch(getEmployeesRequest());
   }
  },[companyCreated, employeeCreated]);
return (
   <Content >
       <AddEmployerModel visible={visible && tab === "employers"} showModal={showModal} hideModal={hideModal}/>
         <AddEmployeeModel visible={visible && tab === "employees"} showModal={showModal} hideModal={hideModal}/>
       <Row className="dashboard-div" style={{marginTop:"2%"}}>
           <Col span={18}>
       
         <Row gutter={[10,10]} >
           <Col span={8}>
           <Content className="employment-toogle">
               <Row gutter={[1,1]}>
                <Col span={12}><Text onClick={() => setTab("employers")} className={`${tab === "employers" ?  "employment-active": "employers-tab"}`}>Employers</Text></Col>
                <Col span={12}><Text onClick={() => setTab("employees")} className={`${tab === "employees" ?  "employment-active": "employees-tab "}`}>Employees</Text></Col>
               </Row>
           </Content>
           </Col>
             <Col className="staff-add-col" span={5}><Button className="add-btn" onClick={showModal}>ADD</Button></Col>    
       </Row>
       {
           tab === "employees" ? <EmployeesContent/> : <EmployersContent/> 
       }
       
     
     </Col>
          <RightContainer/>
       </Row>
      
   </Content>
    );
};

export default StaffsPage;