
//TODO: Create json hash as a global variable that can be changed
//TODO: On file upload, update the new JSONDB hash
var ipfs = window.IpfsApi();
const Buffer = window.IpfsApi().Buffer;


function validateFormOnSubmit(form) {
    var reason = "";
    reason += validateAudio(form.audio.value);
    // reason += validateName(form.name.value);
    // reason += validateArtist(form.artist.value);

    //Empty Fields
    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    }

    //All Fields are Input
    else {
        var reader = getReader();
        //TODO: Any string can be converted into a compatible Buffer, but a Binary String Cannot be converted
        // ipfs.add(Buffer.from("String"), ...) works
        reader.onload = e => {
           var rawData = reader.result;

           ipfs.add(Buffer.from(rawData), (err, result) => {
             if (err || !result) {
               console.log(`Unable to upload to IPFS API: ${err}`);
             } else {
               console.log(result[0].hash);
             }
           })
        }
    }
    return false;
}


function getReader() {
  var file = document.getElementById('fileuploader');

  if(file.files.length) {
    var reader = new FileReader();
    reader.readAsBinaryString(file.files[0]);

     /*
    reader.onload = function(e) {
        var rawData = reader.result;
        console.log(rawData);
        return rawData;
    };
    */
    return reader

    //reader.readAsBinaryString(file.files[0]);
  }
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
