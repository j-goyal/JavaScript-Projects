console.log('Drag and Drop Utility');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('Dragstart');
    e.target.className += ' hold';

    // to hide from that box once we drag out
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

})


imgBox.addEventListener('dragend', (e) => {
    console.log('Dragend');
    e.target.className = 'imgBox';
    
});


for (whiteBox of whiteBoxes) 
{
    whiteBox.addEventListener('dragover', (e) => {
        console.log("Drag over has triggered");
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("Drag enter has triggered");
        e.target.className += ' dashed';
    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Drag leave has triggered");
        e.target.className = 'whiteBox';
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log("drop has triggered");
        e.target.append(imgBox);
    });

}



