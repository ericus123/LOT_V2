import { Content } from "antd/lib/layout/layout";
import { Card, Col, Row ,Typography } from "antd";
import "./index.scss";
import Text from "antd/lib/typography/Text";
import RightContainer from "../../components/dashboard/RightContainer";
import HomeChart from "../../components/diagrams/Chart";
import HomeGraph from "../../components/diagrams/HomeGraph";


const { Title } = Typography;

const HomePage = () => {
    return (
<Content>
     

   <Row className="dashboard-div" style={{justifyContent:"center"}}>

       <Col span={18}>
       <Row>
           <Title className="home-title" level={2}>Welcome to <b>Lot,</b></Title>
       </Row>
       <Row className="chart-wrapper">
       <HomeGraph/>
       </Row>
       <Row >
           <Col span={7}><Card className="home-cards" style={{ width: 220 }}>
              <Row> <Title className="home-card-title">
               EMPLOYERS
              </Title></Row>
              <Row> <Text className="home-card-number">36</Text></Row>
              <Row><Text className="home-card-desc">Employers finds their employees through us</Text></Row>
            </Card></Col>
       <Col span={7}><Card className="home-cards" style={{ width: 220 }}>
          <Row> <Title className="home-card-title">
               JOBS
              </Title></Row>
              <Row> <Text className="home-card-number">3,690</Text></Row>
              <Row><Text className="home-card-desc">Employees have been hired by our partners</Text></Row>
           </Card></Col>
       <Col span={7}><Card className="home-cards" style={{ width: 220 }}>
           <Row> <Title className="home-card-title">
               ONGOING PROJECTS
              </Title></Row>
              <Row> <Text className="home-card-number">36</Text></Row>
              <Row><Text className="home-card-desc">Employees are training to find suitable jobs</Text></Row>
           </Card></Col>
       </Row>
       <Row className="home-chart-wrapper">
      <HomeChart/>
       </Row>
       </Col>
    <RightContainer/>
       
    </Row>
    
          
</Content>
    );
};
export default HomePage;