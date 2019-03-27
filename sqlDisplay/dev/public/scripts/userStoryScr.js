
function setUpLayout() {
    const layoutData = JSON.parse(document.querySelector('.story_info').innerHTML)[0];
    document.querySelector('.story_info').remove();

    let newStoryDate = new Date(layoutData.date_created);

    document.querySelector('.main__body__story-sec__title').innerHTML = layoutData.title;
    document.querySelector('.main__body__story-sec__desc').innerHTML = layoutData.description;
    document.querySelector('.main__body__story-sec__body').innerHTML = layoutData.body;
    document.querySelector('.main__body__story-sec__misc__author__link').innerHTML =  layoutData.author + ', ';
    document.querySelector('.main__body__story-sec__misc__date').innerHTML = newStoryDate.toDateString();

    console.log(newStoryDate);
}


onload = () => {
    
    setUpLayout();
}