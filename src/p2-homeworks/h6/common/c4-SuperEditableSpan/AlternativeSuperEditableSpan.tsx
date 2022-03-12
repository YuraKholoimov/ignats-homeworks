import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'

type AlternativeSuperEditableSpanPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type AlternativeSuperEditableSpan = AlternativeSuperEditableSpanPropsType & {}

function AlternativeSuperEditableSpan() {
const [editMode, setEditMode] = useState(true)
    return (
        <div>
            {editMode
                ?  <input />
                : <span>text</span>
            }
        </div>
    )
}

export default AlternativeSuperEditableSpan
