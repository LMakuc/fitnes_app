import React, {useState, ChangeEvent, useEffect} from 'react';

import Label from '../../../Labels/Label';
import CalorieFoodInput from './CalorieFoodInput';
import ClassicButton from '../../../Buttons/ClassicButton';
import TimedDisplay from '../../Tracking/Form/TimedDisplay';

type food={
    food: string;
    calories: string;
    date: Date
}

function CalorieCounter (){
    
    const [counterBool, setCounterBool] = useState(false);
    function showHideCounter(){
        setCounterBool(!counterBool);
    }

    //food input and valaidation
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
    const [calories, setCalories] = useState("e.g. 514");
    const [caloriesBool, setCaloriesBool] = useState(false);
    function inputCalories(e: ChangeEvent<HTMLInputElement>){
        setCalories(e.target.value);
    }
    useEffect(()=>
        {
            if(calories==="" || calories==="0"){
                setCaloriesBool(false);
            }else{
                setCaloriesBool(true);
            }
        }, [calories]
    )

    const [date, setDate]=useState(new Date());

    const stringData = window.localStorage.getItem('savedFood');
    const data: food[] = stringData?JSON.parse(stringData):[];
    const [savedFoods, setSavedFoods] = useState<food[]>(data);

    //saving foods to local storage
    const [submitted, setSubmitted] = useState(false);
    function submitCalorieInput() {

        if(foodBool && caloriesBool){
            setSubmitted(true);

            const foodSave: food={
                food, calories, date
            }
            console.log(foodSave);

            const newData = [...savedFoods, foodSave];
            setSavedFoods(newData);
            window.localStorage.setItem('savedFood', JSON.stringify(newData));
        }
    }
    
    //output of saved foods
    const outputFoods = savedFoods.map((outputFoods, i)=>
        <div key={i} style={{marginBottom: "1rem"}}>
            <div>Food: {outputFoods.food}</div>
            <div>Calories: {outputFoods.calories}</div>
            <div>Date: {new Date(outputFoods.date).toLocaleDateString()}</div>
        </div>
    )

    //deleting all saved foods
    function deleteAllFoods(){
        localStorage.removeItem('savedFood');
        setSavedFoods([]);
    }

    return(
        <div>
            {!counterBool && 
                <div style={{marginBottom: "1rem"}}>
                    <ClassicButton
                        className="show-hide-calorie-counter-button"
                        text="Show Calorie Input"
                        onClick={showHideCounter}/>
                </div>
            }
            {counterBool &&
                <div>
                    <div style={{marginBottom: "1rem"}}>
                        <ClassicButton
                            className="show-hide-calorie-counter-button"
                            text="Hide Calorie Input"
                            onClick={showHideCounter}/>
                    </div>
                    <div>
                        <Label
                            className="calorie-counter-label"
                            text="Input the food that you ate:"/>
                    </div>
                    <div>
                        <CalorieFoodInput
                            className="calorie-counter-input"
                            type="text"
                            name="food"
                            value={food}
                            onChange={inputFood}/>
                    </div>
                    <div className="incorrect-input">
                        {!foodBool && 
                            <div>The input for food is incorrect.</div>
                        }
                    </div>
                    <div>
                        <Label
                            className="calorie-counter-label"
                            text="Input the amount of calories the food has had:"/>
                    </div>
                    <div>
                        <CalorieFoodInput
                            className="calorie-counter-input"
                            type="text"
                            name="calories"
                            value={calories}
                            onChange={inputCalories}/>
                    </div>
                    <div className="incorrect-input">
                        {!caloriesBool &&
                            <div>The input for calories is incorrect.</div>
                        }
                    </div>
                    <div>
                        <ClassicButton
                            className="calorie-counter-submit-button"
                            text="Submit"
                            onClick={()=>{
                                setDate(new Date());
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
                </div>
            }
            <div style={{marginTop: "1rem", marginBottom: "1rem"}}>Calorie output</div>
            <div>
                <ClassicButton
                    className="delete-local-storage-button"
                    text="Delete all foods"
                    onClick={deleteAllFoods}/>
            </div>
            {true && 
                outputFoods
            }
        </div>
    );
}

export default CalorieCounter;