import { useContext } from 'react';
import { RobotContext } from '../../../../infrastructure/context/robot/context';
import { Robot } from '../../models/robots';

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
            <span>{item.name}</span>
            <br />
            <span>
                <img
                    src={item.img}
                    alt={'Picture of' + item.name}
                    width="100"
                ></img>
            </span>
            <br></br>
            <span>Resistance: {item.resistance}</span>
            <br />
            <span>Speed: {item.speed}</span>
            <br />
            <span>Creation Date:{item.creationdate}</span>
            <br />
            <span className="button" onClick={handleClick}>
                Borrar 🗑️
            </span>
        </li>
    );
}
