#! /usr/bin/env perl

use strict;
use warnings;
my $text = 'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics';
$text =~ s/,//g;
my @arr = split(/ /,$text);

for my $tmp (@arr) {
  print length($tmp);
}
print '\n';
