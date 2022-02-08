let haystack = "buy Jeffs BBQ";
let haystack_case = "buy JEFFS BBQ";

let numbers = "9876543210";


let simple = /\bJeffs\b/g
let simple_insenstive = /\bJeffs\b/ig
let replace_simple = haystack.replace(simple, "Jeff's");
let replace_simple_insenstive = haystack_case.replace(simple_insenstive, "Jeff's");
console.log ("\nsimple")
console.log (replace_simple)
console.log ("case insensitive result:")
console.log (replace_simple_insenstive)



let groups = /\b(?<j>Jeff)(s)\b/g
let groups_insenstive = /\b(Jeff)(s)\b/ig
let replace_groups = haystack.replace(groups, "Jeff's");
let replace_groups_insenstive = haystack_case.replace(groups_insenstive, "Jeff's");
let groups_exec_insenstive = groups_insenstive.exec(haystack)
console.log ("\ngroups")
console.log (replace_groups)
console.log ("case insensitive result:")
console.log (groups_exec_insenstive)
console.log (replace_groups_insenstive)


let impractical = /\bJeff(?=s\b)/g
let impractical_insenstive = /\bJeff(?=s\b)/ig
let replace_impractical = haystack.replace(impractical, "Jeff'");
let replace_impractical_insenstive = haystack_case.replace(impractical_insenstive, "Jeff'");
console.log ("\nimpractical")
console.log (replace_impractical)
console.log ("case insensitive result:")
console.log (replace_impractical_insenstive)




let lookahead1 = /(?<=\bJeff)(?=s\b)/g // lookahead 1 & 2 function identically
let lookahead1_insenstive = /(?<=\bJeff)(?=s\b)/ig // lookahead 1 & 2 function identically
let lookahead2 = /(?=s\b)(?<=\bJeff)/g
let look_bool = lookahead1.test(haystack)
let look_exec = lookahead1.exec(haystack)
let replace_lookahead = haystack.replace(lookahead1, "'")
let replace_lookahead_insenstive = haystack_case.replace(lookahead1_insenstive, "'")
console.log ("\nlook")
console.log (look_bool)
console.log ( replace_lookahead)
console.log ("case insensitive result:")
console.log ( replace_lookahead_insenstive)





// let replace_simple = haystack.replace(simple, "'");
// let replace_simple = haystack.replace(simple, "'");
// let replace_simple = haystack.replace(simple, "'");





