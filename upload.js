
//TODO: Create json hash as a global variable that can be changed
//TODO: On file upload, update the new JSONDB hash
var ipfs = window.IpfsApi();
const Buffer = window.IpfsApi().Buffer;


function validateFormOnSubmit(form) {
    var reason = "";
    reason += validateAudio(form.audio.value);
    // reason += validateName(form.name.value);
    // reason += validateArtist(form.artist.value);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        //TODO: Upload file to IPFS
          ipfs.add(Buffer.from(form.audio.value), (err, result) => {
            if (err || !result) {
              // keep upload tab and display error message in it
              console.log(`Unable to upload to IPFS API: ${err}`)
            } else {
              // close upload tab as it will be replaced with a new tab with uploaded content
              console.log(result)
            }
          })
    }
    return false;
}

function validateName(name) {
      if (!name) {
        return "Name ";
      } else {
        return "";
      }
  }

function validateArtist(artist) {
      if (!artist) {
        return "Artist ";
      } else {
        return "";
      }
  }

function validateAudio(file) {
      if (!file) {
        return "Audio File ";
      } else {
        console.log(file);
        return "";
      }
  }
