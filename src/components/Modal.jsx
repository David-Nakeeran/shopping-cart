import { useContext } from "react";
import { AppContext } from "../App";

export default function Modal() {
    const {setIsModalOpen} = useContext(AppContext);

    return (
        <div>
            <button onClick={() => setIsModalOpen(false)}>blah</button>
            <p>Blah blah</p>
        </div>
    )
}