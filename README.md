
### Respuestas al cuestionario
##### 1.- Que es es6
##### ES6 es ECMAScript 6  es la especificación en la que se basa JavaScript. Lo que trae implementado ES6 son las caracteristicas que utilizamos de momento para tranajar con javaScript como son la declaracion de variables con let y const,el uso de funciones flecha, los templates strings,la destructuración que normalmente uso para destructurar las props,el spread operator que utilizo en react para actualizar el estado en determinadas situaciones y la incorporación de modulos que me permite elaborar codigo modularizado de tal forma que sea mas organizado,escalable y mantenible.
==================================================================================================================
#### 2.- Que es el shadow dom
##### El shadow DOM es un dominio de sombra, El Shadow DOM es una tecnología de la web que permite encapsular y ocultar la estructura de un componente web, incluyendo su estilo y comportamiento, del resto de la página web. Es una forma de crear componentes más autónomos y evitar conflictos de estilos o comportamientos entre diferentes partes de una 
==================================================================================================================
#### 3.- Cuales son los principales verbos REST
##### Get, Post, Put, Delete
=================================================================================================================
#### 4.- Que es el stack de llamadas de Javascript
##### Es una estructura dinámica de datos LIFO que almacena información sobre las subrutinas de una aplicación.
##### El stack de llamadas en JavaScript es una estructura de datos de tipo pila (LIFO - Last In, First Out) que almacena información sobre las subrutinas (funciones) que están siendo ejecutadas en un momento dado. Cuando se llama a una función, se agrega al stack, y cuando la función se completa, se retira del stack. Esto permite llevar un seguimiento del flujo de ejecución y gestionar las llamadas a funciones de manera ordenada.
==================================================================================================================
#### 5.5.- Explique que son las dependencias de desarrollo y las peer-dependencies en el package json de un proyecto node.
##### En un archivo package.json de un proyecto Node.js, las dependencias y las peer-dependencies son dos tipos diferentes de declaraciones que especifican las relaciones entre el proyecto y otras bibliotecas.

##### Las dependencias de desarrollo son aquellas que se utilizan exclusivamente durante el desarrollo y las pruebas del proyecto, pero no son necesarias para la ejecución del código en un entorno de producción por ejemplo yo he utilizado nodemon, morgan que se utilizan en node para desarrollar de manera mas eficiente así como tambien EsLint y Prettier para presentación del codigo.
#### Las peer-dependencies son una declaración especial que indica que tu proyecto espera que otra biblioteca específica sea instalada por el consumidor del paquete, pero no la incluye directamente.