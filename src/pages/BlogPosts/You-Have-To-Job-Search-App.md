---
title: "You-Have-To Job Search Application (C++)"
date: "9/24/2020 10:35 PM"
subject: "Showcase"
default_height: "1500vh"
laptop_height: "2300vh"
phone_height: "2500vh"
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
3. [Creating the Job Class](#job-class)
4. [Reading from the Input File](#reading-input)
5. [Writing to the File](#write-file)
6. [Setting up XOR Cryptography](#write-my-own-crypto)
7. [Fixing the Print, Insert, and Search Commands](#fix-commands)

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

I decided to create a Job class, which contains 4 strings for each section of the input and a print function.

![job.cpp img](https://i.imgur.com/xkdtBRw.png)

The jobs are created through a custom constructor and then are available through the public getter functions.

![job.cpp pring function](https://i.imgur.com/QzWYPdY.png)

The Job class also has a custom print function that prints out the content of the Job in a formatted way. The parts of the code dealing with encryption will be talked about later.

<br />

---

<br />

## Reading From The Input File <a name="reading-input"></a>

For reading from an input file, I used the [`fstream`](http://www.cplusplus.com/reference/fstream/fstream/ "fstream c++ refrence page") C++ library.

![reading input](https://i.imgur.com/dnR56ME.png)

The line with

```c++
while(std::getline(in, line)) {
	Job job = parseString(line);
	map[job.get_company()] = job;
}
```

does a `getline()` until an EOF character or the the end of the file is reached.

The `parseString()` function, as its name suggests, parses the specially formatted string from the input file.

![parseString() function](https://i.imgur.com/yWTJBUJ.png)

The funtion starts from the beginning of each line in the file and searches for a '|' character. When it finds the '|', it returns the position of the found character or `std::string::npos` if not found. With the location of the '|', I created a substring of the line from the beginning to the '|'.

Then, to parse the rest of the string and to reuse variables, I set `count` to `pos + 1` and reuse `pos` in the next `.find()` call.

The reason I set `count` to `pos + 1` is becuase pos refers to the index of the found '|' character and to find the next section of the input, we want to begin the search on the character after the '|'.

<br />

---

<br />

## Writing To The Output File <a name="write-file"></a>

For writing to the output file, which in this case is the same file as the output file, I used the same [`fstream`](http://www.cplusplus.com/reference/fstream/fstream/ "fstream c++ refrence page") library as in the input.

![writing to the output](https://i.imgur.com/wpmeKgl.png)

The function accepts a `Job` object as a parameter and a boolean variable `crypto`, which I will go into more later. Using the getter functions of the `Job` class, I can extract the sections into strings and write them to the output file separated by a '|'.

The way that `fstream` works is that it creates a new output stream that can be used like `std::cout`, but to write to files instead. The line

```c++
std::ofstream out("out.txt", std::ofstream::app)
```

Initialzes the output stream and opens the output file if it exists, and creates one if it does not. The optional second argument `std::ofstream::app` tells `ofstream` to append to the file instead of the default behaviour of wiping the content of the file and starting from the beginning.

<br />

---

## Setting up XOR Cryptography <a name="write-my-own-crypto"></a>

Becuase I am taking a Web Systems class at the moment and we had just learned about encryption and security a little bit, I decided to add simple encryption/decryption to the program.

The plan was to make it possible for the user to encrypt the output file at any time, but not be able to decrypt the content of the file without the correct password.

Since I do not really care about if anyone were to see where I applied to, I decided to implement a simple [XOR cipher](https://en.wikipedia.org/wiki/XOR_cipher "XOR cipher Wiki page"), which uses a single character as the key and does an XOR on each character of the input string with the key.

While this is certainly not the most secure encryption algorithm, it is good enough to not be crackable without significant effor on the crackers' part.

![XOR cipher algorithm](https://i.imgur.com/bXMDZVT.png)

The `trim()` function is a static helper function that calls two other static helper functions, `ltrim()` and `rtrim()`, which performs an in-place deletion of the leading and trailing whitespace of the input string as seen below.

![trim helper function](https://i.imgur.com/IAeeuda.png)

Now with the encryption function set up for encrypting/decrypting an input string, I got to work implementing the encryption and ecryption functions for use on the output file.

I put a 'e' or a 'd' at the top of the output file to indicate whether the content that follows is either encrypted or decrypted.

Then on the program startup, when reading from the input file to populate the Job map, I read the top line of the file to see if the content of the file needs to be decrypted or not.

![need decrypt?](https://i.imgur.com/pQSM12a.png)

Next I created a function, `set<string> encrypt_decrypt();`, which takes in a single string indicating if we are encrypting or decrypting the file.

![encryp_decrypt function](https://i.imgur.com/7lnNcNi.png)

The function reads in the first line of the output file and checks if the passed in string and first line of the output differ. The reason being that if you run the XOR cipher on the same input twice, you will encrypt the string and the decrypt the string. Therefore if the content of the file is encrypted and marked with an 'e' and a user calls the encrypt function, without the check in place, the user would be able to decrypt the content of the file using the encrypt command.

Next I loop through each line in the output file. For each line in the file I: parse the '|' separated sections into their own strings, call the in-place `encrypt()` function on each string, and build the new output string with the encrypted/decrypted content.

![while loop to decrypt/encrypt](https://i.imgur.com/OhgXi0X.png)

The last thing to do was to make it so that only someone with the correct password could decrypt an encrypted file.

In order to do this, I came up with a couple of possibilities including keeping the hashed password in a secret file in the directory.

However, in the end, I decided to store the hashed password as the second line of the output file and adjust all the functions that deal with reading from the output file accordingly.

For any function that I wanted to be password restricted while encrypted such as `print()`, `count()`, and `decrypt()`, I used the `termios` and `unistd` libraries to hide user input to the terminal.

Any time I needed to check against the password stored in the output file I extract the line from the file and cast it to a string and then encrypt the users' entered password. Once I have both passwords (the hashed password from the user and the hashed password stored in the file), I use the C++ string comparator to check if each character in the strings is the same. If the passwords match, then the program continues, else it will throw an error and `exit(1)`.

![checkUser() function](https://i.imgur.com/UB20isl.png)

<br />

---

<br />

## Fixing the Print, Insert, and Search Commands <a name="fix-commands"></a>

Now that I got the encryption/decryption of the output file working, I had to get the print, insert, and search commands to work with both an encrypted and decrypted file.

For all of these options, I added a password requirement if the content of the file is encrypted

For the `insert` option, I changed the function that writes new job to the output file to include a boolean variable that decides if the content needs to be encrypted before writing to the file.

For the `print` option, because of the way I implemented the function, I have a loop through the Job map and for each job in the map, I call the Job classe's `print()` function. Therefore I had to add the encryption and trimming logic to the Job class and perform the encryption/decryption in the class when necessary.

![Job print function](https://i.imgur.com/bFh5bsE.png)

Finally, the `search` option was fixed much like the rest using the `needs_decrypt` boolean variable to decide whether or not the content needs to pass through the `encrypt()` function.

![search option](https://i.imgur.com/aBRChmK.png)

The only difference in this function is that if the content of the file is already encrypted, the search query must also be encrypted before the map `find()` call as the content of the Map would be encrypted.

![encrypt input](https://i.imgur.com/08ACuYF.png)

And with that, I completed everything that I wanted to accomplish with this project. In the future I will probably add colored output and possibly some more command-line options, but the core functionality of the application is there.

<br />

---
