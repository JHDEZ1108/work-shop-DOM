const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.getElementById("appNode");

const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

!(async function () {
  const response = await fetch(`${baseUrl}/api/avo`);
  const { data: allAvos } = await response.json();

  // Creamos los Nodos HTML para cada item que recibimos de la API
  const nodeArray = allAvos.map((avocado) => {
    // Creamos image node
    const image = document.createElement("img");
    image.className =
      "h-64 ml-auto mr-auto";
    image.src = `${baseUrl}${avocado.image}`;

    // Creamos title node
    const title = document.createElement("h2");
    title.className = "text-white text-2xl font-bold leading-none";
    title.textContent = avocado.name;
    
    //Creamos description node
    const description = document.createElement("div");
    description.className="my-2 text-xs text-gray-400 leading-none"
    description.textContent = avocado.attributes.taste;
    
    // Creamos price node
    const price = document.createElement("div");
    price.className = "text-lg text-white font-light";
    price.textContent = formatPrice(avocado.price);
    
    // Juntamos el titulo con el precio y con la descripcion
    const cardData = document.createElement("div");
    cardData.className = "rounded-lg p-4 bg-gray-700 flex flex-col";
    cardData.append(title, description, price);
    
    // Creamos un container para juntar todo
    const container = document.createElement("div");
    container.className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
    container.appendChild(image);
    container.appendChild(cardData);
    
    // Creamos la card final
    const card = document.createElement("div");
    card.className = "w-full my-10 md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2";
    card.append(container);
    
    return card;
  });

  // Trick: Apply an array as a list of arguments
  appNode.className = "container ml-auto mr-auto flex flex-wrap items-start";
  appNode.append(...nodeArray);
})();

