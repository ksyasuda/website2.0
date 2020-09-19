---
title: "Installing Arch Linux on my Old Laptop"
date: "9/13/2020 11:35 AM"
subject: "Setup"
default_height: "1050vh"
laptop_height: "1800vh"
phone_height: "1800vh"
---

---

<br />

<h2>Introduction</h2>

At the start of my Junior year at the University of Michigan, I had to to upgrade my 5 year old laptop as the laptop that I was using at the time would only last about 45 minutes on battery. That laptop had been sitting in my closet for the past year until this summer when I brought it home with me and installed Arch Linux

_This is not meant to be an installation guide, but rather an account of my experience during setup and customization._

<br />

---

<br />

## Sections

-   [Downloading the ISO](#download-iso)
-   [Creating a live USB](#create-usb)
-   [Booting from the newly created live USB](#boot-usb)
-   [Partitioning the Disk](#partition-disk)
-   [Creating the File System](#create-filesys)
-   [Connecting to WiFi](#wifi)
-   [Select the Arch mirrors](#mirrors)
-   [Mount the file system](#mount)
-   [Configure Arch](#configure-arch)
-   [Installing GRUB Bootloader](#grub)
-   [Setting up a sudo user](#sudouser)
-   [Installing KDE Plasma](#kde)

<br />

---

<br />

## Downloading the ISO <a name="download-iso"></a>

First I downloaded the ISO file as a torrent file from the [offial download page](https://www.archlinux.org/download/ "Arch Linux Download")
![Arch Linux Download page](https://i.imgur.com/ITdI3gF.png)

I used an online tool to extract the ISO from the torrent
<br />

---

<br />

## Creating a live USB <a name="create-usb"></a>

I used the GUI tool [Etcher](https://www.balena.io/etcher/ "Etcher homepage") to create the live USB
![etcher gif](https://imgur.com/gAlzWI0.gif)

Etcher is very user friendly tool that makes creating a live USB almost trivial
You have to:

-   Plug in a USB flash drive
-   Select the Arch Linux ISO as the image
-   Select the flash drive as the destination
-   Click the Flash button to begin flashing the drive

Once complete, eject the flash drive and remove it from the computer/laptop
<br />

---

<br />

## Booting from the newly created live USB <a name="boot-usb"></a>

Next I plugged the USB into the computer I wanted to install Arch on

As I did not know the input to get into the system BIOS, I repeatedly pressed F2, F10, and F12 (the typical inputs to get into BIOS) until I reached the BIOS

Once in the BIOS, I went into the boot settings and changed the boot mode to Arch Linux (EFI)

After saving and restarting, Arch Linux will boot and log into the machine as the root user

<br />

---

<br />

## Partitioning the Disk <a name="partition-disk"></a>

Next I had partitioned the disk as an UEFI system

In order to ensure that I had UEFI mode enabled, I used the command `ls /sys/firmware/efi/efivars`

Because the directory was present on my system, UEFI was enabled and I could continue the installation using EFI

Becuase this computer had been used previously, I had to wipe the drives and remove the old partitions before I started creating my own partitions

To list all the disks and partitions on the device use `fdisk -l`

What came up for me was one disk, `/dev/sda` with 3 partitions: `/dev/sda1`, `/dev/sda2`, and `/dev/sda3`

To edit the drive, `/dev/sda`, run `fdisk /dev/sda`

Once in fdisk, I used the `d` command 3 times to remove the 3 existing partition on the disk

Then, I used the `n` command to create a new partition

After entering `n`, press enter to accept the default disk number (1 in this case)

Next press enter again when prompted to accept the default block size

Finally, for the partition size, enter +512M for 512MiB

Next you have to set the type of the partition to EFI system

The `t` command brings up the menu to change partition types and to list all available types, press `L` in the partition type menu

After finding the number that corresponds to EFI system, enter it into the prompt in the `t` command when it asks `Selected Partition:`

Next I created a single root partiton and went without a swap or home partition

While in the `fdisk` prompt still, run the `n` command once more and press enter each time when prompted to accept all the defaults and allocate the remainder of the disk

Once done, run the `w` command to write the changes to the disk and then exit out of fdisk

<br />

---

<br />

## Creating the File System <a name="create-filesys"></a>

Now that the disk is partitioned, we have to create the file system

First, create a [FAT32 file system](https://en.wikipedia.org/wiki/File_Allocation_Table#FAT32 "FAT wikipedia") using this command:

```bash
mkfs.fat -F32 /dev/sda1
```

Next, create an Ext4 file system on the root partition:

```bash
mkfs.ext4 /dev/sda2
```

<br />

---

<br />

## Connecting to WiFi <a name="wifi"></a>

Next, use [iwctl](https://wiki.archlinux.org/index.php/Iwd#iwctl "iwctl wiki page") to authenticate to the wireless network

Run `iwctl` to bring up the iwctl prompt

Use `device list` to list the available WiFi devices on the system

Then run `station [device] scan` with the name of the WiFi device found in the previous step in place of [device] to scan for networks

To list all networks found in the previous step run `station [device] get-network`

Finally, connect to your network with: `station [device] connect SSID`, where SSID is the name of your network

Then configure the network with [dhcpcd](https://wiki.archlinux.org/index.php/Dhcpcd "dhcpcd wiki page") using the default configurations

Once completed, run `ping www.google.com` and it should respond if the WiFi was set up correctly

<br />

---

<br />

## Select the Arch mirrors <a name="mirrors"></a>

For this step, I used [Reflector](https://wiki.archlinux.org/index.php/Reflector "Reflector wiki page") to select the best Arch mirrors, sorted by speed, and overwrite the file at `/etc/pacman.d/mirrorlist`

First, run `pacman -Syy` so sync the pacman repo so that you can Reflector

Next, install Reflector with `pacman -S reflector`

I created a backup of the default mirrorlist file by running:

```bash
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
```

Then run Reflector with:

```bash
reflector -c "US" -f 12 -l 10 -n 12 --save /etcpacman.d/mirrorlist
```

<br />

---

<br />

## Mount the file system <a name="mount"></a>

Next, mount the file system with `mount /dev/sda2 /mnt`

Now that the file system is mounted, we have to install all essential packages (and any others you want) using `pacstrap`

Run `pacstrap /mnt base linux linux-firmware vim nano man-db man-pages texinfo base-devel` to install essential packages like linux and some non-essential but important packages like vim (text editor) and man-pages (documentation for linux commands)

**_Now to configure Arch:_**

First we create a fstab file to define how the partition is mounted into file system

Now run `arch-chroot /mnt` to enter into the mounted disk as the root user

Now everything being done is directly on the Arch system installed on the disk

<br />

---

<br />

## Configure Arch <a name="configure-arch"></a>

To set the timezone run, `timedatectl list-timezones`, which will list all available timezones

I then ran `timedatectl set-timezone America/Detroit`

Now we have to set up our locale

Open up `/etc/locale.conf` in a text editor and add `LANG=en_US.UTF-8`, then save and quit

Next open up `/etc/locale.gen` and add `en_US.UTF-8 UTF-8` to the beginning of the file, then save and quit

Finally run `locale-gen`

Create a file `/etc/hostname` that contains what you want to call your machine, then save and quit

In my case I called my machine `myarch`

Open up `/etc/hosts` and add the following lines:

```bash
127.0.0.1	localhost
::1 		localhost
127.0.1.1 	hostname.localdomain hostname
```

Where hostname is the name you put in `/etc/hostname`

To create a root password run `passwd` and enter in a password
<br />

---

<br />

## Installing GRUB Bootloader <a name="grub"></a>

Next I installed the [GRUB bootloader](https://wiki.archlinux.org/index.php/GRUB "GRUB wiki page") and a package needed for UEFI systems with pacman -S grub efibootmgr

Run `mkdir /boot/efi` to create the directory for the EFI partition

Next mount the partition to the created directory with `mount /dev/sda1 /boot/efi`

To install grub run this command:

```bash
grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi
```

Finally, run `grub-mkconfig -o /boot/grub/grub.cfg` to generate the
configuration for GRUB

<br />

---

<br />

## Setting up a sudo user <a name="sudouser"></a>

I chose to install KDE Plasma as my desktop environment and in order to use KDE,
you must create a user that is not root

Run the command `useradd -m sudacode` to create a new user named sudacode with a
named home directory

Then run `passwd sudacode` and enter in a password for the new user

Next use the command `EDITOR=vim visudo` and uncomment the line that has `%wheel ALL=(ALL) ALL` to allow members of the wheel group to execute any command

<style>
	img[src*="#sudoers"] {
		position: relative;
		left: 5px;
	}
</style>

![](https://i.imgur.com/m5xpc0r.png#sudoers)

Finally, add the new user to the wheel group with `usermod -G wheel sudacode`

Now reboot and login as the new user instead of the root user
<br />

---

<br />

## Installing KDE Plasma <a name="kde"></a>

Now to install the KDE Plasma desktop environment

First we have to install some packages with:

```bash
sudo pacman -S xorg plasma plasma-wayland-session kde-applications
```

Once installed, enable both the display manager and network manager with
[systemd](https://wiki.archlinux.org/index.php/systemd "systemd wiki page"):

```bash
systemctl enable sddm.service
systemctl enable NetworkManager.service
```

Now run `sudo reboot` and you should be at the KDE login screen

If, like me, you don't want to boot into KDE immediately and instead boot into
the Arch console, reboot the computer and wait for the GRUB menu to come up

Run the command `sudo systemctl set-default multi-user.target` to make your
system always boot to the console

This command puts the default systemd target into text mode. If you don't know
your default systemd target run `systemctl get-default`

To undo this change and always boot into KDE, run `sudo systemctl set-default graphical.target`

After doing either of these commands, run `sudo reboot` to complete the changes

And with that, Arch Linux with KDE Plasma has successfully been installed

![KDE Plasma](https://i.imgur.com/NvytMF4.jpg)
