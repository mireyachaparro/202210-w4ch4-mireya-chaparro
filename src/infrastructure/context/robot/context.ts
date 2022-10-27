import { createContext } from 'react';
import { Robot } from '../../../features/robots/models/robots';

const initialContext: {
    robots: Array<Robot>;
    handleAdd: (newRobot: Robot) => void;
    handlerEraser: (deletedID: number) => void;
    handlerHuman: (robot: Robot) => void;
} = {
    robots: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    handlerHuman: () => undefined,
};

export const RobotContext = createContext(initialContext);
