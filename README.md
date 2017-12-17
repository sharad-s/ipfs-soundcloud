# angular-audio-player
From [HTML5 audio player repo, with AngularJS.](https://github.com/iigmir/angular-audio-player).
Modified to load and stream songs from IPFS.

## Usage
To use the site as a music streamer, simply `git clone` and open index.html.
Alternatively, you can view the site as it's hosted on IPFS [here.](https://ipfs.io/ipns/QmTgbSay5Lj6mBwkzTSAfjTZKkUKjywiW1pf5QL1eLAXMB/)



## Uploading a song
File uploading is still a work in progress.
Tracks are currently manually uploaded to IPFS and added as entries in `songs.json`.
Tracks are streamed from IPFS using their hash as referenced in `songs.json`.
The format for a streamable song entry stored on IPFS is as follows:
```json
{
    name:"<Song Name>",
    artist:"<Artist>",
    src:"<Hash of Song>"
},
```
Simply `ipfs add` your song, and add its entry to `songs.json` to play it.

## To do list
* Uploading functionality
* Immediate update of streamable songs after `ipfs add`-ing a new upload through website.
* Possibly Implementing IPDB - JSON Database is hacky and vulnerable


## Disclaimer on audio files
This repo is under the MPL-2.0 license.
However, please noticed that **the license does NOT include audio files**.
You should handle audio files' copyright issue by yourself.
