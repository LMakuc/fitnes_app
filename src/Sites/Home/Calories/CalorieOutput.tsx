import React, {useState, useEffect, ChangeEvent} from 'react';

import ClassicButton from '../../../Buttons/ClassicButton';
import DisplayCalendar from '../../Tracking/Form/Calendar';

interface food{
    food: string;
    calories: number;
    protein: number;
    date: Date
}

function CalorieOutput(){
    
    const [date, setDate] = useState(new Date());
    function getNewDate(e: ChangeEvent<HTMLInputElement>){
        setDate(new Date(e.target.value));
    }
    const [dateBool, setDateBool] = useState(true);
    useEffect(()=>
        {
            if(date <= new Date()){
                setDateBool(true);
            } else {
                setDateBool(false);
            } 
        }, [date]
    )

    const stringData = window.localStorage.getItem('savedFood');
    const data: food[] = stringData?JSON.parse(stringData):[];
    const [savedFoods, setSavedFoods] = useState<food[]>(data);
    
    //output of saved foods
    const outputFoods = savedFoods.filter((outputFoods)=>
        new Date(outputFoods.date).getDay() === new Date(date).getDay() &&
        new Date(outputFoods.date).getMonth() === new Date(date).getMonth() &&
        new Date(outputFoods.date).getFullYear() === new Date(date).getFullYear());

    


    const outputTable = (
        <table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Calories</th>
                    <th>Protein</th>
                </tr>
            </thead>
            <tbody>
                {outputFoods.map((food, i) => (
                    <tr key={i}>
                        <td>{food.food}</td>
                        <td>{food.calories}</td>
                        <td>{food.protein}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const output = (
        <div>
            {outputFoods.length > 0 && 
                <div>
                    {outputTable}
                </div>
            }
            {outputFoods.length === 0 && 
                <div>There is no foods for the date {date.toLocaleDateString()}</div>
            }
        </div>
    )

    //deleting all saved foods
    function deleteAllFoods(){
        const updatedSavedFoods = savedFoods.filter((food) => 
            new Date(food.date).getDay() !== new Date(date).getDay() ||
            new Date(food.date).getMonth() !== new Date(date).getMonth() ||
            new Date(food.date).getFullYear() !== new Date(date).getFullYear());
        localStorage.setItem('savedFood', JSON.stringify(updatedSavedFoods));
        setSavedFoods(updatedSavedFoods);
    }
    
    return(
        <div>
            <div className="heading2">Calorie output</div>
                <div>
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
                </div>
                {outputFoods.length !== 0 &&
                    <ClassicButton
                        className="delete-local-storage-button"
                        text="Delete foods"
                        onClick={deleteAllFoods}/>
                }
                {true &&
                    output
                }
            <br/><br/><br/><br/>
        </div>
    );
}

export default CalorieOutput;