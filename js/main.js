
function getQr(){
    let inputText = document.getElementById('inputText').value;
    const container = document.querySelector('.container');
    const mainContainer = document.querySelector('.main-container');
    const qrImg = document.getElementById('qrImg');

    const responce = `https://quickchart.io/qr?text=${inputText}&light=2e80fa&dark=ffffff&size=500`;
    


    container.style.display = 'flex';
    mainContainer.style.display = 'none';
    qrImg.src = responce;
    
}

function getQr2(){
    let inputText = document.getElementById('inputText2').value;
    const qrImg = document.getElementById('qrImg');
    const done = document.getElementById('done');

    const responce = `https://quickchart.io/qr?text=${inputText}&light=2e80fa&dark=ffffff&size=500`;
    
    qrImg.src = responce;
    done.textContent = 'Done!'
    
}



// container.style.display = 'flex';
// mainContainer.style.display = 'none';