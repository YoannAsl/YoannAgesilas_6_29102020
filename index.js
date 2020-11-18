// const test = fetch("./data.json")
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data.photographers[0])
//     })
//     .catch(e => {
//         console.log("error", e)
//     });


// axios.get("./data.json")
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

const cardsContainer = document.querySelector(".cards_container");
const tagsContainer = document.querySelector(".tags");

const getData = async () => {
    try {
        const res = await axios.get("./data.json");
        return res.data;
    } catch(e) {
        console.log(e);
    }
}

const createCards = async () => {
    const data = await getData();
    data.photographers.forEach(e => {
        let listTag = "" ;
        e.tags.map(e => {
            listTag += `<a class="tag" href="#"><span>#${e}</span></a>`;
        });

        const newCard = document.createElement("div");

        let url = "./photographer.html";
        url = url + "?id=" + e.id;
        newCard.className = "card";
        newCard.innerHTML = `
            <a href="${url}">
                <img src="images/Photographers_ID_Photos/${e.portrait}">
                <h2>${e.name}</h2>
            </a>
            <p class="location">${e.city}, ${e.country}</p>
            <p>${e.tagline}</p>
            <p class="price">${e.price}€/jour</p>
            <div class="tags">
                ${listTag}
            </div>
        `;
        cardsContainer.append(newCard);
    });
}

createCards();