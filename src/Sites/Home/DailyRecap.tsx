import React, {useState, useEffect} from 'react';

interface Exercise {
    date: Date;
    exercise: string;
    rep: number;
    set: number;
    weight: string;
    comment: string;
}

interface food{
    food: string;
    calories: number;
    protein: number;
    date: Date
}

function DailyRecap(){
    
    const stringDataExercises = window.localStorage.getItem('savedExercises');
    const dataExercises: Exercise[] = stringDataExercises?JSON.parse(stringDataExercises) : [];
    const [exercises, setExercises] = useState<Exercise[]>(dataExercises);

    useEffect(() => {
        window.localStorage.setItem('savedExercises', JSON.stringify(exercises));
    },[exercises])

    const dateFilteredExercises = exercises.filter((exercise) =>
        new Date().getDay() === new Date(exercise.date).getDay() &&
        new Date().getMonth() === new Date(exercise.date).getMonth() &&
        new Date().getFullYear() === new Date(exercise.date).getFullYear());
    //console.log(dateFilteredExercises);

    const stringDataFood = window.localStorage.getItem('savedFood');
    const dataFood: food[] = stringDataFood?JSON.parse(stringDataFood):[];
    const [foods, setFoods] = useState<food[]>(dataFood);

    const dateFilteredFoods = foods.filter((food) => 
        new Date().getDay() === new Date(food.date).getDay() &&
        new Date().getMonth() === new Date(food.date).getMonth() &&
        new Date().getFullYear() === new Date(food.date).getFullYear());

    useEffect(() => {
        calculateSumCaloriesAndProtein();
    }, [foods]);
    
    const [sumCalories, setSumCalories] = useState(0);
    const [sumProtein, setSumProtein] = useState(0);
    function calculateSumCaloriesAndProtein(){
        let sumCalories = 0;
        let sumProtein = 0;
        foods.map((food) => {
            sumCalories += food.calories;
            sumProtein += food.protein;
        })
        setSumCalories(sumCalories);
        setSumProtein(sumProtein);
    }

    return(
        <div>
            <div className="home-title">Daily recap</div>
            {dateFilteredExercises.length === 0 &&
                <div>No exercises for today :(</div>
            }
            {dateFilteredExercises.length > 0 && 
                <div>Število opravljenih vaj</div>
            }
            {dateFilteredFoods.length === 0 && 
                <div>No foods for today :(</div>
            }
            {dateFilteredFoods.length > 0 && 
                <div>
                    <div>Foods</div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Total meals:</td>
                                <td>{dateFilteredFoods.length}</td>
                            </tr>
                            <tr>
                                <td>Total calories:</td>
                                <td>{sumCalories}</td>
                            </tr>
                            <tr>
                                <td>Total protein: </td>
                                <td>{sumProtein}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default DailyRecap;