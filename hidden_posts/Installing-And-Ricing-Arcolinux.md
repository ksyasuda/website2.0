---
title: "Installing and Ricing Arcolinux"
subject: "Setup"
date: "11/28/2020 11:18 AM"
default_height: "500vh"
laptop_height: "800vh"
phone_height: "1200vh"
---

## Sections

-   [Introduction](#introduction)
-   [Installing i3 Window Manager](#install-i3)
-   [Configuring i3](#configure-i3)
-   [Fixing the Wallpaper](#fixing-wallpaper)
-   [Installing and Configuring Polybar](#install-polybar)
-   [Installing Picom and Setting up my Config](#install-picom)
-   [Rofi Scripts](#rofi-scripts)
-   [Installing and launching KDE Applets](#kde-applets)

## Introduction <a name="introduction"></a>

Over the past 4 months, I have been messing around with and learning how to use
Arch Linux, which I installed and talked about in [another blog post](). Since
then, I have become very farmiliar with Linux, the command-line, and using an
Arch-based system. Additionally, I have found a plethora of packages and spent
countless hours configuring my sytem to my liking. One such package was the
[i3-gaps](https://github.com/Airblader/i3) Window Manager. After using a tiling
Window Manager like i3, it is hard to go back to using floating window managers.
Becuaues of this, I made the decision to wipe Windows from my main laptop, a
Dell Xps 13 9380, and install Arch Linux.

This time around, I didn't want to go through the entire install process again,
and knew that there existed arch-based distributions that had installers
built-in. I settled on [Arcolinux](https://arcolinux.com/), which can come
pre-configured with a variety of different desktop environments and window
managers. For my install, I chose the ArcolinuxD with KDE Plasma installed.

After downloading the ISO, I used the tool
[Etcher](https://www.balena.io/etcher/) to flash the ISO onto a USB drive,
plugged the USB into my computer, and booted into Arcolinux. Arcolinux comes
with the https://calamares.io/ installer, which is a point and click interface
for setting up the system and installing some initial packages.

## Installing i3 Window Manager <a name="install-i3"></a>

The ISO that I chose came with KDE Plasma installed by default, which I chose
because I want to be able to use some of the Plasma apps, customization, and
widgets. However, KDE Plasma comes with its own window manager that is not a
floating window manager like i3. However, i3 is compatible with KDE Plasma.
First, I installed the fork of i3, [i3-gaps](https://github.com/Airblader/i3),
which allows for spacing between and around windows. Next, to use a new window
manager with Plasma, there are two options: a system-wide change, or a user
change. I chose to do a system-wide change by adding a XSession.

### Adding a new XSession

-   First, copy the existing Plasma file in the `/usr/share/xsessions` folder
    cp plasma.desktop plasma-i3.desktop
-   Next, open the newly-created `plasma-i3.desktop` file in a text editor and
    change the exec line to
    ```
    [Desktop Entry]
    Type=XSession
    Exec=env KDEWM=/usr/bin/i3 /usr/bin/startplasma-x11
    DesktopNames=KDE
    Name=Plasma (i3)
    Comment=Plasma by KDE w/i3
    ```
-   Then save and quit the file and logout of the device. Upon reaching the login
    screen, you should see the new XSession to launch into

After selecting the new XSession and logging in, i3 should be up an running

## Configuring i3 <a name="configure-i3"></a>

The next thing on my list was to configure i3 itself. I cloned the config file
from my [repo](https://github.com/ksyasuda/Sudacode-Rice) and created a sym-link
from my custom config file to the default i3 config location `~/.config/i3/config`
by running, from within the `Sudacode-Rice/configs` folder, `ln -sr config ~/.config/i3/config`.

A sym-link, or symbolic link, is analagous to a pointer in C/C++. The file at
`~/.config/i3/config` is basically a pointer to my custom config file at
`Sudacode-Rice/configs/config`. So whenever i3 runs and looks for the config
file at `~/.config/i3/config` it loads my configuration file.

My i3-gaps configuration file sets the default 'inner' gap of each window to 20.
Which basically just puts padding around each window of 20px.

Additionally, I have it set up so that certain applications launch on specific workspaces:

-   Emacs and Vim launch on workspace 1
-   Firefox launches on workspace 2
-   Vscode launches on workspace 3
-   Spotify launches on workspace 9

I have custom keybindings to do things like resizing windows, set windows
to float mode, and changing the size of the gaps between and around windows

There are also keybinding to execute bash scripts that utilize [rofi](https://github.com/davatorium/rofi)
to create custom application launchers, tab switchers, and menus. I go into
more detail about the rofi scrips [here](#rofi-scripts)

## Fixing The Wallpaper <a name="fixing-wallpaper"></a>

Using the i3 Window Manager with KDE Plasma, which was configured by the
Arcolinux installer brings with it a few issues. One such issue was that the
software that they were using to set the wallpaper no longer worked.

To fix this, I used [feh](https://wiki.archlinux.org/index.php/feh) a
lightweight image viewer that can be used to manage desktop wallpapers, which was
already installed on the system.

Using the command `feh --bg-scale [filename]`, I can set the wallpaper and scale
the image to my display.

Using this, I wrote a script, `new-wallpaper.sh`, to choose one folder from the
`/usr/share/wallpapers/` folder. Each folder contains the same image of varying
resolutions. My script looks for a 4k resolution image first, and if it cannot
find one, it looks for a 1080p image. If neither can be found, it chooes a
random image from the folder and relys on feh to scale the image.

![output of one of the folders](https://i.imgur.com/vjiEYxD.png)

Finally, I appended a line to the i3 config to run the `new-wallpaper.sh` script
each time i3 is run or reloaded with

```bash
echo 'exec_always --no-startup-id ~/usr/bin/new-wallpaper.sh' >> ~/.config/i3/config
```

## Installing and Configuring Polybar <a name="install-polybar"></a>

Now that I got the wallpaper working, I removed the default KDE bar and
installed [polybar](https://github.com/polybar/polybar) instead. I already had
a polybar configuration that I was pretty happy with from my old laptop, so I
cloned my [repo](https://github.com/ksyasuda/Sudacode-Rice) to my new laptop and
appended the following command to the i3 config file (`~/.config/i3/config`)

```bash
echo 'exec_always --no-startup-id ~/.config/polybar/scripts/launch.sh'
```

The `launch.sh` script kills any running polybar instances and then starts a new
polybar instance.

Because my old latop was 1080p and my new laptop is 4k, the font size and
overall size of the bar was a little off. So, I changed all the font size to 20 and changed the dpi to 100 to get the proportions right.

![polybar image](https://i.imgur.com/CJpuEWs.png)

I will more into depth on my Polybar configuation in a future blog post.

## Installing Picom and Setting up my Config <a name="install-picom"></a>

The next task was to install a compositor. On my Arch system, I had used a fork of
i3-gaps, called i3-gaps-rouned-corners in order to get the rounded corner
effect. However, I learned recently about [ibhagwan's picom fork](https://github.com/ibhagwan/picom) that has both
rounded-corners and blur capabilities. Since it is a fork of the original
Picom, it was compatible with my old configuration file.

In order to use the rounded corners feature I added the line `corner-radius = 15`
to the `~/.config/picom/picom.conf` file.

For the blur feature, I added the lines

```
blur: {
  method = "dual_kawase";
  strength = 8;
  background = false;
  background-frame = false;
  background-fixed = false;
}
```

With that, I had transparent and blurred windows with rounded corners.

![desktop img](https://i.imgur.com/HJ472NZ.png)

## Rofi Scripts <a name="rofi-scripts"></a>

I have polybar modules and scripts that use [rofi](https://github.com/davatorium/rofi)
to create different application launchers, menus, and a window switcher.

### Examples

Full-screen application launcher

![fullscreen menu](https://imgur.com/sr3D7SL.png)

Customized [rofi-bluetooth](ihttps://github.com/ClydeDroid/rofi-bluetooth)

![rofi-bluetooth](https://imgur.com/i0z3Q87.png)

Tab Switcher

![tab switcher](https://imgur.com/2vmgRYN.png)

All of the scripts and configuration files can be found in [this repo](https://github.com/ksyasuda/Sudacode-Rice)

## Installing and Launching KDE Applets <a name="kde-applets)></a>

In the past, when I had used KDE Plasma in a virtual machine, I had used found and used two applets: [Event Calendar](https://github.com/Zren/plasma-applet-eventcalendar), and [TodoList](https://github.com/Zren/plasma-applet-todolist).

In order to use KDE applets with the i3 window manager, I used `plasmawindowed` and a setting in my i3 config file to force the applets to workspace 4. To make it easier to launch these apps on startup, I wrote two separate scripts that I run from the i3 config file.

```bash
# ~/scripts/calendar.sh
plasmawindowed org.kde.plasma.eventcalendar &
```

![applets](https://i.imgur.com/Ly9LhIQ.png)
