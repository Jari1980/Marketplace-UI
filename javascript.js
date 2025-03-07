

// Data for advertisements

const advertisementsData = [
    {
        id: 1,
        title: 'Ad 1',
        description: 'This is the first advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact1@example.com'
    },
    {
        id: 2,
        title: 'Ad 2',
        description: 'This is the second advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact2@example.com'
    },
    {
        id: 3,
        title: 'Ad 3',
        description: 'This is the third advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact3@example.com'
    },
    {
        id: 4,
        title: 'Ad 4',
        description: 'This is the fouth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact4@example.com'
    },
    {
        id: 5,
        title: 'Ad 5',
        description: 'This is the fifth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact5@example.com'
    },
    {
        id: 6,
        title: 'Ad 6',
        description: 'This is the sixth advertisement',
        image: 'https://placehold.co/150',
        contact: 'contact6@example.com'
    }
];

// Displaying all from start
function initialData(){
    for(let i of advertisementsData){
        console.log(i + "msg")

        const col = document.createElement("div");
        col.classList.add("col")
        col.addEventListener("mouseover", function() {toggle(i.id)}); //
        //col.onmouseover = function() {toggle(i.id)} //= toggle(i.id);
        //col.onmouseover = console.log("....");
        //col.onmouseover = "mouseover", () => {console.log("heluu")};
        //col.onmouseover = function() {toggle(i.id)};
        

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = i.image;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5"); //Added
        cardTitle.classList.add("card-title");
        cardTitle.textContent = i.title

        const cardText = document.createElement("p"); //Added
        cardText.classList.add("card-text")
        cardText.textContent = i.description; //+ "\n" + i.contact;

        const cardContact = document.createElement("p");
        cardContact.classList.add("card-text-mod" + i.id);
        cardContact.textContent = "***" //i.contact;
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardContact)
        

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer")

        const button = document.createElement("button"); //Added
        button.classList.add("btn", "btn-primary");
        button.type = "button";
        button.textContent = "Details";
        button.id = i.id;
        button.addEventListener("click", function () { detaljer(i.id); });
        

        cardFooter.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        col.appendChild(card)

        document.getElementById("cards").appendChild(col);
    }
}

// Filter function

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );


// Adding cards to cards div based on search box

document.getElementById("searchInput").addEventListener('input', filter);

function filter(){
    
    let filteredAdvertisement = Object.filter(advertisementsData, ads => ads.title.includes(this.value));
    console.log(filteredAdvertisement);

    document.getElementById("cards").innerHTML = "";
  
    for(let i of Object.keys(filteredAdvertisement)){
        console.log(i + "msg")

        const col = document.createElement("div");
        col.classList.add("col");
        col.addEventListener("mouseover", function() {toggle(filteredAdvertisement[i].id)});

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = filteredAdvertisement[i].image;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5"); //Added
        cardTitle.classList.add("card-title");
        cardTitle.textContent = filteredAdvertisement[i].title

        const cardText = document.createElement("p"); //Added
        cardText.classList.add("card-text")
        cardText.textContent = filteredAdvertisement[i].description;// + "\n" + filteredAdvertisement[i].contact;

        const cardContact = document.createElement("p");
        cardContact.classList.add("card-text-mod" + filteredAdvertisement[i].id);
        //cardContact.classList.add("card-text-mod" + i.id);
        cardContact.textContent = filteredAdvertisement[i].contact;
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardContact);

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer")

        

        const button = document.createElement("button"); //Added
        button.classList.add("btn", "btn-primary");
        button.id = filteredAdvertisement[i].id;
        button.type = "button";
        button.textContent = "Details";
        button.addEventListener("click", function () { detaljer(filteredAdvertisement[i].id); });
        //button.onclick = detaljer(filteredAdvertisement[i].id);
        //console.log(filteredAdvertisement[i].id + "-----");
        

        cardFooter.appendChild(button);

        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        

        col.appendChild(card)

        const test = document.createElement("p")
        test.textContent = "test";
        

        document.getElementById("cards").appendChild(col);
    }
 }


 // Toggle contact

function toggle(id){
    console.log("nuu: " + id);
    let mod = document.getElementsByClassName("card-text-mod" + id)[0];
    console.log(mod);
    if(mod.innerHTML == "***"){
        mod.innerHTML = advertisementsData[id - 1].contact;
    }
    else{
        mod.innerHTML = "***";
    }
}



 

 
// Details



function detaljer(id){
    alert("Hej, contact info: " + advertisementsData[id - 1].contact);
}


