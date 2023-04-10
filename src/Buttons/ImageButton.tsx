import React, {MouseEvent} from 'react';

import './Buttons.css';

import home_icon from '../Assets/Icons/icon_home.png';
import exercise_icon from '../Assets/Icons/icon_exercises.png';
import tracking_icon from '../Assets/Icons/icon_tracking.png';
import routines_icon from '../Assets/Icons/icon_routines.png';
import arrowUp from '../Assets/arrow_up2.png';
import arrowDown from '../Assets/arrow_down2.png';
import plus from '../Assets/plus.png';

type Props = {
    className: string;
    id?: string;
    text: string;
    type?: any;
    altText: string
    imageClass?: string

    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

function ImageButton({className, text, type, id, altText, imageClass, onClick}:Props){
    if(id === "home"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <img src={home_icon} alt={altText} className={imageClass}/>
                    <br/>{text}
            </button>
        );
    } else if(id === "exercises"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <img src={exercise_icon} alt={altText} className={imageClass}/>
                    <br/>{text}
            </button>
        );
    } else if(id === "tracking"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <img src={tracking_icon} alt={altText} className={imageClass} style={{width: '2rem', height: '2rem'}}/>
                    <br/>{text}
            </button>
        );
    } else if(id === "arrowUp"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <span style={{marginLeft: '3rem'}}>{text}</span>
                    <img src={arrowUp} alt={altText} style={{width: '2rem', height: '2rem', float: 'right', marginRight: '1rem'}}/>
            </button>
        );
    } else if(id === "arrowDown"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <span style={{marginLeft: '3rem'}}>{text}</span>
                    <img src={arrowDown} alt={altText} style={{width: '2rem', height: '2rem', float: 'right', marginRight: '1rem'}}/>
            </button>
        );
    } else if(id === 'routines'){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <img src={routines_icon} alt={altText} className={imageClass}/>
                    <br/>{text}
            </button>
        );
    } else if(id === "addRoutine"){
        return(
            <button
                className={className}
                type={type}
                id={id}
                onClick={onClick}>
                    <span style={{marginLeft: '3rem', fontWeight: 'bold', fontSize: '1.5rem'}}>{text}</span>
                    <img src={plus} alt={altText} style={{width: '2rem', height: '2rem', float: 'right', marginRight: '1rem'}}/>
            </button>
        );
    }
    else{ 
        return(
            <div>Error while uploading a picture or text to a button.</div>
        );
    }
}

export default ImageButton;