export function Select({ formName, title, name, labels, values }) {
    return (
        <div className="input-group">
            <label htmlFor={formName}>{title}</label>
            <select name={name} id={name}>
                {
                    labels.map((label, index) => (
                        <option key={index} value={values[index]}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}