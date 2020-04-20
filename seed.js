const db = require('./models');

const workout = [
    {
        name: "Plank Finisher",
        time: 7,
        type: 'Core',
        goodFor: ['Stability'],
        description: "Drills like Side Plank Knee Drives and Side Plank Wraps help strengthen the lateral sides of your body, a crucial component to full-body strength and balance",
        exercise: [
            {title: "Plank Alt leg lifts", description: "lift legs altenately", time: 1},
            {title: "High Plank", description: "on all 4 hands and feet", time: 1},
            {title: "Side Plank Knee Drive", description: "One side then other"},
            {title: "Plank Saws", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Plank Wraps", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "High Plank", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    {
        name: "Quick Core Crush",
        time: 10,
        type: 'Core',
        description: "This one will challenge your core from all sides. If you feel a strain in your neck, take a quick break, then jump back in when you're ready.",
        goodFor: ['Stability', 'Endurance'],
        exercise: [
            {title: "High Plank", description: "lift legs altenatel", time: 1},
            {title: "Reverse Crunch", description: "on all 4 hands and feet"},
            {title: "Flutter Kicks", description: "One side then other"},
            {title: "Full Sit-Ups", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Single Leg Toe Touches", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Single Leg Toe Touches", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Reverse Crunch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Double Leg Toe Touches", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Single Leg Sit-Up", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Plank Saws", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Reverse Crunch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Sit Up Twist", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Sit Up Twish", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Up Dog", description: "imperdiet massa tincidunt nunc pulvinar", time: 1}
        ]
    },
    {
        name: "Bi's and Tri's",
        time: 20,
        type: 'UpperBody',
        goodFor: ['Strength'],
        description: "Arm training is not just for as=estgetucs, Stay Strong and braced during the tricep work for added core benifits. Use weights you can control.",
        exercise: [
            {title: "Walkout to Push-Up", description: "lift legs altenately", time: 1},
            {title: "Down Dog", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Diamond Push-Ups", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Tricep Kickbacks", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Modified Push-Ups Low Hold", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Tricept Kickbacks", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Down Dog", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Diamond Push-Ups", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Tricept KickBacks", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    {
        name: "Shoulder Shaper",
        time: 21,
        type: 'UpperBody',
        description: "Try this shoulder workout, shape your shoulders for sucess!",
        goodFor: ['Strength'],
        exercise: [
            {title: "Shoulder Gators", description: "lift legs altenately", time: 1},
            {title: "Forward Shoulder Circles", description: "on all 4 hands and feet", time: 1},
            {title: "BackWards Shoulder Circles", description: "One side then other", time: 1},
            {title: "High Plank Shoulder Taps", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Side Lying T Stretch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Side Lying T Stretch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Modifies Push Ups", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Lateral Raise", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Front Raise", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Bent Over Fly", ddescription: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "kneeling dumbell press right arm", description: "lift legs altenately", time: 1},
            {title: "kneeling dumbell press left arm", description: "lift legs altenately", time: 1},
        ]
    },
    {
        name: "Jump Start",
        time: 15,
        type: 'LowerBody',
        goodFor: ['Strength', 'Endurance'],
        description: "Focus on quickness and going high during the jumps. Then think low and slow during the strength exercises.",
        exercise: [
            {title: "Hip lifts", description: "lift legs altenately", time: 1},
            {title: "Bear Crawl", description: "on all 4 hands and feet", time: 1},
            {title: "Split Squats", description: "One side then other", time: 1},
            {title: "Split Squats", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Body weight Squats", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Squat Jumps", description: "lift legs altenately", time: 1},
            {title: "Push Ups", description: "lift legs altenately", time: 1},
            {title: "YTW", description: "lift legs altenately", time: 1},
            {title: "Forward Lunges", description: "lift legs altenately", time: 1},
            {title: "Split Jumps", description: "lift legs altenately", time: 1},
            {title: "High Plank", description: "lift legs altenately", time: 1},
            {title: "Jumping Jacks", description: "lift legs altenately", time: 1},
            {title: "Mountain Climbers", description: "lift legs altenately", time: 1},
            
        ]
    },
    {
        name: "Glutes & Glory",
        time: 15,
        type: 'LowerBody',
        description: "Glutes and hamsting are the focus! Be sure to keep your movements slow and controlled, with abs firm throughout exercise.",
        goodFor: ['Strength'],
        exercise: [
            {title: "Reverse Lunge Reaches", description: "lift legs altenately", time: 1},
            {title: "Walkouts", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Clamshells", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "ClamShells", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Lateral Hip Openers", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Worlds Greates Strech", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Dumbbell Deadlift", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Forward Dumbell Lunges", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Broad Jumps", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Lateral Dumbell Lunges", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    {
        name: "Pre-Run Yoga",
        time: 10,
        type: 'Core',
        description: "For runners, yoga is a great way to buid strength, stamina and flexibility.",
        goodFor: ['Core', 'Stability', 'Mobility'],
        exercise: [
            {title: "Downward Dog", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Upward Dog", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Triangle Forward Bend", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Hib Bridge With Leg Reach", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Cow Face Pose", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Childs Pose", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    {
        name: "Desk Detox",
        time: 7,
        type: 'Full Body',
        description: "Use this to loosen your hips, shoulders, and upper back from the tightness that can build during long day of work.",
        goodFor: ['Mobility'],
        exercise: [
            {title: "Shoulder Gators", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Dynamic Chest Stretch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Reverse Lunge Reaches", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Knee Hugs", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Lateral Hip Openers", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Split Squats - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Split Squats - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    {
        name: "Cool-Down",
        time: 7,
        type: 'LowerBody',
        description: "Stretching while your muscles are warm after a run or a wokrout is an ideal time to help improve flexibility.",
        goodFor: ['Mobility'],
        exercise: [
            {title: "Knee Hugs", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Dynamic Hamsting Stetch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Dynamic Quadriceps Stretch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Dynamic Chest Stretch", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Hip Cradles", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Standing Quadriceps Stetch - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Standing Quadriceps Stetch - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Standing Hamstring Stretch - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
            {title: "Standing Hamstring Stretch - one leg each", description: "imperdiet massa tincidunt nunc pulvinar", time: 1},
        ]
    },
    
];


console.log("Deleting all workouts....");

db.Workout.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} workouts` );


    console.log("Creating new workouts...");
      db.Workout.create(workout, (err, newWorkouts) => {
        if (err) {
          console.log(err);
          process.exit();
        }

        console.log(`Successfully created ${newWorkouts.length} workout.`);
    });

});