const db = require('./models');

const workout = [
    {
        name: "Plank Finisher",
        time: 3600,
        goodFor: ['core', 'stability'],
        exersize: [
            {title: "Plank Alt leg lifts", description: "lift legs altenately", time: 1},
            {title: "High Plank", description: "on all 4 hands and feet"},
            {title: "Side Plank Knee Drive", description: "One side then other"},
            {title: "Plank Saws", description: "do some shit"},
            {title: "Plank Wraps", description: "do some more shit"},
            {title: "High Plank", description: "lift legs altenately"},
        ]
    },
    {
        name: "Quick Core Crush",
        time: 10,
        goodFor: ['core', 'Quick Burn'],
        exersize: [
            {title: "High Plank", description: "lift legs altenately", time: 1},
            {title: "Reverse Crunch", description: "on all 4 hands and feet"},
            {title: "Flutter Kicks", description: "One side then other"},
            {title: "Full Sit-Ups", description: "do some shit"},
            {title: "Single Leg Toe Touches", description: "do some more shit"},
            {title: "Single Leg Toe Touches", description: "lift legs altenately"},
            {title: "Reverse Crunch", description: "lift legs altenately"},
            {title: "Double Leg Toe Touches", description: "lift legs altenately"},
            {title: "Single Leg Sit-Up", description: "lift legs altenately"},
            {title: "Plank Saws", description: "lift legs altenately"},
            {title: "Reverse Crunch", description: "lift legs altenately"},
            {title: "Sit Up Twist", description: "lift legs altenately"},
            {title: "Sit Up Twish", description: "lift legs altenately"},
            {title: "Up Dog", description: "lift legs altenately"}
        ]
    },
    {
        name: "Bi's and Tri's",
        time: 3600,
        goodFor: ['Arms', 'UpperBody Strength'],
        exersize: [
            {title: "Walkout to Push-Up", description: "lift legs altenately", time: 1},
            {title: "Down Dog", description: "on all 4 hands and feet"},
            {title: "Diamond Push-Ups", description: "One side then other"},
            {title: "Tricep Kickbacks", description: "do some shit"},
            {title: "Modified Push-Ups Low Hold", description: "do some more shit"},
            {title: "Rest", time: 10},
            {title: "Tricept Kickbacks", description: "lift legs altenately"},
            {title: "Down Dog", description: "lift legs altenately"},
            {title: "Diamond Push-Ups", description: "One side then other"},
            {title: "Tricept KickBacks", description: "One side then other"},
            {title: "Rest", time: 10},
            {title: "Reverse Curls", description: 'curl with palms facing out'},
            {title: "Hammer Curls", description: 'like you have a hammer'},
            {title: "Alternating Bicep Curls", description: 'one hand at a time'},
            {title: "Reverse Curls", description: 'curl with palms facing out'},
            {title: "Hammer Curls", description: 'like you have a hammer'},
            {title: "Alternating Bicep Curls", description: 'one hand at a time'},
        ]
    },
    {
        name: "Shoulder Shaper",
        time: 21,
        goodFor: ['chest', 'UpperBody','Shoulder', 'Strength'],
        exersize: [
            {title: "Shoulder Gators", description: "lift legs altenately", time: 1},
            {title: "Forward Shoulder Circles", description: "on all 4 hands and feet"},
            {title: "BackWards Shoulder Circles", description: "One side then other"},
            {title: "High Plank Shoulder Taps", description: "do some shit"},
            {title: "Side Lying T Stretch", description: "do some more shit"},
            {title: "Side Lying T Stretch", description: "do some more shit"},
            {title: "Modifies Push Ups", description: "lift legs altenately"},
            {title: "Lateral Raise", description: "lift legs altenately"},
            {title: "Front Raise", description: "lift legs altenately"},
            {title: "Bent Over Fly", description: "lift legs altenately"},
            {title: "kneeling dumbell press right arm", description: "lift legs altenately"},
            {title: "kneeling dumbell press left arm", description: "lift legs altenately"},
            {title: "Kneeling Dumbell Halos", description: "lift legs altenately"},
            {title: "Shoulder Gators", description: "lift legs altenately", time: 1},
            {title: "Forward Shoulder Circles", description: "on all 4 hands and feet"},
            {title: "BackWards Shoulder Circles", description: "One side then other"},
            {title: "High Plank Shoulder Taps", description: "do some shit"},
            {title: "Side Lying T Stretch", description: "do some more shit"},
            {title: "Side Lying T Stretch", description: "do some more shit"},
            {title: "Modifies Push Ups", description: "lift legs altenately"},
            {title: "Lateral Raise", description: "lift legs altenately"},
            {title: "Front Raise", description: "lift legs altenately"},
            {title: "Bent Over Fly", description: "lift legs altenately"},
            {title: "kneeling dumbell press right arm", description: "lift legs altenately"},
            {title: "kneeling dumbell press left arm", description: "lift legs altenately"},
            {title: "Kneeling Dumbell Halos", description: "lift legs altenately"},
            {title: "Modifies Push Ups", description: "lift legs altenately"},
            {title: "Lateral Raise", description: "lift legs altenately"},
            {title: "Front Raise", description: "lift legs altenately"},
            {title: "Bent Over Fly", description: "lift legs altenately"},
        ]
    },
    {
        name: "Jump Start",
        time: 15,
        goodFor: ['core', 'legs', 'lowerBody'],
        exersize: [
            {title: "Hip lifts", description: "lift legs altenately", time: 1},
            {title: "Bear Crawl", description: "on all 4 hands and feet"},
            {title: "Split Squats", description: "One side then other"},
            {title: "Split Squats", description: "do some shit"},
            {title: "Body weight Squats", description: "do some more shit"},
            {title: "Squat Jumps", description: "lift legs altenately"},
            {title: "Push Ups", description: "lift legs altenately"},
            {title: "YTW", description: "lift legs altenately"},
            {title: "Forward Lunges", description: "lift legs altenately"},
            {title: "Split Jumps", description: "lift legs altenately"},
            {title: "High Plank", description: "lift legs altenately"},
            {title: "Jumping Jacks", description: "lift legs altenately"},
            {title: "Mountain Climbers", description: "lift legs altenately"},
            {title: "Rest", time: 20},
            {title: "Body weight Squats", description: "do some more shit"},
            {title: "Squat Jumps", description: "lift legs altenately"},
            {title: "Push Ups", description: "lift legs altenately"},
            {title: "YTW", description: "lift legs altenately"},
            {title: "Forward Lunges", description: "lift legs altenately"},
            {title: "Split Jumps", description: "lift legs altenately"},
            {title: "High Plank", description: "lift legs altenately"},
            {title: "Jumping Jacks", description: "lift legs altenately"},
            {title: "Mountain Climbers", description: "lift legs altenately"},
            {title: "Standing Hamsting Stretch", description: "lift legs altenately"},
            {title: "Standing Hamsting Stretch", description: "lift legs altenately"},
            {title: "Standing Quad Stretch", description: "lift legs altenately"},
            {title: "Standing Quad Stretch", description: "lift legs altenately"},
            {title: "Quad Rockers", description: "lift legs altenately"},
            
        ]
    },
    {
        name: "Glutes & Glory",
        time: 15,
        goodFor: ['Glutes', 'Lower Body'],
        exersize: [
            {title: "Reverse Lunge Reaches", description: "lift legs altenately", time: 1},
            {title: "Walkouts", description: "on all 4 hands and feet"},
            {title: "Clamshells", description: "One side then other"},
            {title: "ClamShells", description: "do some shit"},
            {title: "Lateral Hip Openers", description: "do some more shit"},
            {title: "Worlds Greates Strech", description: "lift legs altenately"},
            {title: "Dumbbell Deadlift", description: "lift legs altenately"},
            {title: "Forward Dumbell Lunges", description: "lift legs altenately"},
            {title: "Broad Jumps", description: "lift legs altenately"},
            {title: "Lateral Dumbell Lunges", description: "lift legs altenately"},
            {title: "Rest", time: 20},
            {title: "Dumbbell Deadlift", description: "lift legs altenately"},
            {title: "Forward Dumbell Lunges", description: "lift legs altenately"},
            {title: "Broad Jumps", description: "lift legs altenately"},
            {title: "Lateral Dumbell Lunges", description: "lift legs altenately"},
            {title: "Rest", time:20},
            {title: "Dumbbell Deadlift", description: "lift legs altenately"},
            {title: "Forward Dumbell Lunges", description: "lift legs altenately"},
            {title: "Broad Jumps", description: "lift legs altenately"},
            {title: "Lateral Dumbell Lunges", description: "lift legs altenately"},
            {title: "Figure four hip Stretch", description: "lift legs altenately"},
            {title: "Figure four hip Stretch", description: "lift legs altenately"},
            
        ]
    },
    {
        name: "Plank Finisher",
        time: 3600,
        goodFor: ['core', 'stability'],
        exersize: [
            {title: "Plank Alt leg lifts", description: "lift legs altenately", time: 1},
            {title: "High Plank", description: "on all 4 hands and feet"},
            {title: "Side Plank Knee Drive", description: "One side then other"},
            {title: "Plank Saws", description: "do some shit"},
            {title: "Plank Wraps", description: "do some more shit"},
            {title: "High Plank", description: "lift legs altenately"},
        ]
    }
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