
//Object to contain page's data
const indexSc = {

    createStoryBlock(data) {

        data.forEach(el => {
            const newStoryBlock = document.createElement('div');
            const newStoryTitle = document.createElement('h3');
            const newStoryDesc = document.createElement('p');
            newStoryTitle.innerHTML = el.title;
            newStoryDesc.innerHTML = el.description;
            newStoryBlock.classList.add('main__body__stories__block');
            newStoryTitle.classList.add('main__body__stories__block__title');
            newStoryDesc.classList.add('main__body__stories__block__desc');
            newStoryBlock.appendChild(newStoryTitle);
            newStoryBlock.appendChild(newStoryDesc);
            newStoryBlock.addEventListener('click', () => {
                window.open(`/stories/${el.story_id}`, '_self');
            })
            document.querySelector('.main__body__stories').appendChild(newStoryBlock);
        });
    }
}


onload = () => {
    const storiesData = JSON.parse(document.querySelector('.stories_data').innerHTML);

    indexSc.createStoryBlock(storiesData);

}