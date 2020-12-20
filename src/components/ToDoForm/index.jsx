import React, { useState } from 'react';
import PropType from 'prop-types'

const ToDoForm = (props) => {
    const [value, setValue] = useState('')
    const { onSubmitHandle } = props

    const handleOnInput = e => {
        setValue(e.target.value)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if(!onSubmitHandle) return;

        onSubmitHandle({ title: value })

        setValue('')
    }

    return ( 
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={value} onChange={handleOnInput}/>
        </form>
    );
}

ToDoForm.propType = {
    onSubmitHandle: PropType.func
}

ToDoForm.defaultProps = {
    onSubmitHandle: null
}
    
export default ToDoForm;