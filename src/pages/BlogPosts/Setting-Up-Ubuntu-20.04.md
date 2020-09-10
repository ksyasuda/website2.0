---
title: "Setting Up Ubuntu 20.04 with WSL 2"
date: "8/25/2020 | 12:46 AM"
subject: "Setup"
default_height: "1800vh"
laptop_height: "2850vh"
phone_height: "3600vh"
---

<!-- <style>
	.image {
		width: 80%;
		position: relative;
		left: 10%;
	}
</style> -->

---

<br/>
 
<h2>Introduction</h2>

I will be upgrading from my WSL 2 Ubuntu 18.04 LTS distro to the relatively newly released Ubuntu 20.04 LTS release and personalizing it to my liking

For the personalization I will:

-   install zsh
-   set up my .zshrc
-   install oh-my-zsh
-   install zsh-syntax-highlighting and zsh-autosuggestions
-   install powerlevel10k
-   set up a p10k prompt
-   set up my custom .bashrc
-   add color to bash

<br/>

---

<br/>

<h2>Installing WSL 2 (Skip if you already have WSL 2 enabled)</h2>

In order to get WSL 2 working on your machine, you have to:

1. Enable the "Windows Subsystem for Linux"
2. Confirm Windows Build Version is Compatible with WSL 2 (Must have Windows build version 1903 or higher)
3. Enable the 'Virtual Machine Platform' optional component
4. (optional) Set WSL 2 as your default version

<h3>1. Enable the "Windows Subsystem for Linux"</h3>
<img class="image" src="https://imgur.com/Rx7LJoQ.png">
<p class="small-text" style="text-align: center">Search for PowerShell in Windows and Run as Administrator</p>

<br/>

For this step, open up PowerShell as Administrator and run the command:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Then restart your machine to complete the WSL install

<br/>

<h3>2. Confirm Windows Build Version is Compatible with WSL 2</h3>

<h2 style="text-align: center;">For this step you must have Windows build 1903 or higher.</h2>
<h4 style="text-align: center;">Skip if you know your have a compatible build version</h4>

To check your Windows build version press **Windows Logo + R**, which will bring up a menu

type `winver` and select OK

<img class="image" src="https://imgur.com/CvycJtA.jpg">

A popup will appear that will contain your windows build version as seen above

If you have higher than Build 1903, then you can continue

<br/>

<h3>3. Enable the 'Virtual Machine Platform' optional component</h3>

Open PowerShell as administrator and run:

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Then restart your machine to complete the installation and upgrade to WSL 2

<h3>4. (optional) Set WSL 2 as your default version</h3>

This is an optional step for if you want WSL 2 to be the default version (over WSL 1)

Open up PowerShell as administrator one more time and run:

```powershell
wsl --set-default-version 2
```

<br/>

<h3>And with that you have successfully installed WSL 2 and set it as the default WSL version.</h3>
<br/>

---

<br/>

<h2>Installing the Distro</h2>

Now is the time to download and install the distrubution of choice from the Microsoft Store

<img class="image" src="https://imgur.com/0Ls6hAH.png">

<p style="text-align: center; font-size: smaller">I will be installing Ubuntu 20.04 LTS, but there are many other options to choose from (including Arch Linux, which is not on the Microsoft Store)</p>

<br/>

<img class="image" src="https://imgur.com/wQr0xV1.png">

<p style="text-align: center; font-size: smaller">Once you have the distribution downloaded and installed you can search for it in your programs and run the program</p>

<br/>

I will be using <a href="https://github.com/mintty/wsltty">wsltty</a> as my terminal of choice to launch Ubuntu

You should have a terminal that looks like this:

<img class="image" src="https://imgur.com/4jlE0yJ.jpg">

<br/>
<br/>

On the first time openeing Ubuntu, you should get a screen to make an account for UNIX. Put in a username and password and **remember the password** as you will use it a lot

From there I am going to skip setting up bash for now and I will install my preferred shell, zsh

<br/>

---

<br/>

<h2>Installing Zsh</h2>

To install zsh, type: `sudo apt-get install zsh` then press enter

Put in your password that you set up in the beginning and press 'y' or 'Y' for yes when prompted

And with that, zsh should be installed and if you run `zsh` in the terminal you should see a new 'Z shell configuration' screen

Press 'q' to quit and do nothing and you should be in a zsh shell denoted by a '%' instead of '\$' in bash

<br/>

---

<br/>

<h2>Installing Oh My Zsh</h2>

One of the great features of zsh are the plugins such as zsh-syntax-highlighting and zsh auto-completion

To make them easy to install and add other functionality I will install <a href="https://github.com/ohmyzsh/ohmyzsh">Oh My Zsh</a>

Run the command:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

in the terminal and when prompted press 'y' to change the default shell to Zsh and enter in your password

Once that is done, Oh My Zsh will be installed

<br/>

---

<br/>

<h2>Installing Zsh Plugins</h2>

Now to install <a href="https://github.com/zsh-users/zsh-autosuggestions">zsh-autosuggestions</a> and <a href="https://github.com/zsh-users/zsh-syntax-highlighting">zsh-syntax-highlighting</a>

To install zsh-autosuggestions:

1. clone the repository into `$ZSH_CUSTOM/plugins` (by default in `~/.oh-my-zsh/custom/plugins`) by running the command

    ```zsh
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
    ```

2. Add the plugin to the list of plugins for Oh My Zsh to load in your `~/.zshrc` by opening up `~/.zshrc` in the text editor of your choice.

    Near the bottom of the page (line 71 for me) you will find the line `plugins=(git)`

    <img class="image" src="https://imgur.com/CzJQpC9.png">

    Edit the line so that it says `plugins=(git zsh-autosuggestions)`

    Then save and quit

3. Reload the `~/.zshrc` by running the command:

```zsh
source ~/.zshrc
```

Now when you try and type a command Zsh will try to auto complete the command (which can be triggered by pressing tab or right arrow)

Repeat the same steps for zsh-syntax-highlighting but use this command to download the plugin to the correct location:

```zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

And add `zsh-syntax-highlighting` to the plugins line in your `~/.zshrc`

After adding the plugin to your .zshrc and running `source ~/.zshrc`, you should see any valid command you type highlighted as green and any invalid command as red as seen below

<img class="image" src="https://imgur.com/5QL9tNM.png">
<p style="text-align: center;">An example of highlighting for an an invalid command</p>

<br/>

<img class="image" src="https://imgur.com/lw9R8yb.png">
<p style="text-align: center;">An example of highlighting for a valid command</p>

<br/>

---

<br/>

<h2>Installing Powerlevel10k</h2>

Powerlevel10k is a Zsh theme with a lot of customization and flexibility that builds off an older project, Powerlevel9k and is compatible with all Powerlevel9k commands/configurations

To install Powerlevel10k you need to have a custom font

The recommended font and installation instructions can be found <a href="https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k">here</a>

Once you have a compatible font run the following command to install the plugin with Oh My Zsh:

```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Then set `ZSH_THEME="powerlevel10k/powerlevel10k"` in `~/.zshrc`

And finally run `source ~/.zshrc` and the Powerlevel10k configuration screen should come up

<img class="image" src="https://imgur.com/IJiTAry.png">

Go through the configuration screen choosing the options you want and press y to change your .zshrc at the end and save your configuration

Keep in mind that the more that you have on your terminal prompt, the slower the terminal will run

That includes the fluidity of typing, as well as how long it takes after each command to bring up the next prompt

In the end you should have something that looks like this:

<img class="image" src="https://imgur.com/k4y6fjX.png">

<br/>

---

<br/>

<h2>Setting up Bash</h2>

Now that zsh is the default shell, in order to get into a bash shell you have to run the command: `bash`

After that you should see the powerlevel10k prompt disappear and a new bash prompt should replace it

The first thing I want to do is set up a custom PS1 prompt, which is everything left of the cursor on the terminal

<br/>

---

<br/>

<h2>Setting up a Custom PS1 Prompt</h2>

I want my prompt to say the current date, current time, and display which git branch, if any, I am curently on

In order to see if the current directory is a git directory we have to set up a couple of helper functions in our `~/.bashrc`

Add these two function to the end of the `~/.bashrc`

```bash
gb() {
	echo -n '[' && git branch 2>/dev/null | grep '^*' | colrm 1 2 | tr -d '\n' && echo -n '*]'
}
```

```bash
git_branch() {
	gb | sed 's/\[\*\]//'
}
```

The custom prompt will call git_branch(), which will output the name of the git current git branch, if it exists, in a nicely formatted way

It is necessary to split the helper functions into two functions so that it does not display anything in a non-git directory

<img class="image" src="https://imgur.com/RwZgA9u.png">
<p style="position: relative; font-size: smaller; text-align: center">An example of what happens when you don't split into two helper functions</p>

<br/>

Next add this line after the function in the `~/.bashrc`

```bash
PS1="\033[1;35m[ \d | \@ ]\033[0m\e[44;0;36m[\w]\e[1;92m\$(git_branch)\e[44;0;91m\n$: "
```

It should look something like this

<img class="image" src="https://imgur.com/HEknUC6.png">

<br/>
<br/>

Save and quit from `.bashrc` and run: `source ~/.bashrc`

Now you should see the custom prompt with the date, time, current directory, and git information (if in a git directory)

<img class="image" src="https://imgur.com/chmbvQm.png">
<p style="font-size: smaller; text-align: center;">An example in a non-git directory</p>

<br/>

<img class="image" src="https://imgur.com/1X6lYp8.png">
<p style="font-size: smaller; text-align: center;">An example in a git directory</p>

<br/>

---

<br/>

<h2>Adding Color to ls Output</h2>

By default the shell command `ls` outputs every file and directory in the current directory without color

<img class="image" src="https://imgur.com/tQ8qS9m.png">

<br/>
<br/>

To change that, bash adds a variable `LS_COLORS` that we can customize

Add this to the end of the `~/.bashrc`:

```bash
LS_COLORS="di=42;1;95:*.mp3=1;32;41:fi=0;91:*.c=1;96:*.js=1;93:*.h=1;35:ex=1;32:*.html=1;36:*.cpp=1;96:*.txt=1;91:*Makefile=1;35:*.css=1;36:*.as=1;35:ow=1;42;93:*.ttf=0;91:*.png=0;91:*README=4;31:*.jpg=0;91:*.md=4;31:*.json=1;94"
```

After running `source ~/.bashrc` and running ls in a populated directory you should see something like this:
<img class="image" src="https://imgur.com/3EZTiQq.png">

<br/>

inbetween each ':' you will see something like `di=42;1;95` or `*.js=1;93`

`di` is a keyword that stands for directory

`*.js` means any file that ends in `.js`

For `di=42;1;95` it means a green background with bold, bright magenta colored text

The escape codes can be found in the chart in the [Clors section of the ANSI escape codes wiki page](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)

<br/>

---

<!-- <br/>

<h2>Add Color to Bash</h2>

Alternatively to mesing around with LS_COLORS, you could install a package called <a href="https://github.com/athityakumar/colorls#installation">colorls</a> that adds more colors and icons to the `ls` output

Before installing `colorls` you must have: 1.

1. Ruby installed (preferably, version >= 2.5)
2. Have a patched font for powerline or nerd-font and/or font-awesome

To install `Ruby` enter:

```bash
sudo apt install ruby-full
```

After that is finished enter `ruby --version` into the terminal to see the version of ruby installed and verifty that it is >= version 2.5

<br/>

Next, since we already installed a patched nerd-font for powerlevel10k, we can go on to the next step and install `colorls`

Install `colorls` with `gem install colorls`

Bash may respond with an error saying that you do not have permissions to execute the command

In that case, run the command with `sudo` prepended to the command, so run:

```bash
sudo gem install colorls
```

After that is finished, colorls should be installed and if you run `colorls` in the terminal you should see something like this:

<img src="https://imgur.com/VW9ybUd.png" class="image">

Colorls adds a couple of commandline options that can be added to change the output of the command

For instance, like with `ls` the `-l` argument will put the output into list mode and show more info including the read, write, execute bits of each file/directory as seen below:

<img src="https://imgur.com/FW0JgFQ.png" class="image">

<br/>
<br/>

Additionally, the `-a` argument works in the same way as it does with `ls`, listing every file and directory (including hidden files/directories) as seen below:

<img src="https://imgur.com/083gWtO.png" class="image">

<br/>
<br/>

When both arguments are combined, the commands look like this:

<img src="https://imgur.com/PMdTzwg.png" class="image">

<br/>
<br/>

In order to make it so I don't have to type colorls -al every time I want to run the command, I can add an alias to my `~/.bash_aliases` and be sure to refrence it in the `~/.zshrc`

Open `~/.bash_aliases` or create the file if it does not exist

In `~/.bash_aliases`, add these 4 lines:

```zsh
alias lc='colorls --sd -X'
alias lcl='colorls --sd -Xl'
alias lcla='colorls --sd -Xla'
alias lcal='colorls --sd -Xla'
```

<p style="font-size=10px; text-align: center;">The --sd argument sorts directories to the front of the output and the -x argument sorts the rest by file extension</p>

Then save and exit

Add the following lines to `~/.zshrc`:

```bash
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

Then run: `source ~/.zshrc` and you should be able to use the aliases now in the terminal

Run `lcla` in the terminal and you should see something like this:

<img src="https://imgur.com/HjXXmne.png" class="image"> -->
