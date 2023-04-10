import React, {useState, ChangeEvent, MouseEvent, useEffect} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar';
import ExerciseWeightCommentInput from './Form/ExerciseWeightCommentInput';
import SetRepInput from './Form/SetRepInput';
//import SaveExercise from './SaveExercise';
import Label from '../../Labels/Label';
import OutputLocalStorage from './OutputLocalStorage';
import ClassicButton from '../../Buttons/ClassicButton';
import TimedDisplay from './Form/TimedDisplay';

type Exercise = {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
    comment: string;
}

function Tracking(){

    //console.log(output);

    //date input and validation
    const [date, setDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        setDate(new Date(e.target.value));
        
    }
    const [dateBool, setDateBool] = useState(true);
    useEffect(()=>
        {
            if(date<=new Date()){
                setDateBool(true);
            } else {
                setDateBool(false);
            } 
        }, [date]
    )


    //exercise input and validation
    const [exercise, setExercise] = useState("e.g. Deadlift");
    function inputExercise(e: ChangeEvent<HTMLInputElement>){
        setExercise(e.target.value);
    }
    const [exerciseBool, setExerciseBool]=useState(false);
    useEffect(() =>{ 
        if(exercise === ""){
            setExerciseBool(false);
        } else {
            setExerciseBool(true);
        }
    }, [exercise])


    //set validation and input
    const [set, setSet] = useState(1);
    function incrementSet(e: MouseEvent<HTMLElement>){
        setSet(set+1);
    }
    function decrementSet(e: MouseEvent<HTMLElement>){
        if(set-1 > 0){
            setSet(set-1);
        }
        else{
            setSet(1);
        }
    }
    function inputSet(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setSet(1);
        }
        else{
            setSet(parseInt(e.target.value));
        }
    }


    //rep validation and input
    const [rep, setRep] = useState(1);
    function incrementRep(e: MouseEvent<HTMLElement>){
        setRep(rep+1);
    }
    function decrementRep(e: MouseEvent<HTMLElement>){
        if((rep-1)>0){
            setRep(rep-1);
        }
        else{
            setRep(1);
        }
    }
    function inputRep(e: ChangeEvent<HTMLInputElement>){
        if(e.target.value === ""){
            setRep(1);
        }
        else{
            setRep(parseInt(e.target.value));
        }
    }


    //weight input
    const [weight, setWeight] = useState("e.g. 20kg");
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(e.target.value);
    }


    //comment input
    const [comment, setComment] = useState("/")
    function inputComment(e: ChangeEvent<HTMLInputElement>){
        setComment(e.target.value);
    }

    const [submitted, setSubmitted] = useState(false);

    const stringData = window.localStorage.getItem('savedExercises');
    const data: Exercise[] = stringData?JSON.parse(stringData) : [];
    const [savedExercises, setSaveExercises] = useState<Exercise[]>(data);    

    function saveExercise(){

        if(dateBool && exerciseBool){
            //console.log("Correct input");

            setSubmitted(true);

            const exerciseSave: Exercise = {
                date, exercise, set, rep, weight, comment
            }
            console.log(exerciseSave);
            const newData = [...savedExercises, exerciseSave];
            setSaveExercises(newData);
            window.localStorage.setItem('savedExercises', JSON.stringify(newData));
                
            returnValuesToDefault();
        } 
    }

    function returnValuesToDefault(){
        setDate(new Date());
        setSet(1);
        setRep(1);
        setWeight("0kg");
        setComment("/");
    }

    /*function deleteExercises(){
        localStorage.removeItem('savedExercies');
        setSaveExercises([]);
    }*/

    //Changing between Exercise input and Exercise output
    const [inputBool, setInputBool] = useState(true);
    function openInput(){
        setInputBool(true);
        if(outputBool){
            setOutputBool(false);
        }
    }
    const [outputBool, setOutputBool] = useState(false);
    function openOutput(){
        setOutputBool(true);
        if(inputBool){
            setInputBool(false);
        }
    }

    return(
        <div>
            <div className="tracking-body">
                {/* Exercise input and Exercise output buttons*/}
                <div>
                    <ClassicButton
                        className="input-output-button"
                        type="button"
                        text="Exercise input"
                        onClick={openInput}/>
                    <ClassicButton
                        className="input-output-button"
                        type="button"
                        text="Exercise output"
                        onClick={openOutput}/>
                </div>
                {inputBool && 
                    <div>
                        <div className="tracking-title">Exercise input</div>
                        <div>
                            <div className = "display-date-exercise-weight">
                                {/*Date input*/}
                                <div>
                                    <Label
                                        className="calendar-label"
                                        text="Input date: "/>
                                </div>
                                <div>
                                    <DisplayCalendar
                                        className="calendar"
                                        id="calendar"
                                        type="date"
                                        value={date.toLocaleDateString("en-CA")}
                                        onChange={getNewDate}
                                        />
                                </div>
                                <div className="wrong-input">
                                    {!dateBool && 
                                        <div>
                                            Wrong input. Date must be today or in the past.
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="display-date-exercise-weight">
                                {/*Exercise input*/}
                                <div>
                                    <Label
                                        className="exercise-label"
                                        text="Input exercise: "/>
                                </div>
                                <div>
                                    <ExerciseWeightCommentInput
                                        className="exercise-weight-comment-input"
                                        id="exerciseInput"
                                        type="text"
                                        name="exerciseInput"
                                        value={exercise}
                                        onChange={inputExercise}
                                        />
                                </div>
                                <div className="wrong-input">
                                    {!exerciseBool && 
                                        <div>
                                            Wrong input. You must input exercise name.
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="display-set-rep">
                                {/*Set input*/}
                                <div>
                                    <Label
                                        className="set-label"
                                        text="Input set: "/>
                                </div>
                                <div>
                                    <ClassicButton
                                        className="decrement-set-rep"
                                        text="-"
                                        id="decrement-set"
                                        onClick={decrementSet}/>
                                    <SetRepInput
                                        className="set-rep-input"
                                        id="setInput"
                                        type="text"
                                        name="setInput"
                                        value={set}
                                        onChange={inputSet}/>
                                    <ClassicButton
                                        className="increment-set-rep"
                                        text="+"
                                        id="increment-set"
                                        onClick={incrementSet}/>
                                </div>
                            </div>
                            <div className="display-set-rep">
                                {/*Rep input*/}
                                <div>
                                    <Label
                                        className="rep-label"
                                        text="Input duration/reps: "/>
                                </div>
                                <div>
                                    <ClassicButton
                                        className="decrement-set-rep"
                                        text="-"
                                        id="decrement-rep"
                                        onClick={decrementRep}/>
                                    <SetRepInput
                                        className="set-rep-input"
                                        id="repInput"
                                        type="text"
                                        name="repInput"
                                        value={rep}
                                        onChange = {inputRep}/>
                                    <ClassicButton
                                        className="increment-set-rep"
                                        text="+"
                                        id="increment-rep"
                                        onClick={incrementRep}/>
                                </div>
                            </div>
                            <div className="display-date-exercise-weight">
                                {/*Weight input*/}
                                <div>
                                    <Label  
                                        className="weight-label"
                                        text="Weight: "/>
                                </div>
                                <div>
                                    <ExerciseWeightCommentInput
                                        className="exercise-weight-comment-input"
                                        id="weight-input"
                                        type="text"
                                        name="weightInput"
                                        value={weight}
                                        onChange={inputWeight}/>
                                </div>
                            </div>
                            <div className="display-date-exercise-weight">
                                {/*Comment input*/}
                                <div>
                                    <Label
                                        className="comment-label"
                                        text="Comment (optional):"/>
                                </div>
                                <div>
                                    <ExerciseWeightCommentInput
                                        className="exercise-weight-comment-input"
                                        id="commentInput"
                                        type="text"
                                        name="commentInput"
                                        value={comment}
                                        onChange={inputComment}/>
                                </div>
                            </div>
                        </div>
                        {/*Exercise submittion*/}
                        <ClassicButton
                            className="save-exercise-button"
                            type="button"
                            text="Submit exercise"
                            onClick={saveExercise}/>
                        {submitted && 
                            <TimedDisplay
                                className={"submit-text-display"}
                                text={"Exercise succesfully submited"}
                                time={3000}
                                show={submitted}
                                setShow={setSubmitted}/>
                        }
                        {/*<SaveExercise savedExercises={savedExercises}/>*/}
                    </div>
                }
                {outputBool && 
                    <div>
                        {/*<div>
                            <ClassicButton
                                className="delete-local-storage-button"
                                type="button"
                                text="Delete all exercises"
                                onClick={deleteExercises}/>
                        </div>*/}
                        
                        <OutputLocalStorage
                            savedExercises={savedExercises}/>
                    </div>
                }     
            </div>
        </div>
    );
}

export default Tracking;