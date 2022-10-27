import { useContext } from 'react';
import { RobotContext } from '../../../../infrastructure/context/robot/context';
import { Robot } from '../../models/robot';
import { RobotItem } from '../robot.item/robot.item';

export function RobotList() {
    // const title = 'RobotList component';
    const { robots } = useContext(RobotContext);

    return (
        <>
            <section>
                <h2>Robots</h2>
                {/* <AddRobot></AddRobot> */}
                <ul>
                    {robots.map((item: Robot) => (
                        <RobotItem item={item}></RobotItem>
                    ))}
                </ul>
            </section>
        </>
    );
}
