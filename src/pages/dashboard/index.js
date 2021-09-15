import { Content } from "antd/lib/layout/layout";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Typography } from "antd";
import "./index.scss";

const { Title } = Typography;

const DashboardPage = () => {
    return (
        <DashboardLayout>
<Content>
        <Title className="home-title" level={2}>Welcome to <b>Lot,</b></Title>
</Content>
        </DashboardLayout>
    );
};
export default DashboardPage;