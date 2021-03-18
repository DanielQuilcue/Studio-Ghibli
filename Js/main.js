// Variable para acceder al div del html por medio del id

let app = document.getElementById('root');

// Variable para imagen de logo

let logo = document.createElement('img');
logo.src = './Recursos/logo.png'



// Metodo para agregar imagen y  logo al contenedor div

let container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


// Creando variable de requerimiento y se asigna un nueva valor xmlhttprequest al objecto de la lista

let request = new XMLHttpRequest();

// se abre uan nueva connecion, para leer el nuevo requerimeinto de la url 

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function(){

// se comienza el acceso a los datos del Json

let data = JSON.parse(this.response);

// si se rompre la url se manda el error por un if

if (request.status >=200 && request.status < 400) {

    data.forEach((movie) => {

        // se imprime las peliculas y titulos
        // console.log(movie.title)
        // console.log(movie.description)

        // creando trajetas 

        let card = document.createElement('div');
        card.setAttribute('class', 'card', 'img');

        // creando h1 para pasar contenido de de film de tiltle
        
        // Agrenado imagen de cada movie

        // let imagenes = [

        //    "https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
        //     "https://flxt.tmsimg.com/assets/p158931_p_v10_aa.jpg" ,
        //     "https://target.scene7.com/is/image/Target/GUEST_9b82f407-029e-4ab3-b63d-4e220920cdd2?wid=488&hei=488&fmt=pjpeg",
            
        // ];

    

        let h1 = document.createElement('h1');
        h1.textContent = movie.title;

        // creando h3 para director de film de data

        let director = document.createElement('p');
        director.setAttribute('class', 'h3-p');
        director.textContent =`Director: ${movie.director}`;

        // creando h3 para año de film de data

        let año = document.createElement('p');
        año.setAttribute('class', 'h3-p');
        año.textContent =`Año: ${movie.release_date}`;

        // console.log(h3)
        // creando p para pasar contenido de film de descripcion

        let p = document.createElement('p');
        movie.description = movie.description.substring(0, 300); // limitar caracteres a 300
        p.textContent= `${movie.description}...`;

         // Agregue las tarjetas al elemento contenedor

        container.appendChild(card);

        // let imag = document.createElement('img');
        // imag.src = 'https://i.blogs.es/a76e4b/ponyo-ghibli/1366_2000.jpg'

        // let imag1 = document.createElement('img');
        // imag1.src = 'https://target.scene7.com/is/image/Target/GUEST_9b82f407-029e-4ab3-b63d-4e220920cdd2?wid=488&hei=488&fmt=pjpeg'

        // Cada tarjeta contendrá un h1 h3 y un p
       
        card.appendChild(h1);
        card.appendChild(director);
        card.appendChild(año);
        card.appendChild(p);
        // card.appendChild(imag);
        // card.appendChild(imag1);

              

    });
}
else {
    console.log('Error');
}


}

request.send();