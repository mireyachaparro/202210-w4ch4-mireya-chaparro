export function AddRobot() {
    return (
        <form>
            <div>
                <input
                    type="text"
                    id="name"
                    placeholder="Robot's name"
                    required
                />
            </div>
            <div>
                <input type="text" id="img" placeholder="Image URL" />
            </div>
            <div>
                <input type="text" id="speed" placeholder="speed" />
            </div>
            <div>
                <input type="text" id="resistance" placeholder="resistance" />
            </div>
            <div>
                <input
                    type="text"
                    id="creationdate"
                    placeholder="Creation Date"
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    );
}
