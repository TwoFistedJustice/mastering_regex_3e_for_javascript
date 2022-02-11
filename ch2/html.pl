#!/usr/bin/perl -l
# use strict;
# use warnings;
undef $/; # enter slurp mode
$host_name_regex = qr/[-a-z0-9]+(\.[-a-z0-9]+)*\.(com|edu|info)/i;

$text = <>; #Slurp up the first file given on the command line

$text =~ s/&/&amp;/g; # make the basic html
$text =~ s/</&lt;/g;  # characters &, <, and >
$text =~ s/>/&gt;/g;  # html safe

$text =~ s/^/<p>/mg;  # html safe
$text =~ s/$/<\/p>/mg;  # html safe
# $text =~ s/^\s*$/<p>/mg;  # This only chooses blank lines. Need to omit blank lines!!!

$text =~ s{
     \b
     #capture the address to $1
     (
     # username regex
     \w[-.\w]*
     \@
     # hostname regex
     $host_name_regex
     )
     \b
   }{<a href="mailto:$1">$1</a>}gix;


$text =~ s{\b
  # capture the url to $1
  (
     http[s]?://
     $host_name_regex \b #hostname
     (
          / [-a-z0-9_:\@&?=+,.;!/~*'%\$]* #optional path (added semi-colon, not in book)
          (?<![.,?!])                    # not allowed to end with grammar punctuation
     )?
  )
}{<a href="$1">$1</a>}gix;

print $text