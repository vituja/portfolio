<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap");

:root {
  --main-dark-color: #1a1c33;
  --secondary-dark-color: #252525;
  --main-light-color: #ffffff;
  --complementary-light-color: #f2f4f3;
  --main-complement-color: #d80032;
  --secondary-complement-color: #ffffff33;
}
/* ############# */
/* Global styles */
/* ############# */
*,
*:before,
*:after {
  font-family: "Nunito Sans", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:focus:not(:focus-visible) {
  outline: none;
}
html {
  scroll-behavior: smooth;
  font-size: 16px;
}
body {
  overflow-x: hidden;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
p {
  font-size: 1rem;
  line-height: 1.4;
  margin: 0.6rem 0 1rem 0;
}
section {
  position: relative;
  overflow: hidden;
}
h1,
h2,
h3,
h4 {
  text-align: center;
}
h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.33em;
  margin-bottom: 0.5em;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    bottom: -1px;
    width: 50px;
    height: 0.5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: lightgray;
  }
}
section + section,
footer {
  padding: 7em 0;
  text-align: center;
  & > * {
    width: 90vw;
    max-width: 90ch;
    margin: 0 auto 0 auto;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.625em;
  }
}
/* #################### */
/* Global custom styles */
/* #################### */
.underline {
  text-decoration: underline;
}
.no-scroll {
  overflow: hidden;
}
.link {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0px;
  color: var(--secondary);
  text-decoration: underline;
  transition: all 0.15s ease-in-out 0s;
}
.link--bold {
  font-weight: bold;
}
.text--highlighted {
  color: var(--main-complement-color);
}
/* ########## */
/* Navigation */
/* ########## */
.navbar {
  position: fixed;
  bottom: 0;
  right: 0;
  justify-items: center;
  align-content: center;
  z-index: 100;
  transform: translate(-30%, -30%);
  background: var(--main-complement-color);
  border-radius: 50%;
}
.navigation {
  position: absolute;
  overflow: hidden;
  width: 11ch;
  bottom: 66%;
  right: 66%;
  background: var(--main-light-color);
  border: 2px var(--main-dark-color) solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.navigation__link {
  position: relative;
  padding: 0.5rem;
  color: var(--main-dark-color);
  transition: all 0.15s ease-in;
}
.navigation__link:not(:last-of-type)::after {
  content: "";
  position: absolute;
  height: 1px;
  bottom: -0.5px;
  left: 0;
  right: 0;
  background-color: var(--main-dark-color);
}
.navigation__link:hover {
  font-weight: bold;
  color: var(--main-light-color);
  background-color: var(--main-dark-color);
}
/* ############ */
/* Hero Section */
/* ############ */
.hero {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding-bottom: 7em;
  min-height: 85vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--main-dark-color);
}
.hero__head {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: start;
  margin: 0 0.8rem 1rem 0.8rem;
}
.language {
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  color: var(--main-light-color);
}
.contact {
  color: var(--main-light-color);
  display: grid;
  justify-content: start;
  gap: 1rem;
}
.contact__item {
  color: var(--main-light-color);
  display: flex;
  align-items: center;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--main-complement-color);
  }
  svg {
    margin-right: 0.5rem;
    height: 1em;
    width: auto;
  }
}
.social {
  color: var(--main-light-color);
  display: grid;
  justify-content: end;
  gap: 0.4rem;
}
.social__item {
  svg {
    padding: 0.5rem;
    color: var(--main-light-color);
    border: 1px solid var(--main-light-color);
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem !important;
    transition: all 0.2s ease-in-out;
  }
  &:hover svg {
    color: var(--main-complement-color);
    border: 1px solid var(--main-complement-color);
  }
}
.hero__main {
  align-self: center;
  margin: 0 auto;
  width: 80ch;
  max-width: 80vw;
}
.logo {
  display: inline;
  margin-left: auto;
  margin-right: auto;
}
.logo--big {
  width: 100%;
  max-width: 800px;
}
.job {
  margin: 1rem auto 1rem auto;
  color: var(--main-light-color);
  text-align: center;
  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
}
.job__cta {
  display: flex;
  justify-content: center;
  .mdn-btn {
    margin: 5%;
    font-size: 1rem;
  }
}
/* ####### */
/* Service */
/* ####### */
.service {
  background: rgb(248, 248, 248);
}
.service__header {
  width: 100vw;
  max-width: 90ch;
  margin: 0 auto 3em auto;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.service__group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

/* #### */
/* Work */
/* #### */
.portfolio {
  box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
}
.work__info {
  display: grid;
  justify-content: center;
  margin-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  > * {
    margin-bottom: 20px;
  }
  h3 {
    position: relative;
    font-size: 23px;
  }
  h4 {
    position: relative;
    margin-top: 2em;
  }
  h3,
  h4 {
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 50px;
      height: 0.5px;
      left: 50%;
      transform: translateX(-50%);
      background-color: lightgray;
    }
  }
}
.work__offer {
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 20px;
      flex: 1 1 320px;
    }
  }
}
.info-card__bg-big {
  position: absolute;
  right: 0;
  top: 0;
  height: 70%;
  z-index: -1;
  fill: rgba(27, 39, 209, 0.05);
  transform: translate(40%, 30%);
}
/* ##### */
/* About */
/* ##### */
#about {
  background: rgb(248, 248, 248);
  h3 {
    position: relative;
    margin: 3rem auto 1rem auto;
    font-size: 23px;
    font-weight: 600;
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 50px;
      height: 0.5px;
      left: 50%;
      transform: translateX(-50%);
      background-color: lightgray;
    }
  }
}
.technology__info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    margin: 5px;
  }
}
/* ####### */
/* Contact */
/* ####### */
#contact {
  position: relative;
  width: 100vw;
  color: var(--main-light-color);
  background: var(--main-dark-color);
  > * {
    z-index: 1;
  }
  p {
    margin-bottom: 3rem;
    a {
      color: var(--main-light-color);
      text-decoration: underline;
      transition: color 0.15s ease-out;
      &:hover {
        letter-spacing: initial;
        color: var(--main-complement-color);
      }
    }
  }
  form {
    padding-top: 2em;
  }
  form,
  form > * {
    z-index: 2;
  }
  .modal .modal__window article {
    * {
      text-align: left;
    }
    h2 {
      text-align: left;
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
    }
    h3 {
      font-size: 1.3rem;
      text-align: left;
      margin-bottom: 0.6rem;
      margin-top: 1.5rem;
    }
    ul {
      display: block;
      list-style-type: disc;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
    }
    p {
      margin-bottom: 1.2rem;
    }
    a {
      text-decoration: underline;
      color: -webkit-link;
      &:visited {
        color: purple;
      }
    }
  }
}

.keyboard {
  visibility: hidden;
  pointer-events: none;
  z-index: 0;
  bottom: 0;
  right: 0;
  transform: translateX(35%) rotate(-40deg);
}
/* ###### */
/* footer */
/* ###### */
footer {
  padding: 7em 0;
  text-align: center;
  background: var(--secondary-dark-color);
  > * {
    max-width: 80vw;
    margin: 1rem auto 1rem auto;
    color: rgba(255, 255, 255, 0.2);
  }
  .link-foot {
    position: relative;
    text-decoration: none;
    color: inherit;
    color: rgba(255, 255, 255, 0.4);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #eeeeee;
      &::after {
        position: absolute;
        content: "";
        height: 1px;
        left: 0;
        right: 0;
        width: 100%;
      }
    }
    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 0;
      left: 50%;
      bottom: 0;
      background-color: #eeeeee;
      transition: all 0.2s ease-in-out;
    }
  }
}
.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.btn-link {
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  align-items: center;
  width: max-content;
  color: rgba(255, 255, 255, 0.2);
  background: rgb(25, 25, 25);
  border-radius: 7px;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  > * {
    margin: 0.3em;
  }
  svg {
    max-height: 1.3rem;
    width: auto;
  }
  &:hover {
    cursor: pointer;
    background: rgb(187, 187, 187);
    color: rgb(25, 25, 25);
  }
}
.navigation--small {
  max-width: 60ch;
  margin: 0 auto 0 auto;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      width: 100%;
      a {
        display: inline-block;
        margin: 1rem 0;
        color: var(--secondary-complement-color);
        transition: color 0.3s ease-in-out;
        &:hover {
          color: #eeeeee;
        }
      }
    }
    li + li {
      border-top: 1px solid #5e5e5e;
    }
  }
}
.pop-enter-from,
.pop-leave-to {
  transform: scale(0);
}
.pop-enter-to,
.pop-leave-from {
  transform: scale(1);
}

.pop-enter-active,
.pop-leave-active {
  transform-origin: bottom right;
  transition: transform 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
@media screen and (min-width: 480px) {
  .work__info > * {
    margin: 20px;
  }
  .navigation--small {
    ul {
      display: flex;
      flex-direction: row;
      li {
        width: fit-content;
        a {
          margin: 0 1rem;
        }
      }
      li + li {
        border: none;
        border-left: 1px solid #5e5e5e;
      }
    }
  }
  .error {
    justify-content: center;
  }
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 768px) {
  .keyboard {
    visibility: visible;
  }
}
@media screen and (min-width: 900px) {
  html {
    font-size: 18px;
  }
  .tag {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 1200px) {
}
</style>
