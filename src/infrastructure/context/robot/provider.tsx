import { useState } from 'react';
import { Robot } from '../../../features/robots/models/robots';
import { RobotApi } from '../../../features/robots/services/task.api';
import { RobotContext } from './context';
import * as robotData from '..//..//..//features/robots/models/robots';

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<Robot> = robotData.robots;
    const [robots, setRobots] = useState(initialRobots);
    const api = new RobotApi();

    const handleAdd = (newRobot: Robot) => {
        api.createRobot(newRobot).then((robot: Robot) => {
            setRobots([...robots, robot]);
        });
    };

    const handlerEraser = (deletedID: number) => {
        api.deleteRobot(deletedID).then((response) => {
            if (response.ok) {
                setRobots(robots.filter((item) => item.id !== deletedID));
            }
        });
    };
    const handlerHuman = (robot: Robot) => {
        api.updateRobot(robot.id, { isHuman: !robot.isHuman }).then((robot) => {
            robots.map((item) =>
                item.id === robot.id
                    ? { ...item, isHuman: !item.isHuman }
                    : item
            );
        });
    };
    const context = {
        robots,
        handleAdd,
        handlerEraser,
        handlerHuman,
    };
    return (
        <RobotContext.Provider value={context}>
            {children}
        </RobotContext.Provider>
    );
}
