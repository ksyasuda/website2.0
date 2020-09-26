---
title: "Job Search App (C++)"
date: "9/24/2020 10:35 PM"
subject: "Showcase"
default_height: "400vh"
laptop_height: "500vh"
phone_height: "750vh"
---

## Introduction

In the past, when trying to keep track of internships that I had applied to, I
had always used Excel even though I have a very basic understanding of how to
use Excel. That's why this year, I decided to write a program to do it for me.
I decided to write this in C++ and create a command-line application as opposed
to creating a web application in React because I wanted simplicity, speed, and
the map data structure in C++.

<br />

---

<br />

## Sections

1. [The plan](#the-plan)
2. [Parse Command-line Arguments](#parse-args)
3. [Creating the Job class](#job-class)
4. [Reading from the input file](#reading-input)
5. [Writing to the file](#write-file)
6. [Setting up XOR Cryptography](#write-my-own-crypto)
7. [Adding Encryption/Decryption to File Write](#integrate-crypto)
8. [Fixing the Print, Insert, and Search Commands](#fix-commands)

<br />

---

<br />

## The Plan <a name="the-plan"></a>

The plan was to create a command-line application that would read in specially
formatted strings containing the company name, job title, job location, and date
applied separated by a '|', use the information to create a Job object and add
the job objects to a C++ Map, using the company name as the keys.

This allows me to search for any job that I have already applied to by searchin
g the Map for the company name, and a result can be found in constant time
regardless of the size of the map. For the same reason, I am also able to
easily keep track of the number of jobs that I have applied to as the Map data
structure keeps track of its own size for a constant time .size() operation.

<br />

---

<br />

## Parse Command-line Arguments <a name="parse-args"></a>

The first step of the program was parsing command-line arguments.

For this I used [getopt](https://man7.org/linux/man-pages/man3/getopt.3.html "getopt man page"), which is a program, written in C, for handling command-line
arguments.

First, I created the longOpts struct, which defines all the valid command-line
arguments that the program will accept.

![longOpts struct](https://imgur.com/w5ZKagu.png)

Next I created a while loop that loops through arvg, the command-line arguments,
and parses each argument for use in a switch statement.

```c++
while ((option = getopt_long(argc, argv, "vpi:hs:c", longOpts, &option_index))
!= -1) {
	switch(option) {
		case 'v':
			break;
		case 'p':
			break;
		case 'i':
			std::string arg = optarg;
			break;
		case 'h':
			break;
		case 's':
			std::string company = optarg;
			break;
		case 'c':
			break;
		default:
			break;
	}
}
```

Optarg is a C-string that can be casted to a C++ style string and then further parsed or used in the program.

<br />

---

<br />

## Creating the Job Class <a name="job-class"></a>

<br />

---
