const whichSchool  = function (age) {
//Elementary School if age is below 13
//Secondary School if age is between 13 and 18 (both inclusive)
//Lighthouse Labs in all other cases.
if (age < 13){
  return "Elementary School"
}
else if ((age >= 13) && (age <= 18)){
  return "Secondary School"
}
else {return "Lighthouse Labs"}
}
