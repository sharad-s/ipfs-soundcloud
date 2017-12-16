# angular-audio-player
From HTML5 audio player repo, with AngularJS.

## Disclaimer on audio files
This repo is under the MPL-2.0 lisence.
However, please noticed that **the licence does NOT include audio files**.
You should handle audio files' copyright issue by yourself.

## How to add song
`$scope.list` in `player.js` likes playlist in player software.
To use it, you need to know site of audio file, and name of audio file.
Then, label audio name in `name` name's value, audio file in `src` name's value. Like following:
```json
{
    name:"Foobar music",
    group:"",
    src:"https://www.example.com/foobar.mp3"
},
```
`group` is not essential, it's used for grouping files.

## To do list
* End song hehavior: when song ended, porgram will do what user want, like HTML5-audio-player repo.
