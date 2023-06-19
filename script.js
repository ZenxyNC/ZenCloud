var imageInput = document.getElementById('image-input');
imageInput.addEventListener('change', handleImageUpload);
var containers = document.getElementById('positioning');
var imgamount = parseInt(localStorage.getItem('ZenCloudIDSave'));
if (imgamount >= 1) {
    let count_uploader = 1;
    let idToAdd = 'ZenCloudID' + count_uploader
    while (true) {
        var imagesdisplay = document.createElement('img');
        var idsave = idToAdd;
        imagesdisplay.src = localStorage.getItem(idsave);
        containers.appendChild(imagesdisplay);
        count_uploader++
        if (count_uploader == imgamount) {
            break;
        }
    }
}
function save(){
    var localnumericverify = localStorage.getItem('ZenCloudIDSaveVerify');
    if (localnumericverify != 'ID Verified with code zencloud2308') {
        localStorage.setItem('ZenCloudIDSaveVerify', 'ID Verified with code zencloud2308');
        localStorage.setItem('ZenCloudIDSave', 0)
    } else {
        var localnumeric = parseInt(localStorage.getItem('ZenCloudIDSave'));
        var numericID = localnumeric + 1;
        localStorage.setItem('ZenCloudIDSave', numericID)
        var ID = 'ZenCloudID' + numericID;
        console.log(numericID, ID)
    }
    var selectedFile = imageInput.files[0];
    var imageData = event.target.result;
    localStorage.setItem(ID, imageData);
    console.log('Saved');
}
function handleImageUpload(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    var reads = selectedFile.type;
    var readtype = reads.includes('image');
    if (readtype == false) {
        alert('Unsupported file type')
    } else {
        reader.onload = function(event) {
            var imgsrc = event.target.result;
            var container = document.getElementById('positioning');
            var image = document.createElement('img');
            image.src = imgsrc;
            container.appendChild(image);
            save();
        }
    }
    reader.readAsDataURL(selectedFile);
    imageInput.value = null;
}