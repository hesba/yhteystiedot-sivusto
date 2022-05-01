import React from "react";

function MyFormGroup({ id, label, value, onChange, index }) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                className="form-control"
                id={id}
                value={value}
                onChange={(e) => onChange(e, index)}
            />
        </div>
    )
}

export default MyFormGroup