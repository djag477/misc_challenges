/* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. */

theList = [10, 15, 3, 7];
k = 17;
matches = []

for (let i = 0; i < theList.length; i++) {
    for (let j = i+1; j < theList.length; j++) {
        if (theList[i] + theList[j] == k) {
            
            matches.push(`${theList[i]} + ${theList[j]} = ${theList[i] + theList[j]}`)

        } 
    }

}
matches.length >= 1 ? console.log(matches.length > 1 ? `Found ${matches.length} matches`: "Found 1 match", matches) : console.log("No matches")