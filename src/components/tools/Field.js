import './Field.scss'

export default function Field({ type, name, value, onChange, placeholder }) {
    return <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className="field"/>
}