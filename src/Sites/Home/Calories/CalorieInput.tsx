import React, {useState, ChangeEvent, useEffect} from 'react';

import Label from '../../../Labels/Label';
import CalorieFoodInput from './CalorieFoodInput';
import ClassicButton from '../../../Buttons/ClassicButton';
import TimedDisplay from '../../Tracking/Form/TimedDisplay';



import DisplayCalendar from '../../Tracking/Form/Calendar';



interface food{
    food: string;
    calories: number;
    protein: number;
    date: Date
}

function CalorieInput(){
    const [date, setDate]=useState(new Date());
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

    const [food, setFood] = useState("e.g. Pasta");
    const [foodBool, setFoodBool] = useState(false);
    function inputFood(e: ChangeEvent<HTMLInputElement>){
        setFood(e.target.value);
    }
    useEffect(()=>
        {
            if(food===""){
                setFoodBool(false);
            }else{
                setFoodBool(true);
            }
        }, [food]
    )

    //calorie input and validation
    const [calories, setCalories] = useState(1);
    const [caloriesBool, setCaloriesBool] = useState(false);
    function inputCalories(e: ChangeEvent<HTMLInputElement>){
        setCalories(parseInt(e.target.value));
    }
    useEffect(()=>{
        if(calories === 0 || calories < 0 || isNaN(calories)){
            setCaloriesBool(false);
        }else{
            setCaloriesBool(true);
        }
    }, [calories])

    const [protein, setProtein] = useState(1);
    const [proteinBool, setProteinBool] = useState(false);
    function inputProtein(e: ChangeEvent<HTMLInputElement>){
        setProtein(parseInt(e.target.value));
    }
    useEffect(()=>{
        if(protein === 0 || protein < 0 || isNaN(protein)){
            setProteinBool(false);
        }else{
            setProteinBool(true);
        }
    }, [protein])

    const stringData = window.localStorage.getItem('savedFood');
    const data: food[] = stringData?JSON.parse(stringData):[];
    const [savedFoods, setSavedFoods] = useState<food[]>(data);

    //saving foods to local storage
    const [submitted, setSubmitted] = useState(false);
    function submitCalorieInput() {

        if(foodBool && caloriesBool && proteinBool){
            setSubmitted(true);

            const foodSave: food={
                food, calories, protein, date
            }
            console.log(foodSave);

            const newData = [...savedFoods, foodSave];
            setSavedFoods(newData);
            window.localStorage.setItem('savedFood', JSON.stringify(newData));

            returnToDefault();
        }
    }

    function returnToDefault(){
        setFood("e.g. Pasta");
        setCalories(1);
        setProtein(1);
    }

    return(
        <div>
            <div className="heading2">Calorie input</div>
            <Label
                className="calorie-counter-label"
                text="Input date:"/>
            <br/>
            <DisplayCalendar
                className="calorie-counter-input"
                id="calorieCalendar"
                type="date"
                value={date.toLocaleDateString("en-CA")}
                onChange={getNewDate}/>
            <div className="wrong-input">
                {!dateBool &&
                    <div>Wrong input. Date must be today or in the past.</div>
                }
            </div>

            <Label
                className="calorie-counter-label"
                text="Input the food that you ate:"/>
            <CalorieFoodInput
                className="calorie-counter-input"
                type="text"
                name="food"
                value={food}
                onChange={inputFood}/>
            <div className="incorrect-input">
                {!foodBool && 
                    <div>The input for food is incorrect.</div>
                }
            </div>
            <Label
                className="calorie-counter-label"
                text="Input the amount of calories the food has had:"/>
            <CalorieFoodInput
                className="calorie-counter-input"
                type="number"
                name="calories"
                value={calories}
                onChange={inputCalories}/>
            <div className="incorrect-input">
                {!caloriesBool &&
                    <div>The input for calories is incorrect.</div>
                }
            </div>
            <Label
                className="calorie-counter-label"
                text="Input the amount of protein in the food:"/>
            <CalorieFoodInput
                className="calorie-counter-input"
                type="number"
                name="protein"
                value={protein}
                onChange={inputProtein}/>
            <div className="incorrect-input">
                {!proteinBool &&
                    <div>The input for protein is incorrect.</div>
                }
            </div>

            <ClassicButton
                className="calorie-counter-submit-button"
                text="Submit"
                onClick={()=>{
                    //setDate(new Date());
                    submitCalorieInput();
                }}/>
            {submitted && 
                <TimedDisplay
                    className={"submit-text-display"}
                    text={"Food succesfully submited"}
                    time={3000}
                    show={submitted}
                    setShow={setSubmitted}/>
            }
        </div>
    );
}

export default CalorieInput;