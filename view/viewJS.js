const leaderboard = document.getElementById('leaderboard-body');
const btn = document.getElementById('leaderboard-header');

const languageCard = (name, count, repos) => {

    const card = document.createElement('article');
    card.className = 'leaderboard__profile';

    card.innerHTML = `
        <span class="leaderboard__name">${name}</span>
        <span class="leaderboard__value">${count}<span>repositories</span></span>`;

    const descripto = document.createElement('ul');
    descripto.className = 'leaderboard__descripto';

    repos.forEach(e => {
        descripto.innerHTML += `<li>${e}</li>`;
    });

    card.appendChild(descripto);

    return card;
};




/**
 * 
 * -------- Logic Actions ------ 
 */



/**
 * 
 * @param {String} URL A string URL you going to use for fetching repositories 
 */
const getData = async() => {
    leaderboard.innerHTML = '<h1>  Featching Please Wait .....</h1>';


    const URL = '/list';
    const response = await fetch(URL)
        .then(res => {
            if (!res.ok)
                throw new Error('The response was not OK');

            return res.json();
        }).then(data => {

            //Reset innerHtml
            leaderboard.innerHTML = '';

            //Loop over every language in data object and create a separate card for each of them
            for (const language in data) {

                const name = language;
                const count = data[name].count;
                const repos = data[name].repos;
                leaderboard.appendChild(languageCard(name, count, repos));

            }





        }).then(() => {
            //Add Event listener to each language card
            document.querySelectorAll('.leaderboard__profile').forEach((element) => {
                element.addEventListener('mouseup', showSublist);
            });

        }).catch((error) => {
            alert(error)
        });

}





const showSublist = e => {
    const child = e.currentTarget.querySelector('.leaderboard__descripto');
    child.style.display = 'block';
}

/**
 * we're going to calculate whole page x and y coordinates 
 * Also we get the main leaderboard coordinates then compare 
 * to see if the mouse cursor is outside the main border to hide them
 */
const hideSublist = e => {


    const border = leaderboard.getClientRects()[0];
    const borderX = e.clientX < border.left || e.clientX > border.right;
    const borderY = e.clientY < border.top || e.clientY > border.bottom;
    const desc = document.querySelectorAll('.leaderboard__descripto');


    if (desc != undefined && (borderX || borderY)) {
        desc.forEach(e => e.style.display = 'none');
    }
}


btn.addEventListener('mouseup', getData);
document.addEventListener('mouseup', hideSublist);