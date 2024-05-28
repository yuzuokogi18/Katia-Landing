import "./Fondo.css";
import data from "../../data/Fondo";
import Fondo from "../atoms/Fondo.Img.jsx";
import FondoText from "../atoms/Fondo.jsx";

function Home() {
    return (
        <div className="Fondo_container">
            {data.items.map(item => {
                return (
                    <Fondo text={item.image}></Fondo>
                );
            })}
            <div className="Fondo_menu">
                {data.items2.map(item2 => {
                    return (
                        <FondoText text={item2.text}></FondoText>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;