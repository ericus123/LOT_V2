import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { icons } from "../../utils/icons";
import "./index.scss";
import dates_slider from "../../utils/dates_slider.json";
import { useEffect, useState } from "react";
import { GenerateRandomIcon } from "../../helpers/RandomIcon";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const RightContainer = () => {
    
    const [index,setIndex] = useState(0);
    const [animation, setAnimation] = useState("");
    const [slide, setSlide] = useState(1);
 const {people, aprtment} = icons;

 const all_icons = [people, aprtment];
const events = useSelector(state => state.EventReducer.events);

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
       

          {events?.map((item,key) =>  
          <Row key={key}>
            <Card  className="home-cards-right" style={{ width: 300 }}>
            <Row>
                <Col span={4}><img src={GenerateRandomIcon(all_icons)}/></Col>
                <Col span={18}>
                <Row style={{marginTop:"-10px"}}>
                    <Col>{item.title}</Col>
                </Row>
                <Row>
                    <Col> <Moment format={"HH:MM A"} date={item.start}/> - <Moment format={"HH:MM A"} date={item.end}/></Col>
                </Row>
                </Col>
                <Col span={2}><img src={icons.dots}/></Col>
            </Row>
           </Card>
        </Row> )}
       
       </Content>
       </Col>
    );
};

export default RightContainer;