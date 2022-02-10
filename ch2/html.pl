# use strict;
# use warnings;
undef $/; # enter slurp mode
$text = <>; #Slurp up the first file given on the command line

$text =~ s/&/&amp;/g; # make the basic html
$text =~ s/</&lt;/g;  # characters &, <, and >
$text =~ s/>/&gt;/g;  # html safe

$text =~ s/^/<p>\n/mg;  # html safe
$text =~ s/$/\n<\/p>/mg;  # html safe
# $text =~ s/^\s*$/<p>/mg;  # this doesn't work right. It jut chooses blank lines. Need to omit blank lines!!!


print $text