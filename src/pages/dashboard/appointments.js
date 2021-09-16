import { Content } from "antd/lib/layout/layout";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;
import "./index.scss";
import RightContainer from "../../components/dashboard/RightContainer";
import { icons } from "../../utils/icons";
import CalendarComponent from "../../components/dashboard/Calendar";
import "./index.scss";

const AppointmentsPage = () => {
    return (
         <Content>
          
   <Row className="dashboard-div"justify>
            <Col span={18}>
       
            <Row>
                     <Title className="home-title" level={2}>Calendar</Title>
            </Row>
            <Row className="calendar-wrapper">
            <CalendarComponent/>
            </Row>
            <Row><Title className="june-main-events">June main Events</Title></Row>
            <Row gutter={[10,10]}>
            <Col>
            <Card className="home-cards-right" style={{ width: 225 }}>
            <Row gutter={[5,5]}>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col className="event-title">General Meeting</Col>
                </Row>
                <Row>
                    <Col className="event-time">  12 - 1 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
            </Col>
            <Col>
            <Card className="home-cards-right" style={{ width: 225 }}>
            <Row>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col className="event-title">General Meeting</Col>
                
                </Row>
                <Row>
                    <Col className="event-time">  12 - 1 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
           </Col>
            <Col>
            <Card className="home-cards-right" style={{ width: 225 }}>
            <Row>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col className="event-title">General Meeting</Col>
                
                </Row>
                <Row>
                    <Col  className="event-time">  12 - 1 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
            </Col>
        </Row>
            </Col>
            <RightContainer/>
          
        </Row>
</Content>
    );
};
export default AppointmentsPage;