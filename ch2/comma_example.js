// NOTE: a caret " ^ " in a comment indicates a match POSITION

const A_big_number = "123456789";
const AA_big_number_with_text = "123456789Hz";
const B_some_digits_on_the_left = /(?<=\d)/
const C_matches_triple_digits = /(\d\d\d)+$/
const D_matches_LOCATIONS_of_triple_digits =  /(?=(\d\d\d)+$)/// ^123^456^789
const E_matches_LOCATIONS_of_triple_digits_on_the_right_with_at_least_some_on_the_left =  /(?<=\d)(?=(\d\d\d)+$)/// 123^456^789
const F_more_efficient_matches_LOCATIONS_of_triple_digits_on_the_right_with_at_least_some_on_the_left =  /(?<=\d)(?=(?:\d\d\d)+$)/// 123^456^789 - non-capturing is faster


/* "Look" Types p66
Positive lookbehind (?<=)
Negative lookbehind (?<!)

Positive lookahead (?=)
Negative lookahead (?!)
* */


const G_same_as_F_swap_in_neg_lookahead_for_$ =  /(?<=\d)(?=(?:\d\d\d)+(?!\d))/// 123^456^789^Hz - use negative lookahead to exclude numbers


/* Notes:
\D is no substitute for the negative lookahead beacuse it will not match if NOTHING is there.
A negative matcher will match on nothing, a positive matcher will only match on something


* */
const H_commification_without_lookbehind = /(\d)(?=(\d\d\d))+(?!\d)/
const I_quiz_commification_without_looking_does_it_work = /(\d)(\d\d\d)+\b/g

const A_big_number_quiz_result = A_big_number.replace(I_quiz_commification_without_looking_does_it_work,",")
const A_big_number_quiz_result_array = [...A_big_number.matchAll(I_quiz_commification_without_looking_does_it_work)]

const exec_IA = I_quiz_commification_without_looking_does_it_work.exec(A_big_number)
const exec_IAA = I_quiz_commification_without_looking_does_it_work.exec(AA_big_number_with_text)

const AA_big_number_quiz_result = AA_big_number_with_text.replace(I_quiz_commification_without_looking_does_it_work,",")

console.log ("start")
console.log (`\nThe pattern: ${I_quiz_commification_without_looking_does_it_work}`)
console.log ("matches the characters not the positions, so it replaces everything that it matches")
console.log ("\nWe started with: " + A_big_number);
console.log ("What we want: 123,456,789")
console.log ("What we got: "+ A_big_number_quiz_result)
console.log ("\nWas there any match at all? " )
console.log (I_quiz_commification_without_looking_does_it_work.test(A_big_number))
console.log (exec_IA)

console.log ("\nWe started with: " + AA_big_number_with_text);
console.log ("What we want: 123,456,789Hz")
console.log ("What we got: "+ AA_big_number_quiz_result)
console.log ("Nothing matched so nothing got replaced.")
console.log ("\nWas there any match at all? " )
console.log (I_quiz_commification_without_looking_does_it_work.test(AA_big_number_with_text))
console.log (exec_IAA)
