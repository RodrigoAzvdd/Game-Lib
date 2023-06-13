import Button from "./Button";
import CoverImg from "./CoverImg";

export default function Game({id, title, cover, btnFunction}) {
    return (
        <div key={id} style={{ width: "22rem", display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
                <h2>Title: {title}</h2>
                <Button btnFunction={() => btnFunction(id)} text={"Remover"} />
                <CoverImg cover={ cover } />
            </div>
        </div>
    )
}