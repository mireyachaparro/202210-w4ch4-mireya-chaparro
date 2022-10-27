import { RobotList } from '../../../features/robots/components/robot.list/robot.list';
import { RobotContextProvider } from '../../context/robot/provider';
import { Layout } from '../layout/layout';
import './app.css';

export function App() {
    return (
        <Layout>
            <RobotContextProvider>
                <RobotList></RobotList>
            </RobotContextProvider>
        </Layout>
    );
}
