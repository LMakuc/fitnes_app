import React from 'react';

import './Exercises.css';

import ExerciseList from './ExerciseList';

const exercises = [
    {title: "Abs", group: "abs", 
    exerciseNames: [
        "Seated Russian Twists",
        "V-sits",
        "Crunches",
        "Hanging Leg Raises",
        "Hanging Knee Raises with Twist",
        "Plank",
        "Side Bridges"],
    exerciseDescriptions:[
        "Sit on the floor with your feet lifted from the floor, knees slightly bent and body slightly leaning backwards. Touch the floor on one side and then transfer the weight to the other side and touch the floor there. Repeat the motion. If you are a beginner you can do the exercise without any weights, else you can use a dumbbell, medicine ball or any other weight that you can properly hold.",
        "Start by sitting down and lifting up your legs and torso so that they are at an 45° angle to the floor. Your body should look like a letter V. Reach with your arms forward and hold the position for as long as you can. If the exercise is too hard for you try bending your knees so that your shins are parallel to the ground. ",
        "Lie down on your back with your knees bent. Place your hands behind your head or across your chest. Bring your body up and try to go over your knees with your elbows. Then slowly lower back down, but not completely to the floor. Your shoulder blades should be approximately 10cm (4 inches) above the ground.",
        "Leap on the pull-up bar with an overhand grip and raise your legs until they are at a 90° angle. Make sure that legs are fully extended all the time and try not to use your body swinging back and forth for easier rise of the legs.",
        "This is a similar to the leg raises except here you try to raise your knees as high as possible. At the top position your legs should be bent all the way and knees twisted to one side of your body (next time on the other side). You can also do this exercise on the dips bar if you don’t have a pull-up bar.",
        "This is one of the best exercises for your abs. Here you basically go down on your elbows and toes and just try to keep your back as straight as possible all the time. If you are a beginner you can start doing the exercise on your palms (starting position of push-ups), but if you want to make the exercise harder there are two best ways. First one is put a weight on a back and the second one is move from your elbows to your palms and back all the time so you have to lift and lower your body constantly (this is a good exercise for your shoulders and triceps too).",
        "The starting position of this exercise is laying on your hip with your body lifted and supported on your palm of your extended arm (if you are laying on your left hip, then you must be supported on your left hand and the other way around). Start with your hips on the floor and then lift them up as high as possible and hold that position for a second before lowering the hip down. Be careful that your hips don’t touch the floor when doing the exercise. After finished on one side of the body immediately start doing the other side (other hip)."]
    },
    {title: "Back", group: "back", 
    exerciseNames: [
        "Seated Cable Row",
        "Dumbbell / Barbell Row",
        "Standing Cable Pulldowns",
        "Deadlifts",
        "(Assisted) Pull-ups",
        "Reverse Pull-ups",
        "Inverted Row",
        "Lateral Pull-downs",
        "Chin-ups"],
    exerciseDescriptions :[
        "Sit on the bench with your knees slightly bent and grasp the cable attachment (it can be close or wide grip). Pull the handle and weight back toward your lower body and try not to use the momentum of the row by moving your body back and forth. Then return the handle by extending your arms., but keep your back straight and repeat the exercise. You can do this exercise with both arms simultaneously or find an attachment for only one arm at a time so you can be more focused on the technique.",
        "Stand above the barbell with your mid-foot under the bar as at deadlift. Bend over and grab the bar with your palms facing your body – overhand grip. Keep your hips as high as possible when your lift the barbell. During the lift try only raising chest and keeping your back straight. Pull the barbell against your lower chest and then lower the bar and repeat the motion. If you do this exercise with dumbbells you can try to lift them as high as possible. You can also do it by leaning with your chest to the back support of a bench (at a high angle) so that you minimize the movement of your body.",
        "Stand before the cable machine with bar attachment and grab the handle a little wider than shoulder-width with overhand grip. Keep your arms straight and elbows locked. Your back should be straight all the time. Pull the handle down to your thighs. Pause for a second and allow the weights to pull up the handle until the handle is above your head. End in a position where there is still tension on the cable and repeat the motion.",
        "Position your feet under the barbell shoulder-width apart and grab the barbell with overhand grip (some bodybuilders hold the barbell with one palm facing the body and the other one facing away – mixed grip). You can use straps for easier hold. Your back must be straight and knees bent to the point where you can grab the barbell with your arms straight. Lift the bar up while extending the knees. Be careful not to raise the hips first. The bar must travel upward among the shins (almost touching them). When the bar reaches thigh level your body should be fully extended. Then lower the bar back to the floor in reverse motion and repeat the exercise.",
        "Leap up and grab the pull-up bar with your hand shoulder-width apart and with an overhand grip. Pull your body up until your chin is above the bar. Then slowly lower your body down until your arms are extended. Repeat the exercise. If you are a beginner, you can try assisted pull-ups. You can do them in two different ways. First one is with an assisted pull-up machine if your fitness or you have one. It helps you by lifting some of your weight while you are kneeling on its pad. And the second way is using a band on a bar. You simply tie the band in the middle of the bar and step on it while doing the exercise.",
        "This exercise is meant for beginners, who can’t do normal pull-ups. It’s practically the same as regular pull-ups except here your stand on a box, so your chin is above the bar when you start the exercise. Then you try as slow as possible lowering your body down until your arms are fully extended. Repeat the exercise by jumping back on the box and starting to slowly lower your body back again and again.",
        "This is a beginners exercise where you lower the bar of a smith machine to your thigh level. Then you lay on the floor under the bar and grip it in shoulder-width and with an overhand grip. Pull your body up until the lover chest doesn’t touch the bar and lower your body back down. When you can repeat this exercise 10x you should be able to start doing pull-ups or at least assisted pull-ups.",
        "First adjust the pad so that your legs are comfortable in it. Then grip the bar in shoulder-width with an overhand grip. Pull down the bar and the weights until the bar is at chin level or a little bit lower. Try not to lean back and use the momentum of the body for pulling the weights down (because it is cheating). Then allow the weight to pull the bar back up until your arms are fully extended and there is still tension on the cable and repeat the exercise.",
        "Chin-ups are similar to pull-ups. The main difference in is grip. Here you grab the bar with palms facing your body – underhand grip and being shoulder-width apart. From this point on it’s the same as pull-ups. You pull up your body until your chin is above the bar, drop back down and repeat the exercise."]
    },
   {title: 'Biceps', group: "biceps", 
    exerciseNames: [
        "Preacher Curls",
        "Hammer Curls",
        "Chin-ups",
        "Cose-grip Curls",
        "Rope / Cable Curls",
        "Dumbbell Curls",
        "Hammer to Chest Curls",
        "Half Curls",
        "Barbell Curls"],
    exerciseDescriptions:[
        "Sit on the preacher bench and adjust it (if you can) so that your armpits are just above the top of sloped padding. Hold the bar and the weight with palms facing your body – underhand grip and your upper arms resting on the sloped padding. Curl the weight up until your forearms are vertical. Pause for a second and slowly lover the bar back down until your arms are fully extended. ",
        "You can do this exercise standing up, sitting down or even with your chest pressed against the back support of a bench under a high angle. Either way you hold two dumbbells straight along the body with palms facing in. You curl the weight and try to keep your body still so the only part that it is moving is elbows. If you are doing the exercise while leaning on a back support of a bench your body won’t be able to help your arms do the exercise, which makes it a little bit harder.",
        "Chin-ups are similar to pull-ups. The main difference is in hand position. Here you grab the bar with an underhand grip and being shoulder-width apart. From this point on it’s the same as pull-ups. You pull up your body until your chin is above the bar, drop back down and repeat the exercise.",
        "For this exercise use a barbell and hold it in the middle with hand approximately 10 – 15cm (4 – 6 inch) apart. Hold it with an underhand grip. Everything else is practically the same as at other curl exercises. Curl the bar and the weight up to upper chest, slowly lower it back down and repeat it. ",
        "For this exercise use the rope or bar attachment to the cable. The cable should be as low as possible. Take a step away from the cable machine and curl the weights and grab the attachment with palms facing up.  Then do everything the same as with other curl exercises.",
        "This exercise is usually done standing up. Hold the dumbbells in each hand with extended arms and palms facing the body. While curling up the dumbbells, you need to do a rotating motion where you rotate the dumbbells for approximately 90° so the palms are still facing the body when the dumbbells are at the top. Then slowly lower dumbbells back down in reverse motion. Try not to move upper body much during the exercise, so that the biceps do all the work. You can also try leaning against a wall.",
        "This exercise is a little bit different than all the curls. Here you hold the dumbbells in front of the body, but still with palms facing your body – overhand grip. Then you need to curl the dumbbell to your lover chest, but only moving your elbows and lower it back down to the starting position. Try not to raise your shoulders, because this lowers the effectiveness of the exercise. At this exercise the arms work separately.",
        "This exercise is usually done as the last exercise of your training, because if destroys your muscle. Here you hold dumbbells in front of the body with an underhand grip. The exercise is made of two parts. First one is curling the dumbbells from the lowest position until your elbows are 90° bent. Then you lower the dumbbells down and repeat it for certain amount of reps. The second part starts with your elbows bent 90° and then curling the weights to the top and repeating this part until you can’t any more. Here both arms work simultaneously. ",
        "You need a long barbell for this exercise. Grab it in shoulder-width with an underhand grip. From now on you basically do everything the same as with other curl exercises."]
    },
   {title: "Forearms", group: "forearms", 
    exerciseNames:[
       "Palms-up Wrist Curls",
       "Palms-down Wrist Curls",
       "Dead Hangs",
       "Farmer's Walk",
       "Forearms Squeeze",
       "Overhand Grip Curls"],
    exerciseDescriptions: [
        "This exercise can be done with both hand simultaneously or separately. It’s better if you do it separately because then you can be more focused on the technique. Grab a dumbbell with an overhand grip and place your external part of your forearm on your thigh slightly forward so that your wrist is over the knee. Curls the wrist so you can see your muscles in your forearm work.",
        "This exercise is similar to the Palms-up wrist curls, except here your place your inner part of your forearm on your thigh. Everything else is the same as in previous exercise.",
        "This exercise is one of the easier ones. Here you just leap on the bar with overhand or underhand grip (you can also do both) and try to remain still for as long as possible. This exercise is good because it also takes some of the tension off from your spine.",
        "This exercise also isn’t something very hard. You basically grab a dumbbell in each hand with an overhand grip and simply walk around.",
        "For this exercise you’ll need a hand grip strengthener. It’s a type of exercise that you can do it everywhere. Squeeze the gadget and that is it.",
        "You can do this exercise with a barbell or a bar attached to a cable machine. Grab it with an overhand grip and curl it up the same way as at bicep curls."]
    },
   {title: "Legs", group: "legs", 
    exerciseNames:[
       "Squats",
       "Hip Thrusts",
       "Standing Calf Raises",
       "Goblet Squat",
       "Landmines / Jammers",
       "Walking Lunges",
       "Leg Curls",
       "Bulgarian Split Squat"],
    exerciseDescriptions: [
        "Facing the bar step under it and put your hands around it on either side of you. Lift up the bar so that it is resting on your upper back just below the neck. Your feet should be slightly wider than hip-distance apart. Move your glutes back and squat down slowly. Make sure your back is straight all the time. Continue to drop down until your hips are under your knees, then explode back up and repeat the exercise. If you are learning the form try if first with only the bar (no weights) so you avoid any back injuries. ",
        "Start sitting on the floor with your knees bent and your upper back leaning to the edge of a bench. Place the barbell with weights across the hips and hold it to keep it in place (not for lifting it with your arms). Squeeze the glutes and press the bar straight up until the hips are in line with the shoulders and knees. Slowly lower the weight back down but don’t touch the floor with your glutes. Squeeze them and lift again.",
        "For this exercise you can step on to something (weight, stair, etc.) with your toes so that your heels are hanging off. Slowly raise your heels while keeping your legs extended. When you are at the top pause for a second or two and then slowly lower the heels back to the ground. If you want to make it harder, you can also hold some weights or do this at a smith machine with the weight on your back.",
        "Stand with your feet slightly wider than your hips and toes facing slightly outward. Grab a kettlebell or a dumbbell and hold it with both hands at your chest. Press your hips back and begin bending your knees. At the bottom of the squat your elbows should be positioned on the inside of either knee. Press trough your heels and reverse the motion until you are at the starting position. ",
        "Place one end in a corner so it will not move and if you want place some weights on the other end. Grab the end with weights with both hands and lift it up to your chest (similarly than at exercise Goblet squat). Place your feet slightly wider than your hip-distance with toes facing slightly outward. Squat down all the way and back up. ",
        "Stand with your feet hip-distance apart and look straight ahead, with upright torso, engaged core, shoulders back and lifted chin. Take a step forward with one leg and go down until the knee on the other leg touches the floor. Bring your body back up and approach your back foot to your forward foot. Then start the same motion with the other leg and repeat it. If you want to make it harder, you can grab a dumbbell or kettlebell in each hand.",
        "Lie down on the leg curl machine and stretch your legs. Hook your calves to the pad of the machine and pull your ankles as close to your glutes as possible. Hold for a second and start lowering back your ankles in a slow and controlled movement. Keep your hips on the bench all the time. ",
        "Put one foot on the floor and the other one elevated on a bench and have approximately 50cm (2 feet) of space between the bench and the foot on the floor. Lower down until the knee of the foot on the bench doesn’t touch the floor and then push your body back up to the starting position. Then after a certain number of reps switch legs and do the same on the other side. If you want to grow your muscle a little bit more grab some weight while doing the exercise."]
    },
   {title: "Pecks", group: "pecks", 
    exerciseNames:[
       "Bench Press",
       "High-to-low Cable Flyes",
       "Low-to-high Cable Flyes",
       "Incline Bench Press",
       "Wide-arm Push-ups",
       "Dips",
       "Dumbbell Flyes",
       "Dumbbell Press"],
    exerciseDescriptions: [
        "Lay on your bench with your back slightly arched and with your feet flat on the floor.  Grab the bar in shoulder-width position or slightly wider than that. Lift the bar from the rack and lock your elbows. Lower the bar down to your lower chest and press the bar back up until your arms are straight again. It’s better to focus on the ceiling than on the bar.",
        "Attach your cables at the top, grab your handles and position yourself in the center of the cable machine. You can take a step forward with your strong leg and bend the knees a little bit so that the weights don’t pull you back. Pull the handles together until your hands almost touch. Be sure that they touch under your chest, because the other way the exercise doesn’t have as much effect.",
        "This exercise is similar to the High-to-low cable flys. Here you attach the cables at the bottom of the machine and position yourself the same as you do at the High-to-low flys. Here you start pulling at the bottom and try to connect hand above your chest. Make sure your weights don’t touch the weight on the machine while lowering down.",
        "Incline bench press is almost the same as regular bench press except here the back support of your bench should be at around 30° - 45°. Start the exercise in the low point where the center of the bar is above your chest and then press it up above your head. Here you can grab it slightly narrower.",
        "Get on the floor on all fours, positioning your hand slightly wider than shoulder width. You should be standing on your palms and toes. Slowly bend your elbows among the body (inward now outward) and lower your body to the floor. Lower it until your chest almost touches the floor (but it mustn’t). Push your body back to the original position and repeat. Try to keep your body in a straight line from head to toes without sagging in the middle or arching your back. ",
        "Hop on the dip bar with extended arms and locked elbows. Lean your body slightly forward and your legs slightly backward. Drop down until your elbows are at around 90° and then lift yourself back up. Make sure that you don’t lock your elbows during the exercise (only at the start and at the end of the exercise).",
        "Here you can lie down on a completely flat bench or slightly raised (the incline of the back support must be very low). Lift your dumbbells up with your palms facing each other and then lower them down with extended arms. Lower them until they are as low as the body and bring them back up. Imagine that you are drawing a half circle with both your dumbbells. Do it with both hands simultaneously.",
        "This exercise is similar to the bench press, except here you use dumbbells and here both arms work simultaneously. The starting position is laying on a bench with arms holding dumbbells extended above your body. Lower one arm down until the dumbbell is at your chest level and then press it back up while still holding the other arm up. Then you just repeat it with the other arm."]
    },
   {title: "Shoulders", group: "shoulders", 
    exerciseNames: [
        "Seated Lateral Dumbbell Raise",       
        "Seated Lateral Dumbbell Press",
        "Arnold Press",
        "Face Pulls",
        "(Seated) Shrugs",
        "Push-ups"],
    exerciseDescriptions: [
        "Sit on a bench leaning back against the back support with a dumbbell in each hand. Raise both (you can also do separately) dumbbells to your side until they’re shoulder height. Then lower them under control and repeat. ",
        "Sit on a bench leaning back against the back support. Hold two dumbbells at shoulder height. It’s important that you hold them with an overhand grip.  Then press the weights up above your head until your arms are fully extended and dumbbells nearly touch. Return slowly to the original position and repeat.",
        "This exercise is similar to the Seated dumbbell shoulder press. Sit on a bench leaning back against the back support and hold a dumbbell in each hand with palms facing your body – underhand grip. This time the original position will be in front of the body with elbows as close as possible together. Then in a rotating motion bring the dumbbells to shoulder height (palms now must be facing away from the body). Press the weight above your head as in the exercise Seated dumbbell shoulder press. Return slowly to the original position and repeat. ",
        "Stand in front of the cable machine and hold the rope attachment in both hands. The cable must be attached as high as possible. You can slightly lean back or even sit down on the floor. Pull the rope back so that the middle of the ropes is as close as possible to your forehead and hold for a couple of second. Then return to the original position with your arms extended and repeat. ",
        "This exercise can be done while standing or sitting. Either way your arms should be straight along the body holding dumbbells. Raise your shoulders as high as possible and hold for a couple of seconds. Then lower your shoulders back down and repeat. ",
        "Get on the floor on all fours, positioning your hand in shoulder width. You should be standing on your palms and toes. Slowly bend your elbows among the body (inward now outward) and lower your body to the floor. Lower it until your chest almost touches the floor (but it mustn’t). Push your body back to the original position and repeat. Try to keep your body in a straight line from head to toes without sagging in the middle or arching your back."]
    },
   {title: "Triceps", group: "triceps", 
    exerciseNames:[
       "Triceps Pushdown",
       "Skull-crushers",
       "Overhead Cable Extensions",
       "Push-ups",
       "Bench Dips",
       "Triceps Kickbacks"],
    exerciseDescriptions: [
        "You can do this exercise with rope or bar cable attachment (if you do it with bar you must grab it with palms facing the floor – overhand grip). Tuck in your elbows and position your feet slightly apart. Push down the attachment until your elbows are fully extended. Return to the starting position and repeat. Make sure you don’t move much your elbows back and forth during the exercise and keep your back as straight as possible.",
        "For this exercise you’ll need a bench and a barbell. While laying down grip the barbell fairly close with an overhand grip. Lift your barbell above you and then lower it until it almost touches your forehead. Lift it back up and repeat the exercise. Make sure that you move only elbows when you are performing this exercise. Try to keep them parallel to the body.",
        "You can also do this exercise with rope, bar or any other attachment that suits you best (still make sure that you use overhand grip). Attach your cable as low as possible. You can take a step away from the machine and even put your stronger leg slightly further for more stability. Pull your attachment over your head so that your elbows are completely bent while holding it. Pull the attachment and weights above your head until your elbows are fully extended. Lower down the attachment to the previous position and repeat the exercise. Make sure that all the lifting comes from the elbow and that they don’t move outward (they need to be in shoulder-width).",
        "Get on the floor on all fours, positioning your hand in shoulder width. You should be standing on your palms and toes. Slowly bend your elbows among the body (inward now outward) and lower your body to the floor. Lower it until your chest almost touches the floor (but it mustn’t). Push your body back to the original position and repeat. Try to keep your body in a straight line from head to toes without sagging in the middle or arching your back. ",
        "For this exercise you’ll only need a bench. Sit down on it with your hand placed next to your thighs. Extend your legs out so you lift your bottom of the bench and hold this position with extended arms. Lower your body down until your elbows comes to a 90° angle and then push yourself back up and repeat.  ",
        "Hold a dumbbell in each hand and lean forward until you are almost completely parallel to the ground. Slightly bent your knees and make sure that your back is straight. Keep your upper arm close to your body and above your back. Hold your upper arms still and only move your forearms until your arms are fully extended. Bring your forearms back in reverse motion and repeat it. Do it with both arms simultaneously. You can do it also separately and use the not-working hand to lean on to something if that is easier for you."]
        
    }

]

interface Props{
    group: string;
}

function Exercises({group}:Props) {
    const exerciseFound = exercises.find((exercise) => exercise.group === group)
    return(
        <div className="Exercises-body">
            {exerciseFound &&
                (<ExerciseList 
                    title = {exerciseFound.title}
                    exerciseNames = {exerciseFound.exerciseNames}
                    exerciseDescriptions = {exerciseFound.exerciseDescriptions}
                />)
            }
        </div>
    );
}

export default Exercises;