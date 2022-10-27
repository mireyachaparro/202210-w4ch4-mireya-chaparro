import { Robot } from '../models/robots';

export class RobotApi {
    url: string;
    constructor() {
        this.url = 'http://localhost:3000/robots';
    }

    // read / get
    getRobot(): Promise<Array<Robot>> {
        return fetch(this.url).then((response) => response.json());
    }

    // create / post
    createRobot(task: Robot): Promise<Robot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }

    // delete
    deleteRobot(id: number): Promise<Response> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        });
    }

    // uptate / patch
    updateRobot(id: number, partialTask: Partial<Robot>): Promise<Robot> {
        return fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialTask),
            headers: {
                'content-type': 'application/json',
            },
        }).then((response) => response.json());
    }
}
