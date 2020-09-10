---
path: "/blog/lesser-known-git-commands"
date: "2020-09-09"
title: "Lesser known git commands"
tags: ["git"]
excerpt: "This post is an ongoing of git commands that may be lesser known."
---

There's a lot of excellent git tutorials on the web, such as [this excellent one](https://learngitbranching.js.org/). I don't know about you but there's only a handful of git commands I use in my day to day. Ergo, there's likely numerous helpful commands I don't know.

This document is a way for me to keep track of a bunch of git commands that I may not use frequently but still find helpful. I hope you may find this document helpful as well!<br/><br/>

#### 01. multi-line git commit messages

Use the `-m` flag multiple times in your git commit message to include.

```git
git commit -m "first comment" -m "second comment"
```

This does the same thing as pressing enter on your terminal after typing:

```git
git commit -m "
> first comment
> second comment
> "
```

#### 02. git describe

This isn't a command I used at all until I started my full-time job as a software engineer and even then, I only started using it after a coworker showed me how. It's a pretty nifty command if you use tags in your git repo.

```git
git describe --contains <commit> # shows the associated tag
```

#### 03. git stash

A year ago from the start of this document, I would stash my unwanted changes and then ignore them. I would later learn that `git stash` can be quite a powerful tool for managing changes in git. Notes that `git stash pop` is the same as running `git stash pop stash@{0}`.

```git
git stash # stashes the most current change(s)
git stash pop # applies the top-most stashed change
git stash list # lists all stashed changes
git stash pop stash@{n} # applies the n-th stashed change 
git stash clear # clears all stashed changes
```

#### 04. git amend

I often make mistakes in my commit messages. This command is a simple way to amend your last commit message (hence, the name):

```git
git commit --amend -m "your new message goes here"
```

To be updated!