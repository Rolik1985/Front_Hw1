window.addEventListener('DOMContentLoaded', function(){
    
    let towns = document.querySelector('.select_town');
    towns. onclick = () => {
        async function requestFetch (url) {
            const rezalt = await fetch(url);
            return rezalt.json();
        }
    
        requestFetch('https://api.hh.ru/areas/5').then((item) =>{
            item.areas.forEach(element =>{
                const [...art] = element.name;
                    option = document.createElement('option');
                    option.innerHTML = art.join("");
                    towns.append(option);
                    // console.log(art.join(""));
            })
        });
    }
});






