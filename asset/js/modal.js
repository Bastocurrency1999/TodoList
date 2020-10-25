// function to hide and unhide modal box

// hide the modal box
hideModal = document.getElementById('modal').style.cssText = "display:none;";

function showModalBox()
{
    hideModal = document.getElementById('modal').style.cssText = "display:block; transition:900ms ease-in-out;";
}

function hideModalBox()
{
    document.getElementById('modal-btn');
    hideModal = document.getElementById('modal').style.cssText = "display:none;";

}