const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const towns = jsonObject['towns'];
        for (let i = 0; i < jsonObject.towns.length; i++) {
            if (towns[i].name == 'Soda Springs') {
                let townnames = jsonObject.towns[i].events;
                townnames.innerHTML = " ";
                let twnevt = document.createElement('Section');
                for (i in towns[i].events) {
                    let eventArray = document.createElement('div')
                    eventArray.innerHTML = `${townnames[i]}`;
                    twnevt.setAttribute('class', 'event');
                    document.querySelector('section.twnevt').appendChild(eventArray);
                }
            }
        }


    });