const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
                let town = document.createElement('section');
                let info = document.createElement('div');
             
                let h4 = document.createElement('h4');
                let h5 = document.createElement('h5');
                let para2 = document.createElement('p')
                let para3 = document.createElement('p');
                let para4 = document.createElement('p');
                let image = document.createElement('img');

                town.appendChild(info);
              

                town.setAttribute('class', 'places');
                info.setAttribute('class', 'info');

    
                h4.textContent = towns[i].name;
                h5.textContent = towns[i].motto;
                para2.textContent = 'Year Founded :' + ' ' + towns[i].yearFounded;
                para3.textContent = 'Population :' + ' ' + towns[i].currentPopulation;
                para4.textContent = 'Annual Rain Fall :' + ' ' + towns[i].averageRainfall;
                

    
                info.appendChild(h4);
                info.appendChild(h5);
                info.appendChild(para2);
                info.appendChild(para3);
                info.appendChild(para4);

                image.setAttribute('class','townPic');
                
                image.setAttribute('src','images/'+ towns[i].photo);
                
                image.setAttribute('alt','Image of' + ' ' + towns[i].name);

                town.appendChild(image);
    
                document.querySelector('div.towns').appendChild(town);
            };

           
        };



    });