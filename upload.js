
//TODO: Create json hash as a global variable that can be changed
//TODO: On file upload, update the new JSONDB hash  
function validateFormOnSubmit(theForm) {
    var reason = "";
    reason += validateAudio(theForm.audio.value);
    reason += validateName(theForm.name.value);
    reason += validateArtist(theForm.artist.value);

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        alert("Success")
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
        return "";
      }
  }
