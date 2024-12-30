const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  if (studentGrade < necessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.'}
  } 
  return studentNumberOfAbsenses > numberOfAbsensesToFailSchool ? { error: true, message: 'Student was not approved because he had too many absenses.'} : { error: false, message: 'Student was approved.'}
}

console.log(checkIfStudentPassedTheSchoolYear())