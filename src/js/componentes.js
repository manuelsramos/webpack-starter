 import '../css/componentes.css';
 import webpacklogo from '../assets/img/webpack-logo.png';
 
 // se importa de la carpeta css
//para ver los cambios de una vez es necesario instalar en la terminal css loadery va a instalar varias dependencias de desarrollo
//tiene que salir en json la instalacion 
//nos vamos a la configuracion dl webpack para poner las reglas para css

export const saludar = ( nombre ) => {

    console.log('Creando etiqueta h1')


    const h1 = document.createElement('h1')
    h1.innerText = `Hola, ${ nombre }!!!`;

    document.body.append (h1);

    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append (img);
    
}
//si quiero que tambien que se importe el componente ,se creaen la carpeta de css otra carpeta
//new file que se llame componentes, es decir me voy a crear un estilo que responda a ese componente
//como puedo hacer para que la carpeta de componentes.css este vinculada con la carpeta de componentes.js?
