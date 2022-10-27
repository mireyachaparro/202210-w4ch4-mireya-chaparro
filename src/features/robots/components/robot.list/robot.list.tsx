import { useContext } from 'react';
import { RobotContext } from '../../../../infrastructure/context/robot/context';
import { Robot } from '../../models/robots';
// import { AddRobot } from '../add.robot/add.robot';
import { RobotItem } from '../robot.item/robot.item';

export function RobotList() {
    const { robots } = useContext(RobotContext);

    // console.log(robots);

    return (
        <>
            <section>
                <h2>Robots List</h2>
                {/* <AddRobot></AddRobot> */}
                <ul>
                    {robots.map((item: Robot) => (
                        <RobotItem item={item} key={item.id}></RobotItem>
                    ))}
                </ul>
            </section>
        </>
    );
}
