import { useContext } from 'react';
import { RobotContext } from '../../../../infrastructure/context/robot/context';
import { Robot } from '../../models/robot';

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser, handlerHuman } = useContext(RobotContext);

    const handleClick = () => {
        handlerEraser(item.id);
    };

    const handleChange = () => {
        handlerHuman(item);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={item.isHuman}
                onChange={handleChange}
            />
            <span>{item.id}</span> -<span>{item.name}</span>
            <span className="button" onClick={handleClick}>
                🗑️
            </span>
        </li>
    );
}
