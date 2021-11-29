

function init() {

}


var storageFiles = JSON.parse(localStorage.getItem("storageFiles")) || {},
    user = document.getElementById("user");

if(storageFiles.user != null){
    user.src = storageFiles.user;
}

window.addEventListener('load', function() {
    this.document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            user.onload = () => {
                URL.revokeObjectURL(user.src);  // no longer needed, free memory
            }
  
            user.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
        var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

        // Make sure canvas is as big as the picture
        imgCanvas.width = user.width;
        imgCanvas.height = user.height;

        // Draw image into canvas element
        imgContext.onload = function() {
            imgContext.drawImage(user, 0, 0, user.width, user.height);
        };
        // Save image as a data URL
        storageFiles.user = imgCanvas.toDataURL("image/png");

        // Save as JSON in localStorage
        try {
            localStorage.setItem("storageFiles", JSON.stringify(storageFiles));
        }
        catch (e) {
            console.log("Storage failed: " + e);
        }
    })
})

