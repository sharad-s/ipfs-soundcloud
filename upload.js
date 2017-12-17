
//TODO: Create json hash as a global variable that can be changed
//TODO: On file upload, update the new JSONDB hash
var ipfs = window.IpfsApi();

function validateFormOnSubmit(form) {
    var reason = "";
    reason += validateAudio(form.audio.value);
    reason += validateName(form.name.value);
    reason += validateArtist(form.artist.value);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        //TODO: Upload file to IPFS
        console.log(form.audio.value)    //returns path to file, not file itself
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
