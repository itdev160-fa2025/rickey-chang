// Array for Betta fish types
const bettaTypes = [
    {
        name: "Crowntail Betta",
        description: "Known for its dramatic, spiky tail fin.",
        image: "/project-2/images/crown.jpg",
        price: "$25"
    },
    {
        name: "Halfmoon Betta",
        description: "Has a large, flowing tail shaped like a half moon.",
        image: "/project-2/images/halfmoon.jpg",
        price: "$25"
    },
    {
        name: "Koi Betta",
        description: "Known for their multiple colors like a koi fish.",
        image: "/project-2/images/koi.jpg",
        price: "$25"
    },
    {
        name: "Platinum Betta",
        description: "Pure white scales and flowing tail.",
        image: "/project-2/images/platinum.jpg",
        price: "$25"
    },
    {
        name: "Dumbo Betta",
        description: "Known for having large pectoral fins, like an elephant ear.",
        image: "/project-2/images/dumbo.jpg",
        price: "$25"
    },
];

// Function for homepage
function loadHomePage() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to the Betta Fish World!";
    content.appendChild(heading);

    const homeImage = document.createElement("img");
    homeImage.src = "/project-2/images/blue.jpg";
    homeImage.alt = "A beautiful Betta Fish";
    homeImage.style.width = "100%"; 
    homeImage.style.borderRadius = "12px"; 

    content.appendChild(homeImage);

    const welcomeText = document.createElement("p");
    welcomeText.textContent = "Betta fishes are stunning and unique. Explore our site to learn about the types, buy your favorite fish, and more!";
    welcomeText.style.marginTop = "1rem";
    content.appendChild(welcomeText);
}

// Function for types of Betta fishes
function loadTypesPage() {
    const content = document.getElementById("content");

    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Types of Betta Fishes";
    content.appendChild(heading);

    const container = document.createElement("div");
    container.classList.add("types-container");

    bettaTypes.forEach(type => {
        const typeCard = document.createElement("div");
        typeCard.classList.add("type-card");

        const image = document.createElement("img");
        image.src = type.image;
        image.alt = `${type.name} Image`;
        typeCard.appendChild(image);

        const textWrapper = document.createElement("div");
        textWrapper.classList.add("type-text");

        const name = document.createElement("h3");
        name.textContent = type.name;
        textWrapper.appendChild(name);

        const description = document.createElement("p");
        description.textContent = type.description;
        textWrapper.appendChild(description);

        typeCard.appendChild(textWrapper);

        container.appendChild(typeCard);
    });

    content.appendChild(container);
}


// Function for types of Betta fishes
function loadBuyPage() {
    const content = document.getElementById("content");

    content.innerHTML = "";


    const heading = document.createElement("h1");
    heading.textContent = "Buy Betta Fishes Online";
    content.appendChild(heading);

    const container = document.createElement("div");
    container.classList.add("card-container");

    bettaTypes.forEach(type => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = type.image;
        image.alt = `${type.name} Image`;
        image.style.width = "100%";
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = type.name;
        card.appendChild(name);

        const price = document.createElement("p");
        price.textContent = `Price: ${type.price}`;
        card.appendChild(price);

        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.onclick = () => alert(`${type.name} added to cart!`);
        card.appendChild(button);

        container.appendChild(card);
    });

    content.appendChild(container);
}

function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1>Contact Us</h1>
        <p>Email: changr1@gmatc.matc.edu</p>
        <p>Phone: +1 (012) 345-6789</p>
    `;
}

document.querySelectorAll("nav ul li a").forEach(navLink => {
    navLink.addEventListener("click", (event) => {
        event.preventDefault();
        const id = event.target.id;

        switch (id) {
            case "nav-home":
                loadHomePage();
                break;
            case "nav-types":
                loadTypesPage();
                break;
            case "nav-buy":
                loadBuyPage();
                break;
            case "nav-contact":
                loadContactPage();
                break;
        }
    });
});

document.addEventListener("DOMContentLoaded", loadHomePage);