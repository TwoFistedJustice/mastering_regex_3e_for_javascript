#!/usr/bin/perl -l  #without this perl leaves the console all messy

$/ = ".\n"; # (1) Sets a special "chunk-mode"; chunks en with a period-newline combination
while (<>)  # (2)  # sets the default variable $_ to <> - special perl feature in while loops
{
    next unless s{  # (3) regex starts here
          ### need to match one word:
          \b              # start of word...
          ( [a-z]+ )      #grab word, filling $1 and \1

           ### now need to allow any number of spaces and/or <TAGS>
           (               # save what intervenes to $2
                (?:        # (non-capturring parens for grouping the alternation)
                   \s      # whitespace - including newline, which is good
                  |        # -or-
                   <[^>]+> # item like <TAG>
                )+         # need at least one of the above, but allow more
           )
           ### now match the first word again:
           (\1\b)        # \b ensures not embedded. This copy is saved to $3
          # regex ends here
          }
          #above is teh regex. The replacement string is below, followed by the modifiers, /i, /g, and /x
        {\e[7m$1\e[m$2\e[7m$3\e[m}igx; # (4)

    s/^(?:[^\e]*\n)+//mg; #(5) Remove any unmarked lines
    s/^/$ARGV: /mg;       #(6) ensure lines begin with filename
    print;
}
