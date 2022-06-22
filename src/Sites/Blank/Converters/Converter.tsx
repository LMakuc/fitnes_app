import React, {useState} from 'react';

import Label from '../../../Labels/Label';
import WeightChangeButton from '../../../Buttons/WeightConvertButton';

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
            <WeightChangeButton
                className="weight-convert-unit-button"
                onClick={changeUnit}
                text="change unit"/>
        </div>
    );
}

export default Converter;