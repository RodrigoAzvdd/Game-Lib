export default function TextInput({ labelText, type, name, id, value, iptFunction }) {
    return (
        <div>
            <label htmlFor={name}>{labelText}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => iptFunction(e.target.value)}
            />
        </div>
    )
}