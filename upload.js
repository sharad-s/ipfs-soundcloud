
//TODO: create json hash as a global variable that can be changed

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
      console.log(name);
      if (!name) {
        return "No Name ";
      } else {
        return "";
      }
  }

function validateArtist(artist) {
      console.log(artist);

      if (!artist) {
        return "No Artist ";
      } else {
        return "";
      }
  }

function validateAudio(file) {
      console.log(file);

      if (!file) {
        return "No Audio File ";
      } else {
        return "";
      }
  }
