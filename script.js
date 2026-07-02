/* .js files add interaction to your website */
var factList = [
"Tigers were expected to be completely extinct by 2020; however it has increased due to India's involvement. Only 13,000 left though.",
  "Lions could be fully extinct by 2050. There are ~20,000 left.",
"Sharks are targeted by poachers for fins to make Shark Fin Soup.", //0
"Rhinos are large targets for their horns. In the last 25 years, three subspecies of rhinos have gone extinct.", //1
"There were ~70,000 rhinos in the 1970s. There are less than 30,000 now due to poaching.", //2
"Poaching occurs most in Africa.", //3
"On average, 55 African Elephants are killed a day for the ivory in their tusks.", //4
"The business of poaching brings poachers billions of dollars each year.", //5
"Over the last 10,000 years, 1/3 of forests are gone.", //6
"17% of the Amazon Rainforest, home to over 3 million animal species, has been destroyed.",//7
"Destruction done to habitats causes major losses in nutrients.",//8
"Losing habitats causes a lack in food for animals.",//9
"Polar Bears are losing their homes as polar ice caps in the Arctic Sea decline by 13% per decade."];//10

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton"); 
var count = 0;

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
}

}
myButton.addEventListener("click", displayFact);




