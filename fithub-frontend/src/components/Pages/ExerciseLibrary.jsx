import ExerciseCard from "../reusable/ExerciseCard";

function ExerciseLibrary() {
  const exerciseData = [
    {
      id: 1,
      name: "Push-Up",
      instructions:
        "Start in a plank position with hands slightly wider than shoulder-width. Keep your body in a straight line from head to heels. Bend elbows to lower your chest toward the floor until elbows are at 90 degrees. Push back up to the starting position while keeping your core engaged.",
      muscleGroups: ["Chest", "Triceps", "Shoulders"],
      image:
        "https://media.istockphoto.com/id/578104104/vector/step-to-instruction-in-push-up.jpg?s=612x612&w=0&k=20&c=AYSyhYJB-98AZL2Euig4fygTjdxliyE8TWHGfXNO6go=",
    },
    {
      id: 2,
      name: "Squat",
      instructions:
        "Stand with feet shoulder-width apart, toes slightly pointed out. Keep chest lifted and back straight. Push hips back and bend knees to lower into a squat until thighs are parallel to the floor. Press through heels to return to standing. Maintain core engagement throughout.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOlcT7QMwcTT7UqpbCVr1Fi2nKn0Edr5QAg&s",
    },
    {
      id: 3,
      name: "Dumbbell Shoulder Press",
      instructions:
        "Sit or stand with a dumbbell in each hand at shoulder height, palms facing forward. Press the dumbbells upward until arms are fully extended overhead. Slowly lower back to starting position. Keep core engaged and avoid arching your back.",
      muscleGroups: ["Shoulders", "Triceps", "Upper Chest"],
      image:
        "https://media.istockphoto.com/id/1284088195/vector/women-doing-seated-dumbbell-shoulder-press-on-bench.jpg?s=612x612&w=0&k=20&c=6-EK-TNL2WZrI45C3jS0CHz-toVrW6txezrCFrmOspI=",
    },
    {
      id: 4,
      name: "Deadlift",
      instructions:
        "Stand with feet hip-width apart, barbell over mid-foot. Hinge at the hips and bend knees to grab the bar with an overhand grip. Keep back straight and chest up. Push through heels to lift the bar, extending hips and knees fully. Lower the bar slowly to the ground while maintaining control.",
      muscleGroups: ["Back", "Glutes", "Hamstrings", "Core"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-barbell-deadlifts-exercise-600nw-2031951569.jpg",
    },
    {
      id: 5,
      name: "Lunges",
      instructions:
        "Stand upright with feet hip-width apart. Step forward with right leg, lowering hips until both knees are bent at 90 degrees. Push through the right heel to return to standing. Repeat on the left side. Keep torso upright and core engaged.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcYc7WSqFPa5ByqNwAsNnomSiDpeEnxU39A&s",
    },
    {
      id: 6,
      name: "Plank",
      instructions:
        "Start on forearms and toes with elbows under shoulders. Keep body in a straight line from head to heels. Engage core and glutes. Hold the position without sagging hips or raising your butt. Maintain steady breathing throughout.",
      muscleGroups: ["Core", "Shoulders", "Glutes"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECFNf5Q7DjrY-P9eBi4YGXhHtlKcF21lzXg&s",
    },
    {
      id: 7,
      name: "Bent-Over Row",
      instructions:
        "Hold a barbell or dumbbells with palms facing down. Hinge forward at the hips, keeping back straight and core tight. Pull the weight toward your lower chest, squeezing shoulder blades together. Lower slowly to the starting position.",
      muscleGroups: ["Back", "Biceps", "Rear Shoulders"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-bent-over-barbell-600nw-1831637863.jpg",
    },
    {
      id: 8,
      name: "Bicep Curl",
      instructions:
        "Stand with feet shoulder-width apart, holding a dumbbell in each hand, palms facing forward. Keep elbows close to your torso and curl the weights to shoulder level. Lower slowly to starting position. Avoid swinging your arms.",
      muscleGroups: ["Biceps"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqChKOZEopJ4SfPnnoz4RqCYXmO4Ttww2kw&s",
    },
    {
      id: 9,
      name: "Tricep Dip",
      instructions:
        "Place hands on a bench or chair behind you, fingers pointing forward. Extend legs in front. Lower your body by bending elbows until upper arms are parallel to the floor. Push through palms to return to starting position. Keep shoulders down and back.",
      muscleGroups: ["Triceps", "Shoulders", "Chest"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlXPbgH6DI0LcXhjqZqw14l7tO_Q289f2ug&s",
    },
    {
      id: 10,
      name: "Mountain Climber",
      instructions:
        "Start in a high plank position with hands under shoulders. Drive your right knee toward your chest, then switch legs quickly as if running in place. Keep hips low and core engaged. Maintain steady, controlled breathing.",
      muscleGroups: ["Core", "Legs", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxTT03V7LcFld-1k-Wor_Th7tz3tm1NEd3w&s",
    },
    {
      id: 11,
      name: "Pull-Up",
      instructions:
        "Grab a pull-up bar with hands slightly wider than shoulder-width. Hang with arms fully extended. Pull your chest toward the bar by bending elbows and engaging your back muscles. Lower slowly back to start. Avoid swinging or using momentum.",
      muscleGroups: ["Back", "Biceps", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMBM5iGUoa7fn-XbHfx5AHgfb3Y1bNAYjig&s",
    },
    {
      id: 12,
      name: "Chin-Up",
      instructions:
        "Grab a pull-up bar with palms facing you and hands shoulder-width apart. Hang fully extended. Pull yourself upward by bending elbows until chin passes the bar. Lower slowly with control. Focus on back and bicep engagement.",
      muscleGroups: ["Back", "Biceps", "Forearms"],
      image:
        "https://www.shutterstock.com/image-vector/young-woman-doing-chin-assistance-600nw-2519036195.jpg",
    },
    {
      id: 13,
      name: "Russian Twist",
      instructions:
        "Sit on the floor with knees bent and heels slightly lifted. Lean back slightly, holding a weight or clasping hands. Rotate your torso to touch hands or weight to the right, then left. Keep core tight and movements controlled. Avoid leaning backward.",
      muscleGroups: ["Core", "Obliques"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9GBKqM7o7aTzEcsMZxgtjY2e3eP9otdi6Q&s",
    },
    {
      id: 14,
      name: "Bicycle Crunch",
      instructions:
        "Lie on your back with hands behind your head and legs lifted at 90 degrees. Bring right elbow to left knee while extending right leg. Switch sides in a slow, controlled cycling motion. Keep lower back pressed to the floor and avoid pulling on neck.",
      muscleGroups: ["Abs", "Obliques"],
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*N_M65p5nWlq4tZ9U.jpg",
    },
    {
      id: 15,
      name: "Leg Raise",
      instructions:
        "Lie flat on your back with legs straight and hands under your glutes for support. Keep legs together and raise them toward the ceiling until hips are slightly off the floor. Lower slowly without touching the ground. Engage core throughout.",
      muscleGroups: ["Abs", "Hip Flexors"],
      image:
        "https://previews.123rf.com/images/lioputra/lioputra2112/lioputra211200378/178956206-woman-doing-lying-leg-raises-lifts-exercise-flat-vector-illustration-isolated-on-white-background.jpg",
    },
    {
      id: 16,
      name: "Glute Bridge",
      instructions:
        "Lie on your back with knees bent and feet flat. Place arms at your sides. Press through your heels to lift hips toward the ceiling until body forms a straight line from shoulders to knees. Lower hips slowly and repeat. Squeeze glutes at the top.",
      muscleGroups: ["Glutes", "Hamstrings", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1AoFfuiPK5r_hdZls7a2KwslMVU3vXxwfw&s",
    },
    {
      id: 17,
      name: "Hip Thrust",
      instructions:
        "Sit on the floor with upper back against a bench. Roll a barbell over hips (optional). Plant feet shoulder-width apart. Drive hips up toward ceiling, squeezing glutes at the top. Lower hips under control. Keep chin tucked slightly and core tight.",
      muscleGroups: ["Glutes", "Hamstrings", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeJYvsCm4DCaZiwQ7bEBgcN66Rut3-BTTw&s",
    },
    {
      id: 18,
      name: "Lateral Raise",
      instructions:
        "Stand with a dumbbell in each hand at your sides. Keep elbows slightly bent. Lift arms out to the sides until shoulder height, then lower slowly. Maintain control and avoid swinging the weights. Engage shoulders and core.",
      muscleGroups: ["Shoulders", "Traps"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMH4vYN_e448JyznNB88JVnM85DB1G2IyMnA&s",
    },
    {
      id: 19,
      name: "Front Raise",
      instructions:
        "Stand upright holding dumbbells in front of thighs, palms facing thighs. Lift weights straight in front to shoulder height with arms extended. Lower slowly under control. Keep core tight and avoid using momentum.",
      muscleGroups: ["Shoulders", "Upper Chest"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJNV9zBN1BhSqDMC8R0HYc2Wh_SdaTp6ISg&s",
    },
    {
      id: 20,
      name: "Overhead Tricep Extension",
      instructions:
        "Hold a dumbbell with both hands above your head, arms fully extended. Keep elbows close to your ears. Lower the weight behind your head by bending elbows. Extend arms back up slowly. Engage core and avoid flaring elbows.",
      muscleGroups: ["Triceps"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXhDYVYPHHXxJI1cNwxYmS9sHVfWDYtU6j7g&s",
    },
    {
      id: 21,
      name: "Jumping Jack",
      instructions:
        "Stand upright with feet together and arms at your sides. Jump feet out to the sides while raising arms overhead. Jump back to starting position. Maintain a steady pace and land softly on the balls of your feet.",
      muscleGroups: ["Legs", "Shoulders", "Core"],
      image:
        "https://st2.depositphotos.com/4293685/42451/v/450/depositphotos_424510088-stock-illustration-sport-woman-doing-exercise-jumping.jpg",
    },
    {
      id: 22,
      name: "Burpee",
      instructions:
        "Stand upright, then drop into a squat position with hands on the floor. Kick feet back into a plank position. Immediately return feet to squat position and jump up with arms overhead. Perform each movement in a controlled, fluid motion.",
      muscleGroups: ["Full Body", "Core", "Legs", "Chest", "Arms"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjH8zyH6UUCJfF3-WDVDLWodRsxVni8dSNg&s",
    },
    {
      id: 23,
      name: "Step-Up",
      instructions:
        "Stand in front of a bench or sturdy platform. Step up with your right foot, pressing through the heel to lift your body. Bring the left foot up, then step back down with the right foot first. Alternate leading legs. Keep torso upright and core engaged.",
      muscleGroups: ["Glutes", "Quadriceps", "Hamstrings"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTZRhNJ__ZH1VRCc4hhp5xzKcDxltIlnC6w&s",
    },
    {
      id: 24,
      name: "Side Plank",
      instructions:
        "Lie on your side with legs extended. Place your elbow directly under your shoulder. Lift hips off the ground, forming a straight line from head to feet. Hold the position while keeping core tight and avoiding sagging hips. Repeat on the other side.",
      muscleGroups: ["Core", "Obliques", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkcLcGFS6LaeLNsW6Oh1mj-4hOxfK5xiB0A&s",
    },
    {
      id: 25,
      name: "Wall Sit",
      instructions:
        "Stand with your back against a wall, feet shoulder-width apart. Slide down until knees are at 90 degrees. Keep back flat against the wall and hold position. Engage core and avoid lifting heels.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjIZYSZ16bagildmHU4hjZW3a2-ydtFbXSg&s",
    },
    {
      id: 26,
      name: "Incline Push-Up",
      instructions:
        "Place hands on an elevated surface such as a bench or sturdy table, feet on the floor. Keep body in a straight line from head to heels. Bend elbows to lower chest toward the surface, then push back up. Engage core and avoid sagging hips.",
      muscleGroups: ["Chest", "Triceps", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-memJDV-tU8MN4uwd_sAiJ9aAL7BfO5uTtQ&s",
    },
    {
      id: 27,
      name: "Decline Push-Up",
      instructions:
        "Place feet on an elevated surface and hands on the floor, shoulder-width apart. Maintain a straight body line. Lower chest toward the floor by bending elbows, then push back up. Keep core tight and avoid arching your back.",
      muscleGroups: ["Chest", "Shoulders", "Triceps"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht-A3Op6gA3x32VKNU4rwMqGI40Q4JEMpMA&s",
    },
    {
      id: 28,
      name: "Goblet Squat",
      instructions:
        "Hold a dumbbell or kettlebell close to your chest. Stand with feet shoulder-width apart. Push hips back and bend knees to lower into a squat, keeping chest lifted. Return to standing by pressing through heels. Keep core engaged and back straight.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8Bnb5f8OyZKSJ0XYnY2l6MrTuzA7q-XVBA&s",
    },
    {
      id: 29,
      name: "Sumo Squat",
      instructions:
        "Stand with feet wider than shoulder-width and toes pointing slightly out. Lower hips straight down while keeping chest lifted. Press through heels to return to standing. Engage core and squeeze glutes at the top.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Inner Thighs"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyhv2jVzO2HBoAMGIL_6WVKhjsLtOeuGSZw&s",
    },
    {
      id: 30,
      name: "Single-Leg Deadlift",
      instructions:
        "Stand on one leg, holding a dumbbell in the opposite hand. Hinge at the hips to lower the weight toward the floor while extending the free leg behind you. Keep back straight. Return to standing by driving hips forward and squeezing glutes. Switch legs.",
      muscleGroups: ["Hamstrings", "Glutes", "Core", "Back"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJz3QBlkuF4-zSjmnL3nxHbH_9IhUHvTyjVw&s",
    },
    {
      id: 31,
      name: "Reverse Lunge",
      instructions:
        "Stand upright with feet hip-width apart. Step backward with right leg, lowering hips until both knees are at 90 degrees. Push through the front heel to return. Repeat on the other leg. Keep chest upright and core engaged.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny-VEJCOKDb5OiAVpH7wtktL3c5HpYMC-pg&s",
    },
    {
      id: 32,
      name: "Curtsy Lunge",
      instructions:
        "Stand upright, feet hip-width apart. Step right leg diagonally behind left leg, lowering hips until knees are at 90 degrees. Push through left heel to return to start. Repeat on opposite side. Keep torso upright and core tight.",
      muscleGroups: ["Glutes", "Quadriceps", "Hamstrings", "Adductors"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWb6nPVRShHJEkCuILsyHTpY7A9iy3T1TKQ&s",
    },
    {
      id: 33,
      name: "Chest Fly",
      instructions:
        "Lie on a bench holding dumbbells above chest, palms facing each other. With elbows slightly bent, lower arms out to sides until chest is stretched. Bring dumbbells back together over chest. Keep shoulders pressed into the bench and core engaged.",
      muscleGroups: ["Chest", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyL7-et2fsd1Joj29N4JNjt9UIlbgv6zvYQ&s",
    },
    {
      id: 34,
      name: "Incline Dumbbell Press",
      instructions:
        "Lie on an incline bench with dumbbells in each hand at chest level. Press weights upward until arms are extended. Lower under control. Keep core engaged and shoulders stable throughout.",
      muscleGroups: ["Chest", "Shoulders", "Triceps"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqjMNdQpZYq6WJeQH0PpdfTD_vyAwDMAtug&s",
    },
    {
      id: 35,
      name: "Cable Row",
      instructions:
        "Sit at a cable machine with feet planted. Grab the handle with both hands. Pull handle toward your torso, keeping elbows close and squeezing shoulder blades together. Slowly return to start. Maintain straight back and engaged core.",
      muscleGroups: ["Back", "Biceps", "Rear Shoulders"],
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/015/708/447/small/man-doing-seated-low-cable-back-rows-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
    },
    {
      id: 36,
      name: "Lat Pulldown",
      instructions:
        "Sit at a lat pulldown machine, grasp the bar wider than shoulder-width. Pull bar toward upper chest by engaging lats and bending elbows. Slowly return to full arm extension. Keep torso upright and core tight.",
      muscleGroups: ["Back", "Biceps", "Shoulders"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4LCgQZ1SZIJEgTVxPlk2nXpgdazyKPr7eg&s",
    },
    {
      id: 37,
      name: "Hammer Curl",
      instructions:
        "Stand upright with dumbbells at sides, palms facing each other. Curl weights up while keeping palms facing each other. Lower under control. Keep elbows close to torso and avoid swinging.",
      muscleGroups: ["Biceps", "Forearms"],
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 38,
      name: "Concentration Curl",
      instructions:
        "Sit on a bench, lean forward slightly. Hold dumbbell in one hand, resting elbow on inner thigh. Curl weight toward shoulder, lower slowly. Focus on strict form and bicep contraction. Switch arms after reps.",
      muscleGroups: ["Biceps"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-dumbbell-concentration-curl-600nw-2165923511.jpg",
    },
    {
      id: 39,
      name: "Overhead Dumbbell Press",
      instructions:
        "Stand or sit with dumbbells at shoulder height. Press weights overhead until arms are extended. Lower slowly. Keep core tight and avoid arching back.",
      muscleGroups: ["Shoulders", "Triceps", "Upper Chest"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa365CokBjvbEXc1Oi5PmB_LvpDkWMtMmwA&s",
    },
    {
      id: 40,
      name: "Dumbbell Row",
      instructions:
        "Place right knee and hand on a bench for support. Hold a dumbbell in left hand, arm extended. Pull dumbbell toward torso, squeezing shoulder blade. Lower under control. Switch sides after reps.",
      muscleGroups: ["Back", "Biceps", "Rear Shoulders"],
      image:
        "https://media.istockphoto.com/id/1407962419/vector/man-doing-single-arm-bent-over-row-exercise-flat-vector-illustration-isolated-on-white.jpg?s=612x612&w=0&k=20&c=jN-GJvvlh6f0WXtZLSq50VJrJsxjSX608A0TLynMrwI=",
    },
    {
      id: 41,
      name: "Reverse Fly",
      instructions:
        "Hold dumbbells in each hand, hinge at hips with back flat. Lift arms out to sides to shoulder height, keeping elbows slightly bent. Lower slowly. Engage back muscles and avoid swinging.",
      muscleGroups: ["Rear Shoulders", "Back", "Traps"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-dumbbell-bent-over-600nw-2085865177.jpg",
    },
    {
      id: 42,
      name: "Side Lunge",
      instructions:
        "Stand upright with feet together. Step right leg to the side, bending right knee and pushing hips back. Keep left leg straight. Push through right heel to return to start. Repeat on the left side. Keep torso upright.",
      muscleGroups: ["Glutes", "Quadriceps", "Hamstrings", "Adductors"],
      image:
        "https://previews.123rf.com/images/lioputra/lioputra2107/lioputra210700011/171186223-woman-doing-dumbbell-side-lunges-lateral-lunges-exercise-flat-vector-illustration-isolated-on.jpg",
    },
    {
      id: 43,
      name: "High Knees",
      instructions:
        "Stand upright. Run in place, bringing knees up toward chest as high as possible. Pump arms as if sprinting. Maintain fast pace and engage core throughout.",
      muscleGroups: ["Legs", "Core", "Cardio"],
      image:
        "https://static.vecteezy.com/system/resources/previews/006/417/644/non_2x/woman-doing-high-knees-front-knee-lifts-run-jog-on-the-spot-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    },
    {
      id: 44,
      name: "Butt Kick",
      instructions:
        "Stand upright. Run in place, kicking heels toward glutes. Pump arms and keep torso upright. Maintain a fast, controlled pace.",
      muscleGroups: ["Legs", "Glutes", "Cardio"],
      image:
        "https://media.istockphoto.com/id/1356719193/vector/sport-women-doing-butt-kicks-exercise-in-2-steps-workout-diagram.jpg?s=612x612&w=0&k=20&c=jDXVQWpTTHJBKtwafnhfRWD9Mu2FwsuN6RKmcg11ca0=",
    },
    {
      id: 45,
      name: "Skater Jump",
      instructions:
        "Start on the right leg. Jump laterally to the left, landing on left leg and swinging right leg behind. Swing arms for balance. Keep chest upright and land softly. Alternate sides in a controlled rhythm.",
      muscleGroups: ["Legs", "Glutes", "Core"],
      image:
        "https://static.vecteezy.com/system/resources/previews/007/745/859/non_2x/woman-doing-skater-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    },
    {
      id: 46,
      name: "Box Jump",
      instructions:
        "Stand in front of a sturdy box or platform. Bend knees slightly, swing arms, and jump onto the box, landing softly with knees slightly bent. Step down carefully and repeat.",
      muscleGroups: ["Legs", "Glutes", "Core"],
      image:
        "https://www.shutterstock.com/image-vector/woman-doing-high-box-jump-600nw-1981139660.jpg",
    },
    {
      id: 47,
      name: "Farmer’s Carry",
      instructions:
        "Hold a heavy dumbbell or kettlebell in each hand at your sides. Stand tall and walk forward for a set distance while keeping core tight and shoulders down. Maintain controlled, steady steps.",
      muscleGroups: ["Forearms", "Core", "Shoulders", "Legs"],
      image:
        "https://personallevelfitness.com/wp-content/uploads/2022/03/Farmers-Carry-scaled.jpeg",
    },
    {
      id: 48,
      name: "Medicine Ball Slam",
      instructions:
        "Hold a medicine ball overhead with both hands. Slam it to the ground as hard as possible, squatting slightly. Catch or pick up the ball and repeat. Engage core and use controlled force.",
      muscleGroups: ["Core", "Shoulders", "Arms", "Back"],
      image:
        "https://static.vecteezy.com/system/resources/previews/027/208/879/non_2x/woman-doing-side-lateral-medicine-ball-throw-slam-exercise-flat-illustration-isolated-on-white-background-workout-character-set-vector.jpg",
    },
    {
      id: 49,
      name: "Kettlebell Swing",
      instructions:
        "Stand with feet slightly wider than shoulder-width, holding a kettlebell with both hands. Hinge at hips and swing kettlebell between legs, then thrust hips forward to swing to chest level. Keep core tight and arms relaxed.",
      muscleGroups: ["Glutes", "Hamstrings", "Core", "Shoulders"],
      image:
        "https://static.vecteezy.com/system/resources/previews/016/137/992/non_2x/man-doing-two-arm-kettlebell-swing-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
    },
    {
      id: 50,
      name: "Jump Squat",
      instructions:
        "Stand with feet shoulder-width apart. Lower into a squat, then explode upward into a jump. Land softly, immediately lowering into the next squat. Keep chest up and core engaged.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
      image:
        "https://static.vecteezy.com/system/resources/previews/026/751/825/non_2x/woman-doing-side-to-side-jump-squat-exercise-vector.jpg",
    },
    {
      id: 51,
      name: "Plank Shoulder Tap",
      instructions:
        "Start in a high plank position with hands under shoulders. Lift right hand to tap left shoulder, then return. Alternate sides while keeping hips stable. Engage core to minimize rocking.",
      muscleGroups: ["Core", "Shoulders", "Chest"],
      image:
        "https://gymgeek.com/wp-content/uploads/2024/02/plank-shoulder-taps.png",
    },

    {
      id: 52,
      name: "Flutter Kicks",
      instructions:
        "Lie on your back, hands under hips. Lift legs slightly off the ground and alternate small kicks up and down. Keep core tight and lower back pressed to floor. Maintain a steady pace.",
      muscleGroups: ["Core", "Lower Abs", "Hip Flexors"],
      image:
        "https://t4.ftcdn.net/jpg/02/55/19/97/360_F_255199728_NSWOS8SQxD8S32UhiJHnm5UvOJcVtA86.jpg",
    },
    {
      id: 53,
      name: "V-Ups",
      instructions:
        "Lie flat on back, arms overhead, legs straight. Simultaneously lift upper body and legs to meet in a V position. Lower back down slowly with control. Keep core engaged throughout.",
      muscleGroups: ["Core", "Hip Flexors", "Obliques"],
      image: "https://gymgeek.com/wp-content/uploads/2024/02/v-sits.png",
    },
    {
      id: 54,
      name: "Standing Calf Raise",
      instructions:
        "Stand upright with feet hip-width apart. Push through balls of feet to lift heels off the ground. Hold briefly at top, then lower slowly. Keep core engaged and avoid leaning forward.",
      muscleGroups: ["Calves", "Lower Legs"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-external-rotation-bodyweight-600nw-2204729405.jpg",
    },
    {
      id: 55,
      name: "Seated Calf Raise",
      instructions:
        "Sit on a bench, feet flat on the ground, holding weights on knees if desired. Push through balls of feet to lift heels, hold, then lower slowly. Engage calves and avoid bouncing.",
      muscleGroups: ["Calves"],
      image:
        "https://gymgeek.com/wp-content/uploads/2023/10/seated-calf-raises.png",
    },
    {
      id: 56,
      name: "Standing Side Leg Raise",
      instructions:
        "Stand upright holding a support. Lift one leg straight out to the side, keeping torso upright. Lower slowly and repeat. Switch legs. Engage core and glutes throughout.",
      muscleGroups: ["Glutes", "Hip Abductors", "Core"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74PBALXKf4GrIWZavkH9GftawdJFdRwSstoCrI1C--4mSP0daCXr3D4qD4v3XRuxjtig&usqp=CAU",
    },

    {
      id: 57,
      name: "Bird Dog",
      instructions:
        "Start on all fours. Extend right arm forward and left leg back until they form a straight line. Hold briefly, return to start. Alternate sides. Keep core engaged and spine neutral.",
      muscleGroups: ["Core", "Back", "Glutes", "Shoulders"],
      image:
        "https://www.shutterstock.com/image-vector/woman-doing-bird-dogs-alternating-600nw-1958322277.jpg",
    },
    {
      id: 58,
      name: "Superman",
      instructions:
        "Lie face down, arms extended in front. Lift arms, chest, and legs off floor simultaneously, squeezing back and glutes. Hold briefly, lower slowly. Keep neck neutral.",
      muscleGroups: ["Back", "Glutes", "Shoulders"],
      image:
        "https://www.gofitnessplan.com/images/exercises/mixed/superman.jpg",
    },
    {
      id: 59,
      name: "Push-Up to Side Plank",
      instructions:
        "Perform a push-up, then rotate to side plank on right side, lifting left arm up. Return to push-up, repeat on left side. Keep body aligned and core engaged throughout.",
      muscleGroups: ["Chest", "Shoulders", "Triceps", "Core"],
      image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/ajc/G53EYZI5MSGJXWASL3QBAWRHKY.jpg",
    },
    {
      id: 60,
      name: "Renegade Row",
      instructions:
        "Start in high plank, holding a dumbbell in each hand. Row right dumbbell toward torso while stabilizing with left arm. Lower slowly, then row left. Keep hips stable and core tight.",
      muscleGroups: ["Back", "Biceps", "Core", "Shoulders"],
      image:
        "https://t3.ftcdn.net/jpg/04/36/10/94/360_F_436109406_M10N2ESerOs9y5z3m0szLW1vcBrwrGf4.jpg",
    },
    {
      id: 61,
      name: "Bear Crawl",
      instructions:
        "Start on hands and feet with knees hovering above the ground. Move opposite hand and foot forward simultaneously in a crawling motion. Keep hips low and core tight.",
      muscleGroups: ["Core", "Shoulders", "Legs"],
      image:
        "https://www.shutterstock.com/image-vector/bear-crawl-exercise-introduction-step-600nw-2095800637.jpg",
    },

    {
      id: 62,
      name: "Dumbbell Lateral Raise",
      instructions:
        "Stand upright, hold dumbbells at sides. Raise arms out to the sides to shoulder height with elbows slightly bent. Lower slowly. Engage shoulders and avoid shrugging.",
      muscleGroups: ["Shoulders", "Traps"],
      image:
        "https://cdn.vectorstock.com/i/500p/97/62/seated-dumbbell-lateral-raises-fitness-exercise-vector-40569762.jpg",
    },
    {
      id: 63,
      name: "Tricep Kickback",
      instructions:
        "Hold a dumbbell in each hand, hinge at hips with back flat. Bend elbows to 90 degrees, then straighten arms behind you. Squeeze triceps at top, lower slowly. Keep upper arms still.",
      muscleGroups: ["Triceps", "Shoulders"],
      image:
        "https://www.shutterstock.com/image-vector/woman-doing-bent-over-double-600nw-2089064620.jpg",
    },
    {
      id: 64,
      name: "Chest Press",
      instructions:
        "Lie on a bench holding dumbbells at chest level. Press weights up until arms are fully extended, then lower slowly. Keep shoulder blades pressed into bench and core engaged.",
      muscleGroups: ["Chest", "Shoulders", "Triceps"],
      image:
        "https://www.shutterstock.com/image-vector/man-doing-lying-chest-press-600nw-2400149023.jpg",
    },
    {
      id: 65,
      name: "Face Pull",
      instructions:
        "Attach rope to cable at upper level. Pull rope toward face, elbows out, squeezing shoulder blades. Slowly return. Keep torso stable and core engaged.",
      muscleGroups: ["Shoulders", "Traps", "Rear Delts", "Upper Back"],
      image:
        "https://gymgeek.com/wp-content/uploads/2023/11/cable-face-pulls.png",
    },

    {
      id: 66,
      name: "Bulgarian Split Squat",
      instructions:
        "Stand a few feet in front of a bench. Place rear foot on bench, hold dumbbells optionally. Lower front leg into a squat, then press back up. Keep torso upright and front knee aligned with toes.",
      muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
      image:
        "https://static.vecteezy.com/system/resources/previews/007/341/621/non_2x/woman-doing-bulgarian-split-squat-exercise-flat-illustration-isolated-on-white-background-free-vector.jpg",
    },

    {
      id: 67,
      name: "Romanian Deadlift",
      instructions:
        "Hold dumbbells or barbell in front, feet hip-width apart. Hinge at hips, lowering weights along legs while keeping back straight. Return to standing by contracting glutes. Keep slight bend in knees.",
      muscleGroups: ["Hamstrings", "Glutes", "Back"],
      image:
        "https://www.shutterstock.com/image-vector/woman-doing-romanian-deadlift-exercise-600nw-2118315965.jpg",
    },
    {
      id: 69,
      name: "Battle Rope Waves",
      instructions:
        "Hold ends of battle ropes in each hand. Bend knees slightly, engage core, and rapidly alternate arms up and down to create waves in the ropes. Keep pace steady and torso stable.",
      muscleGroups: ["Shoulders", "Arms", "Core", "Cardio"],
      image:
        "https://www.shutterstock.com/image-vector/woman-doing-battle-rope-double-600nw-2364568255.jpg",
    },
  ];

  return (
    <main>
      <h2 className="exercise-title">Exercise Library</h2>
      <section className="exercise-grid">
        {exerciseData.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </section>
    </main>
  );
}

export default ExerciseLibrary;
