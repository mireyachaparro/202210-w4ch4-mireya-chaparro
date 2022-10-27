import { SyntheticEvent, useContext, useState } from 'react';
import { RobotContext } from '../../../../infrastructure/context/robot/context';
import { Robot } from '../../models/robots';

export function AddRobot() {
    const { handleAdd } = useContext(RobotContext);
    const initialForm: Robot = {
        id: 0,
        name: '',
        img: '',
        resistance: 0,
        speed: 0,
        creationdate: '',
        isHuman: false,
    };

    const [form, setform] = useState(initialForm);

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setform({
            ...form,
            [element.name]: element.value,
        });
    };

    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(form);
    };

    return (
        <form>
            <div>
                <input
                    type="text"
                    id="name"
                    placeholder="Robot's name"
                    required
                    onInput={handleForm}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="img"
                    placeholder="Image URL"
                    onInput={handleForm}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="speed"
                    placeholder="speed"
                    onInput={handleForm}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="resistance"
                    placeholder="resistance"
                    onInput={handleForm}
                />
            </div>
            <div>
                <input
                    type="text"
                    id="creationdate"
                    placeholder="Creation Date"
                    onInput={handleForm}
                />
            </div>
            <button type="submit" onClick={handleClick}>
                Guardar
            </button>
        </form>
    );
}
