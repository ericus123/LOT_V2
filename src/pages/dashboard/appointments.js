import { Content } from "antd/lib/layout/layout";
import { Card, Col, Row, Typography } from "antd";
const { Title } = Typography;
import "./index.scss";
import RightContainer from "../../components/dashboard/RightContainer";
import { icons } from "../../utils/icons";
import CalendarComponent from "../../components/dashboard/Calendar";

import "./index.scss";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import { GenerateRandomIcon } from "../../helpers/RandomIcon";


const AppointmentsPage = () => {

    const events = useSelector(state => state.EventReducer.events);
     const {people, aprtment} = icons;

 const all_icons = [people, aprtment];


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
          {events.slice(0,3).map((value,key) =>   <Col key={key}>
            <Card className="home-cards-right-big" style={{ width: 225 }}>
            <Row gutter={[5,5]}>
                <Col span={4}><img src={GenerateRandomIcon(all_icons)}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col className="event-title">{value.title}</Col>
                </Row>
                <Row>
                    <Col className="event-time"> <Moment className="june-events-time" format={"HH:MM A"} date={value.start}/> - <Moment  className="june-events-time"  format={"HH:MM A"} date={value.end}/></Col>  
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
            </Col>)}
        </Row>
            </Col>
            <RightContainer/>
          
        </Row>
</Content>
    );
};
export default AppointmentsPage;