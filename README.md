
# Recollect

People always say -- writing something down is the best way to remember it -- and we figured typing it would be too! Transcribing lectures is nothing new, but a more interesting idea was taking that transcription, summarizing it, and then letting you type it out in a MonkeyType style browser game! Recollect is designed to be a supplementary learning tool that passively exposes users to course material of their choosing.

Built with React, Flask, Cohere API, Google Speech-To-Text API, and ffmpeg/moviepy for DeerHacks 2024!

**Landing Page**

![Landing](https://github.com/RobertMJin/Recollect-DeerHacks2024/assets/34868792/4514c3a6-097a-4c35-bd8d-6d8becd5947e")

**Video Upload Page**

![Video Upload Page](https://github.com/RobertMJin/Recollect-DeerHacks2024/assets/34868792/0d808eb6-9c30-4281-a0fa-c4352b80b5dd")
![Video Upload Page](https://github.com/RobertMJin/Recollect-DeerHacks2024/assets/34868792/665d0452-d64f-4f82-8f93-00f6a4655c87")

Upload a lecture, and as you watch the lecture, click on the "Clip" button at points of interest/focus. Short video snippets will then be taken from each of your button presses. These video snippets will then be transcribed, summarized, and used to generate typing prompts.

#### With Contributions By:
* Robert Jin - design, home page, layout, backend-frontend communication, typing game
* Kevin Shen - design, css, layout, javascript related to visuals
* Aidan Elliott-Korytek - half of the flask server and all of the API calls to cohere and google cloud
* Evan Tao - half of flask server, backend-frontend communication, video/audio processing with ffmpeg, help with typing game
