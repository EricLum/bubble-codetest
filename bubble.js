//Psuedo Code
//For each combination, test if group works. if all groups don't work, then problem
//is not solveable.

//Breakdown by Parts
//1. How many groups & what size for each groups (take from old code)
//2. Create arrays for every combination based on the above. (Look up how to generate)
//3. Test Helpers (noise, understanding, fights_with, duplicate person check -- Make this one a helper?)
//4. Display Data? (Optional)
//4. Output array as JSON


//Runs the Program
function runProgram() {

  var data = '{"groups": 3, \
  "students": [ \
  {"name": "Ava", "noisy": true, "understands": true, "fights_with": \
  ["Noah", "Madison", "Gavin"]}, \
  {"name": "Madison", "noisy": false, "understands": false, \
  "fights_with": ["Olivia", "Kaylee"]}, \
  {"name": "Daniel", "noisy": true, "understands": true, \
  "fights_with": []}, \
  {"name": "Olivia", "noisy": false, "understands": false, \
  "fights_with": ["Mia"]}, \
  {"name": "Noah", "noisy": false, "understands": true, \
  "fights_with": ["Kaylee"]}, \
  {"name": "Mia", "noisy": true, "understands": false, "fights_with": \
  []}, \
  {"name": "Jayden", "noisy": false, "understands": false, \
  "fights_with": ["Mia", "Gavin", "Kaylee"]}, \
  {"name": "Brianna", "noisy": true, "understands": true, \
  "fights_with": []}, \
  {"name": "Gavin", "noisy": false, "understands": false, \
  "fights_with": ["Noah"]}, \
  {"name": "Kaylee", "noisy": true, "understands": false, \
  "fights_with": []} \
  ] \
  }'

//Parse Data
var classData = JSON.parse(data);


//Create Groups -- Create JSON Array
var groupsOutput = [];
for(i=0; i<classData.groups; i++) {
  groupsOutput.push([]);
}

//Create Student Name Array
var studentsNames = [];
for (q=0;q<classData.students.length;q++){
  studentsNames.push(classData.students[q].name)
}

//Determine equal group sizess & Generate Groups
var groupSizes = [];
setGroups(groupSizes, groupsOutput.length, studentsNames.length)

// Generate Combinations of possible groups.
for(k=0;k<groupsOutput[k];k++){
  for (j=0;j<groupSizes[j];j++){
    var testArray = []; //Remove this part
    combinations(studentsNames, groupSizes[j],0,testArray[j],groupSizes[j],groupsOutput[k])
  }
}

//Go through combinations until a one that passes all tests is correct.
var pickGroup = [];
for(i=0;i<classData.groups;i++){ //for how many groups we need to have
  for(j=0;j<groupsOutput[j].length;j++){ //for each combination 'group'
    for(k=0;k<groupsOutput[j][k].length;k++){ //for a single group's combination

    if(pickGroup.length = classData.groups){

    }

    pickGroup.push([groupsOutput[j][k])
    if(groupUnderstands(groupsOutput[j][k], classData) && groupIsQuiet(groupsOutput[j][k], classData) && groupIsQuiet(groupsOutput[j][k], classData)
    && isUnique(pickGroup){
    //group is succesfully added to the final groups list.
    }
    else {
      pickGroup.pop([groupsOutput[j][k]])
    }

    }
  }

}

//End Code
}




//HELPER FUNCTIONS
//Generate Combinations

//var arrayResult = [];
//var arrayGeneral = [];
//Pass in Students, students length, start position, get back array results.

function combinations(newArray, len, startPosition, resultArray, resultLen, arrayGeneral) {
    if(len === 0) {
        var tempArray = [];
        resultArray.forEach(value => tempArray.push(value));
        arrayGeneral.push(tempArray);
        return;
    }
    for (var i = startPosition; i <= newArray.length - len; i++) {
        resultArray[resultLen - len] = newArray[i];
        combinations(newArray, len-1, i+1, resultArray, resultLen, arrayGeneral);
    }
}

function setGroups(returnArray, groups, classSize){
  //Return Array is an array of the size of each group
  var remainder = classSize % groups;
  var studentsPerGroup = (classSize - remainder)/groups

  //Basic return array before adjusting for remainder
  for(i=0;i < groups; i++){
    returnArray.push(studentsPerGroup)
  }

  //Add an additional number for each remainder
  for(j=0;j<remainder; j++){
    returnArray[j] = returnArray[j]+1
  }
}

//TESTS functions
function conditionsMet(group,classData){
  var result = false;

}

function groupUnderstands(group,classData) {
  var result = false;
  for(i=0;i<group.length; i++){
    //Find Student from classData
    var position = findStudent(group[i], classData)
    //Check if student understands, set result = true if so
    if(classData.student[position].understands_material = true &&){
      result = true;
    }
  }

  return result
}

function groupIsQuiet(group, classData){
var result = true;
var maxLoudStudents = 2;
var currentLoudStudents = 0;
  for(i=0;i<group.length;i++){
    //Get Position of student
    if (currentLoudStudents > maxLoudStudents) {
      result = false;
    } else {

    var position = findStudent(group[i], classData)

      if(classData.students[position].noisy) {
        currentLoudStudents ++;
      }
    }
  }
}


  
function groupIsCalm(group, classData){
//does current group exclude student?
// add if it's ok ; move on if not.
  var result =
  var exclusionList = [];
  for(i = 0; i< group.length; i++){
    var position = findStudent(group[i], classData)
  for(j=0; j< classData.students[position].fights_with.length ;j++){
    exclusionList.push(group[i].fights_with[j])
    }
  }
// If the group contains one in the exclusion list -- replace one of students
// With a student in another group who is not in the list.
if (exclusionList.length > 0){
  //Search for a student who is not in the list and in a different group
  for(n=0; n<group.length; n++){
    for(m=0;m<exclusionList.length; m++){
      if (group.name = exclusionList.name) {
        //Switch student
        return true
        }
      }
    }
  }
}

//Returns array position of student from original class Data
function findStudent(studentName, classData){
  for(i=0;i<classData.students.length;i++){
    if(classData.students[i].name= studentName){
      return i
    }
  }
}

//Determines if students are not repeated amongst all groups
function isUnique(groupsCollection){
  var isUnique =false;
  var studentList = [];
  //Add Students to studentList
  for(i=0;i<groupsCollection.length;i++){
    //add students to the student list
    if(studentList.indexOf(groupsCollection[i]) !== -1){
      studentList.push(groupsCollection[i]);
    }
  }
}

function allStudentsIncluded(studentList, groupsOutput){

}
