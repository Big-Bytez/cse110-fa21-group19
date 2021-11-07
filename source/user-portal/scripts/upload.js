

function init() {

}


let upload = document.getElementById('upload');
if(upload){
    /* Unsure how to correctly set/use localStorage */
    upload.addEventListener('change', (event) => {
        let userImg = document.getElementById('user');
        localStorage.setItem('userImg', userImg);
    })
}

