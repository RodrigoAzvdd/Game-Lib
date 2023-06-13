import LinkBtn from "./LinkBtn";

export default function Footer() {
    return (
        <div className="footer" style={{
            borderTop: "2px solid #1b1e23",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            height: "10rem"
        }}>
            <LinkBtn href={"https://github.com/RodrigoAzvdd"} text={"Github"} target={"_blank"} />
            <LinkBtn href={"#"} text={"© RodAzvdd"} target={""} />
            <LinkBtn href={"https://www.linkedin.com/in/rodrigoazvd/"} text={"LinkedIn"} target={"_blank"} />
        </div>
    )
}