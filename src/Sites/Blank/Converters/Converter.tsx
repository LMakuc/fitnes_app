import React, {useState} from 'react';

import Label from '../../../Labels/Label';
import ClassicButton from '../../../Buttons/ClassicButton';

function Converter(){

    const [unit, setUnit] = useState(false);
    function changeUnit(){
        setUnit(!unit);
        //console.log(unit);
    }
    

    return(
        <div>
            <Label
                className="weight-convert-input-label"
                text="Convert weight: "/>
            <ClassicButton
                className="weight-convert-unit-button"
                onClick={changeUnit}
                text="change unit"/>
        </div>
    );
}

export default Converter;