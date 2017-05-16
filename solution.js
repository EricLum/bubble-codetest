
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

//Create Groups
var groups = [];
for(i=0; i<classData.groups; i++) {
  groups.push([]);
}

//Load Students into first group
for(i=0; i<classData.students.length; i++){
  groups[0].push(classData.students[i]);
}

//Push Students into other groups based on mod
var remainder = classData.students.length % classData.groups
var studentsPerGroup = (classData.students.length - remainder)/ classData.groups

//Evenly Distribute groups
for(k=1; k<classData.groups;k++) {
  for(j=0; j<studentsPerGroup; j++) {
    groups[k].unshift(groups[0][0]);
    groups[0].shift();
  }
}

//Account for uneven groups
//Just adds an additional item per group for the first a groups
if(remainder > 1){
  for(a = 1; a < remainder; a++){
    groups[a].unshift(groups[0][0]);
    groups[0].shift()
}
};

var thing = fightCheck(groups[0]);


document.getElementById('group1').innerHTML = showData(groups[0])
document.getElementById('group2').innerHTML = showData(groups[1])
document.getElementById('group3').innerHTML = showData(groups[2])



//End program
}

//Helper function to display data
function showData(item) {
var string='';
var group = item;
  //Every object is an array
  for (i=0; i < group.length; i++) {
    string = string  + 'Name: ' +group[i].name + ' ' + 'Noisy: ' + group[i].noisy + ' ' + 'FightsWith: ' +group[i].fights_with + '<br>'
  }
  //Every array can be accessed by name?
  return string;
}


//Input Check for easy non-possible solutions
function checkInput(classData) {
  //Is the number of groups greater than zero?
  if (classData.groups === 0) {
    throw('Number of groups must be greater than zero')
  }
  //Check if there's more than 2 noisy students per group
  //have to loop thru list and determine the noisy students.
  var noisyStudents = classData.students.length
  if(students > 2 * classdata.groups) {
    throw('There are too many noisy students per group to solve')
  }
};

//Sort student list into 'fighting/noisy', noisy, fighting, easygoing
//Bubble sort

function fightCheck(group){
  //does current group exclude student?
  // add if it's ok ; move on if not.
  var exclusionList = [];
  for(i = 0; i< group.length; i++){
    for(j=0; j< group[i].fights_with.length ;j++){
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

function switchStudents(){

}

function nameMatches(group, exclusionGroup){
  for(i=0; i < group.length; i++){

  }
}

function noiseCheck(group) {
  //does current group have too many noisy people to add this person?
  // add or move next
}

function underStandingCheck(group){
  //does current group have not enough people who understand the material?
}
