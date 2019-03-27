
function setUpLayout() {
    const layoutData = JSON.parse(document.querySelector('.story_info').innerHTML)[0];
    document.querySelector('.story_info').remove();

    
    console.log(layoutData);
}


onload = () => {
    
    setUpLayout();
}