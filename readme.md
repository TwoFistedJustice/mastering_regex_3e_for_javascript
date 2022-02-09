#Javascript examples derived from </br>Mastering Regular Expressions 3rd edition
by Jeffrey E.F. Friedl, O'Reilly 2006  
ISBN 978-0596528126

This repo contains examples from Jeff Friedl's book. I have converted the Perl examples for use in Javascript.
I made this for myself as I went through the book and decided to make it public so that others could benefit.


## Buy the book online from:
note: these are affiliate links.
- [Amazon - affiliate link](https://www.amazon.com/gp/product/0596528124/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=hooliatornet-20&creative=9325&linkCode=as2&creativeASIN=0596528124&linkId=f9e9b3e050a9e77696f0d34c943a4c0f)


These are non-affiliate links
- [Amazon - non-affiliate link](https://www.amazon.com/gp/product/0596528124/)



# Where to download egrep for Windows
[grep for Windows](http://gnuwin32.sourceforge.net/packages/grep.htm)


## Some conventions I will use

I typically use snake_case because I find it easier to read.

I will frequently omit semi-colons simply to unclutter the examples.

There may be code smells because this isn't real life and sometimes it's just easier that way.

You may encounter variable names that begin with capitalized letters
such as "A_", "AA_" "AB_", "B", "BA_", "C_"
This is my way of ordering them to make the examples easier for me to refer back to. I also use the capital
letters in variables or in notes that refer back to the original in some way.

Also, because these are examples for study and not for real life, I sometimes use absurdly long variable
names. So you might see something look like this:
```js
const A_numbers = "12345"
// AB_ doesn't start with "B" because I made it after I made the 
// one that starts with "J_" and this is easier than redoing all of them.
const AB_numbers_with_some_letters_appended = "12345GB" 
const B_some_letters = "abcde"
// ... a bunch more sequntial variable through I_
const J_a_pattern_to_do_something_regexxy_with_numbers = /(?:\d\d)+/
```


# [PERL](https://www.perl.org/)
There are also some perl scripts included because I thought it would be good to learn a little Perl. Also, some of 
the examples do no readily convert to Javascript. In those instances I will use the actual example from the book.

#Installing and running Perl

Linux/Mac:
If you are running a Unix based system, there is a good chance that Perl is already installed.
The command `$: which perl` will tell you whether you have it.

Otherwise, use your package manager to install the version supported by your flavor.

Windows:
You may have to install it the Windows way.

[Get Perl Here](https://www.perl.org/get.html)

Jetbrains IDE
There is a Perl plugin. That will make it easier.
You may encounter [this](https://stackoverflow.com/questions/57986919/interllij-idea-perl5-sdk-is-not-configured) issue.

