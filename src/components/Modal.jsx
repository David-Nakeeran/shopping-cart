import { useContext } from "react";
import { AppContext } from "../App";

export default function Modal() {
    const {setIsModalOpen, cart} = useContext(AppContext);

    return (
        <div>
            <button onClick={() => setIsModalOpen(false)}>X</button>
            <p>Blah blah</p>
        </div>
    )
}