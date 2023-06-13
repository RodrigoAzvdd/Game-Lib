export default function Button({text, btnFunction }) {
    return (
        <button onClick={btnFunction}>{text}</button>
    )
}