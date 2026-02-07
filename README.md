# Pomodoro Timer

A simple Pomodoro timer made with HTML, CSS, and JavaScript.  
The user can choose Focus minutes and Break minutes. The timer counts down and switches between Focus and Break automatically.

## Features
- Focus and Break modes
- User chooses minutes for Focus and Break
- Start / Pause / Reset buttons
- Automatic switch: Focus → Break → Focus
- Optional sound when time ends (using an `<audio>` element)

## How to Run
1. Download or clone this project.
2. Open `index.html` in your browser.
3. (If you use sound) Make sure your `alarm.mp3` file is in the same folder and the HTML has:
   `<audio id="alarmSound" src="alarm.mp3"></audio>`

## How It Works (Simple)
- The app stores time in **seconds** for easier countdown logic.
- Every second, `tick()` runs using `setInterval`.
- When time ends, the mode switches and the timer loads the next time.

## Tech Used
- HTML
- CSS
- JavaScript (Vanilla)

## Possible Improvements
- Show text on screen: “FOCUS” / “BREAK”
- Change colors based on mode
- Add long break after 4 pomodoros
- Save settings with LocalStorage
