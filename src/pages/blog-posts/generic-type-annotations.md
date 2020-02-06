---
path: "/blog/generic-type-annotations"
date: "2020-02-04"
title: "Handling Generic Type Annotation Errors in F#"
tags: ["F#", "Error Handling"]
excerpt: "This post will cover why users may see a generic type annotation error while working with F# and the various ways to handle this error."
---
Let's say we have this function written in F# we want to run:

```fs
type Choices = A | B | C | D
let fun c : myChoice<'letter> =
    match c with
    | A | B | C -> "a or b or c"
    | D -> "d"
    | _ -> "unknown"
let choice = fun A
printfn "%A" choice
```

The following F# error gets thrown because a type was declared that has a generic type:

```
warning FS0064: This construct causes code to be less generic than indicated by the type annotations. The type variable 'PolygonShape has been constrained to be type 'string'.
```

There are several ways to handle this error:

I. Remove the Type Annotation Completely

If it's not strictly needed, you can remove the type annotation from the function

```fs
type Choices = A | B | C | D
let fun c =
    match c with
    | A | B | C -> "a or b or c"
    | D -> "d"
    | _ -> "unknown"
let choice = fun A
printfn "%A" choice
```

II. Replace the Type Annotation with an underscore

```fs
type Choices = A | B | C | D
let fun c : myChoice<_> =
    match c with
    | A | B | C -> "a or b or c"
    | D -> "d"
    | _ -> "unknown"
let choice = fun A
printfn "%A" choice
```

III. Define

Remove the apostrophe and ...

```fs
type Choices = A | B | C | D
let fun c : myChoice<letter> =
    match c with
    | A | B | C -> "a or b or c"
    | D -> "d"
    | _ -> "unknown"
let choice = fun A
printfn "%A" choice
```
