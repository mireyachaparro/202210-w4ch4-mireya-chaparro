# Week 4 - Challenge 4

## Robots

Tendrás que crear un frontend en React (con Contexto) que permita al usuario gestionar un listado con sus robots.

El usuario debe poder listar, crear, modificar y borrar robots.

Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

Velocidad (0-10)
Resistencia (0-10)
Fecha de creación
Testea todo lo posible

Extras
Crea una home page inicial y un menu que navegue entre la home y los robots. La página inicial muestra solo enl número de robots disponibles

Dale persistencia en localStorage

Dale persistencia en JSON-Server

# MAS

En este proyecto se ha creado una SPA con varias páginas en React, gestionando el estado común con context + reducer. La APP es responsive.
Las vistas se cargan mediante lazy loading.
También cuenta con Hooks de git y GitHub Actions
La app se conectará a una API pública (https://breakingbadapi.com/documentation ) y listará los elementos. En dicho listado hay paginación
A partir de este listado, se ha creado otro listado conectado a una API local, donde hemos implementado CRUD.
La interfaz da feedback de cuando se está esperando una response de las APIs, y también gestiona los errores de éstas, es decir, saca una pantalla de error informando al usuario de que ha habido un error al intentar conectarse a la API.
Pueder ver el proyecto desplegado en Netlify en este link

A continuación, la lista de componentes y su responsabilidad

| Componente        | Responsabilidad                                                                                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| header            | es el encargado de pintar el menú y el logo                                                                                                                                                                                |
| footer            | es el encargado de mostrar la imagen y nuestra info                                                                                                                                                                        |
| menu              | pinta las opciones del menu, que llevan a las diferentes rutas, cada opción tiene su id, su path y su label                                                                                                                |
| layout            | A la función Layout se le pasa un children de tipo JSX.Element encargado de renderizar el header, el children y el footer                                                                                                  |
| app               | es el encargado de renderizar el componente Layout                                                                                                                                                                         |
| routes            | es el encargado de definir las rutas con su path y el elemento al que tiene que ir                                                                                                                                         |
| character_list    | Haciendo uso del context, se encarga de renderizar toda la lista (los ítems) de personajes utilizando el método map para recorrer todo el array de personajes. el map utiliza una key, que es la id del item               |
| character_item    | Pinta cada item con su informacion. Llama a la funcion del context que permite añadir el item al array (api local) de favoritos                                                                                            |
| character_details | al hacer clic en un ítem, renderiza todas sus propiedades                                                                                                                                                                  |
| favourite_list    | se renderizan todos los ítems que estén en el estado y API local                                                                                                                                                           |
| favourite_item    | pinta cada item con su informacion. Recoge del context las funciones para borrar y matar y poder pasarsela por props al hijo (los botones)                                                                                 |
| favourite_die     | recoge de las props la funcion change que le pasa el padre, para matar. Ejecuta la funcion change del context y cambia la propiedad del item de vivo a muerto                                                              |
| favourite_delete  | recoge de las props la funcion delete que le pasa el padre, para eliminarlo de favoritos. Ejecuta la funcion delete del context que filtra el array, devolviendo todo el array menos el que tiene la id que hemos filtrado |

Diseño:
https://www.figma.com/file/t8F0S45jg9wn32GGGnCdIc/Breaking-bad-challenge?node-id=0%3A1

Si vas a clonar este proyecto, sigue las siguientes instrucciones:
