import { Col, Row } from "antd";
import { Table } from "antd";
import Text from "antd/lib/typography/Text";
import "../../styles/sass/project_theme.scss";
import { icons } from "../../utils/icons";
import "./index.scss";


const ReportTable = () => {
 

const columns = [
  {
    title: "STUDENTS",
    dataIndex: "student",
    key: "student",
    render: text => <Row gutter={[10,10]}><Col><Text className="txt_font_weight_700">{text.num}</Text></Col>
    <Col><Row > <Text className="txt_blue"> {text.name}</Text></Row>
    <Row><Text className="txt_light_gray" style={{textAlign: "left !important",
letterSpacing: "0.24px !important"}}>{text.email}</Text></Row></Col></Row>,
  },
  {
    title: "ACOMPANIES",
    dataIndex: "company",
    key: "company",
    render: text => <Row><Col><img src={icons.circle}/>&nbsp; &nbsp;</Col><Col><Text className="txt_blue font_fam_poppins">{text}</Text></Col></Row> 
  },
  {
    title: "DATE JOINED",
    dataIndex: "date_joined",
    key: "date_joined",
    render: text => <Text className="date_joined txt_light_gray">{text}</Text>
  },
  {
    title: "SERVICE FEE",
    key: "service_fee",
    dataIndex: "service_fee",
    render: text => <Text className="txt_blue txt_font_weight_700">{text}</Text>
  },
];

let data = new Array();

for (let i = 0; i < 10; i++) {
 data.push(
     {
    key: `${i}}`,
    student: { num: i + 1, name:"Kamikazi Lilian",email:"kamikaziLili@gmail.com"},
    company: "MTN Rwanda",
    date_joined: "1st JUNE 2021",
    service_fee: "PAID",
  }
 );
}


return (
  <Table className="reports-table" columns={columns} dataSource={data} pagination={false} />  
);
};
export default ReportTable;


