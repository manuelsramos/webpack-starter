const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");

//tenemos que hacer la importacion en la parte superior del archivo 

module.exports = {
    mode: 'development',

    output: {                                   // esto permite limpiar y voolver a crear de forma actualizada
        clean: true
    },

    module: {
        rules: [                                //lo primero es definir ciertas reglas en este caso tengo que apuntar a todos los archivos de html
            {
                test: /\.html$/,                //es una expresion regular para la primera regla nos sirve para que nosotros
                //podamos buscar un string o parte de un string hace match co la expresion regular
                //ej es para buscar si un string tiene el nombre que le estoy pidiendo y lo busque
                // lo que va despues de test es decirlo de html lo que va hacer es que va a barrer todo lo que esta dentro de los archivos ya creados 
                // se va a buscar colocando npm run buldin y cuando encuentre el archivo con la extension de html y si lo encuentro
                //quiero que llame el loader

                loader: 'html-loader', //va a buscar la instalacion que hicimos
                options: {
                    sources: false
                }      //esto en caso de que se mueva un archivo de html y html tenga un atributo que cargue una imagen o algo y tambien se va a encargar de moverlo
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'assets/[name].[ext]'
                }
            }
        ] 
    }, //para ver si se ejecuta algo lo que tenemos que hacer es guargar y luego de guardar vamos a borrarla carpeta de dist
    // nos vamos a la terminal colocamos npm run buldin para actualizar y no va a pasar nada porque hay
    //colocar en la parte superior del archivo una const htmlwebpackplugin esto es una importacion

    optimization: {},

    plugins: [ 
        new HtmlWebpack({  
            title: 'Polo Webpack App',
            template: './src/index.html',
        }),

        new MiniCssExtract({
            filename:'[name].css',
            linkType: false,
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
    {from: 'src/assets/', to: 'assets/'}
            ]
        })
     ]
}


//los plugin son arreglos
 //se puede cambiar hasta el nombre de la carpeta que es la parte de inicio pero de la carpeta de dist

   // filename: 'polo.html',
     // es el archivo del cual qrremos que se base todo es decir el que esta dentro del src



//no se puede realizar las modificaciones en las carpetas de dist porque son volatiles
//tiene que ser en la carpeta de la raiz que es la que esta dentro de src

//tiene que estar con el protocolo httpp

//tenemos que colocar en la terminal  npm i -D webpack-dev-server se instala y se crea en el paquete json
//en el json se coloca start se escribe el comando webpack serve y colocamos el archivo de config.js 
//le colocamos --open apenas que este listo lo abra automaticamente y port para colocar el puerto que queremos que abra 
//pata actualizar es npm start no es necesario poner el run 
//si quiero poner algo en js ya automaticamente se cambia de forma instantanea por lo que acabos de instalar que es el webpack de serve 
//si quiero cambiar el puerto lo cambio y lo tengo que cancelar en la terminal con control c y va a pasar al puerto que puse 