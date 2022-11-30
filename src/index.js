/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';

//web api

//Conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  //Prcesar la respuesta y convertirla a JSON 
  .then((respuesta) => respuesta.json())
  //JSON -> Data -> Renderizar la información en el browser
  .then((responseJson) =>{
    const allData = [];
    responseJson.data.forEach((element) => {
      //Crear imagen
      const image = document.createElement('img');
      image.src = `${baseUrl}${element.image}`
      //Crear titulo
      const title = document.createElement('h2');
      title.textContent = element.name;
      //Crear precio
      const price = document.createElement('p');
      price.textContent = element.price;
      
      const container = document.createElement('div');
      container.append(image, title, price);
      
      allData.push(container);
    });
    
    document.body.append(...allData);
  });

