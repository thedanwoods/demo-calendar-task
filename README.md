## Getting started

```
$ git clone https://github.com/thedanwoods/demo-calendar-task.git
$ cd demo-calendar-task
$ npm install
$ npm start
```
or view it live at https://thedanwoods.github.io/demo-calendar-task/

## Description

This renders a month view of a calendar and allows you to create, update and delete reminders.

#### Original instructions

> The aim of this exercise is to create a demo calendar application using React & Redux. You should take no more than 1h30m to complete this task.
> You should start by rendering a single month view of a calendar for the current month - along the lines of the below illustration:
 
> Once this is rendered, please implement as many of the following requirements as time allows.
> 1)	Ability to add a new “reminder” (max 30 chars) for a user entered day and time. 
> 2)	Display reminders on the calendar view in the correct time order.
> 3)	Allow the user to select a colour when creating a reminder and display it appropriately.
> 4)	Properly handle overflow when multiple reminders appear on the same date.
> 5)	Ability to edit reminders – including changing text, day and time & colour.
> 6)	Ability to delete reminders.
> 7)	Expand the calendar to support more than current month.

The application implements all these features, but inevitably this means it takes rather more than 1h30m.

## To do

  * Make alternative layout for mobile devices
  * Audit and improve styling
  * Colour picker should overlay content, not push it down
  * Consider persisting state to localstorage
  * When you add a reminder in another month, we should jump to that month
  * Accessibility audit/improvements - e.g. days are not tabbable and I think it is hard/impossible to add a reminder using keyboard only
  