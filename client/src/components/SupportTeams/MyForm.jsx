import React, { useState, useEffect } from "react";
import MyFormGroup from "../Form/MyFormGroup";

function MyForm({ array, handleSubmit }) {
    console.log('Array: ', { array })
    const [formObject, setFormObject] = useState([])


    useEffect(() => {
        let newArr = array.map((item, index) => {
            return {
                ...item,
                value: '',
                index: index
            }
        })
        setFormObject(newArr)
    }, [array])


    const onChange = (e, index) => {
        // Shows form inputs to consolelog
        console.log('e: ', e, 'index: ', index)
        let value = e.target.value
        let temp = formObject
        temp[index].value = value
        setFormObject(temp)
    }

    const onSubmit = () => {
        console.log('formobject onsubmit: ', formObject)
        handleSubmit(formObject)
    }

    return (
        <div>
            {formObject.map((item, index) =>
                <MyFormGroup id={item.id} label={item.label} value={array[item.index].value}
                    onChange={onChange} index={item.index} key={index} />
            )}
            <button
                type="submit"
                onClick={onSubmit}
            >
                Lähetä
            </button>
        </div>
    )
}

export default MyForm