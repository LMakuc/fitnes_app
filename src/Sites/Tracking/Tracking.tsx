import React, {useState, ChangeEvent, MouseEvent} from 'react';

import './Tracking.css';

import DisplayCalendar from './Form/Calendar';
import ExerciseWeightCommentInput from './Form/ExerciseWeightCommentInput';
import SetRepInput from './Form/SetRepInput';
import SaveExercise from './SaveExercise';
import Label from '../../Labels/Label';
import OutputLocalStorage from './OutputLocalStorage';
import ClassicButton from '../../Buttons/ClassicButton';

type Exercise = {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
    comment: string;
}

function Tracking(){
    
    const [date, setDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        validateDateInput();
        setDate(new Date(e.target.value));
    }
    //console.log(date);

    const [exercise, setExercise] = useState("");
    function inputExercise(e: ChangeEvent<HTMLInputElement>){
        setExercise(e.target.value);
    }

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

    const [weight, setWeight] = useState("0kg");
    function inputWeight(e: ChangeEvent<HTMLInputElement>){
        setWeight(e.target.value);
    }

    const [comment, setComment] = useState("No comment")
    function inputComment(e: ChangeEvent<HTMLInputElement>){
        setComment(e.target.value);
    }

    const [submitted, setSubmitted] = useState(false);
    function changeSubmittedBool(val: boolean){
        setSubmitted(val);
    }
    const [dateBool, setDateBool] = useState(true);
    function validateDateInput(){ 
        if(new Date(date)>new Date()){
            setDateBool(true);
        } else {
            setDateBool(false);
        }
        console.log("Date first: " + dateBool);
    }

    const [exerciseBool, setExerciseBool]=useState(false);
    function validateExeciseInput(e: ChangeEvent<HTMLInputElement>){
        setExerciseBool(e.target.value !== "");
    }

    function saveExercise(){
        console.log("Submit button clicked.")

        changeSubmittedBool(true);

        if(dateBool && exerciseBool){
            console.log("Correct input");

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

    const stringData = window.localStorage.getItem('savedExercises');
    const data: Exercise[] = stringData?JSON.parse(stringData) : [];
    const [savedExercises, setSaveExercises] = useState<Exercise[]>(data);

    function returnValuesToDefault(){
        setDate(new Date());
        setSet(1);
        setRep(1);
        setWeight("0kg");
        setComment("No comment")
    }

    function deleteExercises(){
        localStorage.removeItem('savedExercies');
        setSaveExercises([]);
    }
    

    console.log("Exercise bool: " + exerciseBool);
    console.log("Date bool: " + dateBool);
    console.log("Submitted: " + submitted);


    const [inputBool, setInputBool] = useState(true);                       //odpiranje in hkrati zapiranje output in input exercisa
    function openInput(){
        closeOutput();
    }
    const [outputBool, setOutputBool] = useState(false);
    function openOutput(){
        closeInput();
    }
    function closeInput(){
        setInputBool(false);
        setOutputBool(true);
    }
    function closeOutput(){
        setOutputBool(false);
        setInputBool(true);
    }

    return(
        <div className="tracking-body">
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
                                    onChange={getNewDate}/>
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
                                    onBlur={validateExeciseInput}/>
                            </div>
                            <div className="wrong-input">
                                {!exerciseBool && submitted &&
                                    <div>
                                        Wrong input. You must input exercise name.
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="display-set-rep">
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
                    <ClassicButton
                        className="save-exercise-button"
                        type="button"
                        text="Submit exercise"
                        onClick={saveExercise}/>
                    <SaveExercise
                        savedExercises={savedExercises}/>
                        </div>
            }
            {outputBool && 
                <div>
                    <div>
                        <ClassicButton
                            className="delete-local-storage-button"
                            type="button"
                            text="Delete exercises"
                            onClick={deleteExercises}/>
                    </div>
                    <OutputLocalStorage
                        savedExercises={savedExercises}/>
                </div>
            }     
        </div>
    );
}

export default Tracking;


