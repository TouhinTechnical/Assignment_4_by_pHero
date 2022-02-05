
// Problem 1: ana to vori
function anaToVori(ana){ 
    // error handling
    if(typeof ana != 'number'){
        return 'Please give a number';
    } // input worng dile alert deo condition

    // { 1 ana = 0.0625vori;}
    let voriCount = ana * 0.0625; // Recursion 
    return voriCount;
}
// function call
let voriCountValue = anaToVori(48); // user input field
console.log(voriCountValue); // output call

// Problem 2: pandaCost
function pandaCost(firstPrice,secondPrice,thirdPrice){
    let perPicsSingaraPrice = 7;
    let sigaraPrice = perPicsSingaraPrice * firstPrice; // items price multiplication amount

    let perPicsSomochaPrice = 10;
    let somochaPrice = perPicsSomochaPrice * secondPrice; // items price multiplication amount

    let perPicsJilapiPrice = 15;
    let jilapiPrice = perPicsJilapiPrice * thirdPrice; // items price multiplication amount

    let totalPerPersonAmount = sigaraPrice + somochaPrice + jilapiPrice; // total per person amount (tk)
    return totalPerPersonAmount;
}
// function call
let totalPerPersonAmountValue = pandaCost(23,10,20); //user input field
console.log(totalPerPersonAmountValue); // output

// Problem 3: picnicBudget

function picnicBudget(member){
    // error handling
    if(typeof member != 'number'){
        return 'Please give a number';
    } // input worng dile alert deo condition
    
    const firstBudgetPerson100Amount = 5000; // variable 
    const secondBudgetPerson200Amount = 4000; // variable
    const thirdBudgetPerson200PlusAmount = 3000; // variable
    if(member <= 100){
        const firstBudgetMemberCount = member * firstBudgetPerson100Amount;
        return firstBudgetMemberCount;
    } // First condition
    else if(member > 100 && member <= 200){
        const firstBudget100 = 100 * firstBudgetPerson100Amount;
        const restMemberCount = member - 100;
        const secondBudget200 = restMemberCount * secondBudgetPerson200Amount;
        const secondBudgetMemberCount = firstBudget100 + secondBudget200;
        return secondBudgetMemberCount;
    } // Second condition
    else{
        const firstBudget100 = 100 * firstBudgetPerson100Amount;
        const secondBudget200 = 100 * secondBudgetPerson200Amount;
        const thirdRestMemberCount = member - 200;
        const thirdBudget200Plus = thirdRestMemberCount * thirdBudgetPerson200PlusAmount;
        const thirdBudgetMemberCount = firstBudget100 + secondBudget200 + thirdBudget200Plus;
        return thirdBudgetMemberCount;
    } // Third condition
}
// function call
const memberBudgets = picnicBudget(200); // user input field
console.log(memberBudgets); // output

// Problem 4: oddFriend
const names = ['sagor', 'faysal', 'sajjad', 'soaib', 'jannat']; // Array declaer
function oddFriend(names){
    let odd = 0;
    for(let i = 0; i < names.length; i++){
        if(names % 2 !== 0){
            const element = names[i];
            return element;
        }
    }
}
// function call
const oddFriendValue = oddFriend(names);
console.log(oddFriendValue);