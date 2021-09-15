import { Content } from "antd/lib/layout/layout";
import { Typography } from "antd";
const { Title } = Typography;

import "./index.scss";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const AppointmentsPage = () => {
    return (
         <DashboardLayout>
         <Content>
        <Title className="home-title" level={2}>Calendar</Title>
</Content>
        </DashboardLayout>
    );
};
export default AppointmentsPage;