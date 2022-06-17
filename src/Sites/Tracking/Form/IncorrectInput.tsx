import React from 'react';

type Props = {
    exerciseBool: boolean;
    setBool: boolean;
    repBool: boolean;
}

function IncorrectInput({exerciseBool, setBool, repBool}:Props){
    return(
        <div>
            {!exerciseBool && 
                <p>Incorrect input at exercise.</p>
            }
            {!setBool &&
                <p>Incorrect input at set. </p>
            }
            {!repBool && 
                <p>Incorrect input at duration/reps. </p>
            }
        </div>
    );
}

export default IncorrectInput;

/*
    return(
        <div>
            {!exerciseBool && 
                <p>Incorrect input at exercise.</p>
            }
            {!setBool &&
                <p>Incorrect input at set. </p>
            }
            {!repBool && 
                <p>Incorrect input at duration/reps. </p>
            }
        </div>
    );
*/