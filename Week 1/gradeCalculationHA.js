//Grade Calcuation

function gradeCalcution(score){

    let grade;

    switch(true){
        case (score <=100 && score>=90):
            grade="O"
            console.log("Student grade is 'O'")
        break;
        case (score <90 && score >=60):
            grade="A"
            console.log("Student grade is 'A'")
        break;
        case (score <60 && score>=40):
            grade="B"
            console.log("student grade is 'B'")
        break;
        default:
            grade="C"
            console.log("student grade is 'c'")
        break;

    }

}

gradeCalcution(90)