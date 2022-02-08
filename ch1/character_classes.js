let meta_beginning_of_line = '^';  // meta-characters have special purposes
let meta_ending_of_line = '$';

let empty_class = /[]/ // square brackets represents a class of character

let abc = /[abc]/ // match 'a' or 'b' or 'c'
let a_meta_c = /[a-c]/ // same as abc...  meta-characters are different inside a class, dash is one
let dash_a_meta_c = /[-a-c]/ // to match the dash, place it at the beginning, then it's a normal character
let negate_a_meta_c = /[^a-c]/ // the caret meta-character at the beginning negates whatever is inside

// search for grey or gray

let gray1 = /gr[ea]y/ // do not use the pipe character as 'or' because it's just a pipe character inside a class
let gray2 = /grey|gray/
let gray3 = /gr(e|a)y/ // to use alternation ('or') parentheses are necessary

let first1 = /(First|1st) [Ss]treet/
let first2 = /(Fir|1)st [Ss]treet/

let jeff1 = /Jeffrey|Jeffery/
let jeff2 = /Jeff(rey|ery)/
let jeff3 = /Jeff(rey|er)y/

let british_jeff1 = /Jeffrey|Geoffrey|Jeffery|Geoffery/
let british_jeff2 = /(Geoff|Jeff)(rey|ery)/
let british_jeff3 = /(Geo|Je)ff(rey|ery)/
let british_jeff4 = /(Geo|Je)ff(re|er)y/

let character_class = /[ae]/ // a character class matches just a single character
let alternation = /(a|e)/ // each alternative can match an arbitrary amount of text


let bad_alternation = /^From|Subject|Date:/ // matches "From" at the beginning of a line, or "Subject" or "Date:"
let good_alternation = /^(From|Subject|Date):/ // matches from the beginning of the line followed by: "From:", "Subject:", or "Date:"
