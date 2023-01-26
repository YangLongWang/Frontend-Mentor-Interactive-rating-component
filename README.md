# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- Can repeatedly select number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Frontend%20Mentor%20-%20Interactive%20rating%20component1.png)
![](./images/Frontend%20Mentor%20-%20Interactive%20rating%20component2.png)

### Links

- Solution URL: [https://github.com/YangLongWang/Frontend-Mentor-Interactive-rating-component](https://github.com/YangLongWang/Frontend-Mentor-Interactive-rating-component)
- Live Site URL: [https://yanglongwang.github.io/Frontend-Mentor-Interactive-rating-component/](https://yanglongwang.github.io/Frontend-Mentor-Interactive-rating-component/)

## My process

### Built with

- HTML5
- CSS3 custom properties
- JS
- Flexbox
- Mobile-first workflow

### What I learned

- highlight the button after clicking a number rating

To see how you can add code snippets, see below:

```js
const highlight = (event) => {
  if (!score) {
    event.target.classList.add("highlight");
  } else {
    const btnHighLight = rating.querySelectorAll("button");

    btnHighLight.forEach((i) => {
      if (i.matches(".highlight")) {
        i.classList.remove("highlight");
      }
      event.target.classList.add("highlight");
    });
  }
  score = event.target.value;
};
```

## Author

- Github - [longyang Wang](https://github.com/YangLongWang)
- Frontend Mentor - [@Longyang Wang](https://www.frontendmentor.io/profile/YangLongWang)
