#! /usr/bin/env perl

my @int_box;
my $sum = 0;

while(<>) {
  my @tmp;
  chomp( $_);
  $_;
  @tmp = split(/,/,$_);
  push(@int_box,@tmp);
}

for my $tm (@int_box) {
   $sum += $tm
}

print $sum;
