import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { icons } from "../../utils/icons";
import "./index.scss";
import dates_slider from "../../utils/dates_slider.json";
import { useEffect, useState } from "react";

const RightContainer = () => {
    
    const [index,setIndex] = useState(0);
    const [animation, setAnimation] = useState("");
    const [slide, setSlide] = useState(1);

    useEffect(() => {

AutomaticSlide();
    },[slide]);


    const AutomaticSlide = () => {

        setTimeout(() => {
              Next();
        setSlide(slide +1);
        }, 5000); 
    };
    
    const Next = () => {
        setAnimation("next-date-loading");
        setTimeout(() => {
        if(index === dates_slider.length - 1){
        setIndex(0);
        setAnimation("");
        }else{
            setIndex(index +1);
            setAnimation("");
        } 
        }, 500);
     
    };
    const Previous = () => {
         setAnimation("previous-date-loading");

         setTimeout(() => {
             if(index === 0){
        setIndex(dates_slider.length -1);
        setAnimation("");
        }else{
            setIndex(index -1);
            setAnimation("");
        }
         }, 500);
   
    };

    return (
   <Col span={6}>
       <Content className="home-left-side">
             <Row className="date-slider" >
                 <Col span={2}><LeftOutlined  onClick={() => Previous()} style={{cursor:"pointer"}}/></Col>
                 <Col span={20} style={{textAlign:"center"}}>
                     <Text className={`date-slider-item ${animation}`}>{dates_slider[index].date}</Text>
                     </Col><Col span={2}><RightOutlined onClick={() => Next()} style={{cursor:"pointer"}}/>
                     </Col> </Row>
        <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                </Row>
                <Row>
                    <Col>  12 - 1 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
         <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
             <Row>
                <Col span={4}><img src={icons.aprtment}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                
                </Row>
                <Row>
                    <Col>12 - 1 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
         <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                
                </Row>
                <Row>
                    <Col>2 - 3 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
        <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={icons.aprtment}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                
                </Row>
                <Row>
                    <Col>4 - 5 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
        <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={icons.people}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                
                </Row>
                <Row>
                    <Col>5 - 5:30 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
        <Row>
            <Card className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={icons.aprtment}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>General Meeting</Col>
                
                </Row>
                <Row>
                    <Col>5:30 - 6 pm</Col>
              
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row>
       </Content>
       </Col>
    );
};

export default RightContainer;