import React, {ChangeEvent} from 'react';

type Props = {
    className: string;
    type: string;
    id: string;
    value: string;
    name: string;
    
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ExerciseWeightCommentInput({className, type, name, id, value, onChange, onBlur}:Props){
    return(
        <input 
            className={className}
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}/>
    );
}

export default ExerciseWeightCommentInput;