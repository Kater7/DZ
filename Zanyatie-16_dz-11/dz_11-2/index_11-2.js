const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', function() {
    const jobDescription = document.getElementById('job-description').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobsList = document.getElementById('jobs-list');

    const fileForJobsSearch = `https://jobs.github.com/positions.json?description=${jobDescription}&location=${jobLocation}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileForJobsSearch, true);
    xhr.onload = function() {
        const data = JSON.parse(xhr.response);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            jobsList.insertAdjacentHTML('beforeend', `<div class="place">
            <div class="first-line"><span class="my-text">${i+1}. </span><span class="my-text">${data[i].title}</span></div>
            <div><span class="my-text">Дата публикации вакансии - </span> <span class="text">${data[i].created_at}</span></div>
            <div><span class="my-text">Компания -  </span><span class="text">${data[i].company}   </span> <img src="${data[i].company_logo}"></div>
            <div><span class="my-text">Сайт компании: </span><span class="text">${data[i].company_url}</span></div>
            <div><span class="my-text">Местонахождение - </span> <span class="text">${data[i].location}</span></div>
            <div><span class="my-text">Тип вакансии - </span> <span class="text">${data[i].type}</span></div>
            <div><span class="my-text">Описание вакансии: </span> <span class="text">${data[i].description}</span></div>
            <div><span class="my-text">Ссылка на вакансию на GitHub: </span> <span class="text">${data[i].url}</span></div>
            </div>`);
        }
    }
    xhr.send(null);

});