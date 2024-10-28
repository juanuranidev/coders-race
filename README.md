- Español
  - [Sobre Coders Race](#sobre-codera-race)
  - [Arquitectura del software frontend](#arquitectura-del-software-frontend)
    - [Capas del software](#capas-del-software)
    - [Estructura de carpetas](#estructura-de-carpetas)
    - [Sobre la forma de escribir código](#sobre-la-forma-de-escribir-código)
  - [Instalación](#instalación)
    - [Prerrequisitos](#prerrequisitos)
    - [Pasos de instalación](#pasos-de-instalación)
  - [Sobre mi](#sobre-mi)
  - [Licencia](#licencia)

---

## Sobre Coders Race

Coders Race es una aplicación diseñada para definir quién es el programador más rápido del mundo, dentro de la misma deberás "correr carreras" (escribir pequeñas porciones de código) en el menor tiempo posible.

Además podrás ver el ranking de los programadores más rápidos, los mismos que serán ordenados en base a el tiempo en el que hayan realizado las distintas carreras.

---

## Arquitectura del software Frontend

Para la arquitectura del frontend dividí el mismo en "capas", donde cada una de ellas tiene responsabilidades, limitaciones y obligaciones distintas. Al separar en capas conseguimos que el software sea más mantenible, escalable y lo más importante, con mucha mayor facilidad para los cambios.

La arquitectura del frontend se basa principalmente en las distintas entidades que existen dentro del mismo, las mismas no solo afectan a la estructura de carpetas sino que también afectan al código en general.

Las entidades de Coders Race son:

- Code (Código)
- Race (Carrera)
- Language (Lenguaje)
- User (Usuario)

El siguiente gráfico muestra cómo están compuestas las capas de la estructura del proyecto:

Con la siguiente imágen podemos observar varias cosas, para empezar vemos que cada capa tiene distintos nombres, los mismos representan la distribución de las carpetas, más adelante veremos para qué se utiliza cada una.

Podemos observar además dos flechas que van desde el centro hacia afuera, las mismas indican como se deben comportar las capas cuando interactúen entre si. Simplificadamente podemos decir que es una regla de imports, por ejemplo desde la carpeta de Adapters no podemos interactuar (importar) nada de la carpeta de Routes ya que es el core de nuestra aplicación, sin embargo desde Pages podemos interactuar con Components por ejemplo.

Mientras más lejos del centro se encuentre una capa significa que más se utiliza dentro de las otras capas, por lo que es fundamental que sea fácil de modificar y reemplazar si es necesario, de lo contrario generará un impacto negativo en todo el software. Por otro lado, mientras más cerca del centro esté una capa menos se utiliza dentro de las otras capas porque forma parte del core del mismo, por lo que es poco probable que se tenga que cambiar o modificar a futuro.

- Routes puede importar Pages y Layouts
- Pages y Layouts pueden importarse tanto a si mismos como a Components y Context.
- Components, y Contexts pueden importarse tanto a si mismos como a Services, Adapters, Styles, Hooks, Lib y Store.
- Services, Adapters, Styles, Hooks, Lib y Store solamente pueden importarse a si mismos.

### Capas del software

Repasemos cada capa con sus respectivas carpetas:

**routes**  
Hace referencia a todas las rutas de nuestra aplicación, las mismas se van a encargar de manejar la lógica de qué ruta devolver dependiendo los requerimientos necesarios (permisos, autenticación, roles, etc).

**pages**  
Hace referencia a todas las páginas de nuestra aplicación, las que serán llamadas dentro de las rutas, cada página se va a encargar de toda la lógica que se tenga que enviar a cada ruta en específico.

**layouts**  
Hace referencia a la plantilla que van a tener cada una de las página que se muestren en nuestra aplicación, las mismas van a ser llamadas dentro de las páginas y podrán variar dependiendo la autenticación o el rol del usuario o los requerimientos necesarios.

**context**  
Hace referencia a todos los React Context que van a manejar los distintos estados o validaciones globales dentro de nuestra aplicación, los mismos van a ser llamados principalmente por las páginas y los componentes.

**components**
Hace referencia a todos los componentes que se utilizan a lo largo de las distintas páginas y layouts, dentro de los mismos encontraremos dos carpetas principales que distinguen a los componentes entren si:

- shared
- ui

Los componentes de tipo "ui" son componentes puros, es decir, no tienen lógica de negocio, solamente se encargan de recibir props y renderizar la información que se les pase, por ejemplo un botón, loader, tooltip, etc.

Por lado, los componentes de tipo "shared" son componentes más complejos. Pueden tener, o no, lógica de negocio, pero en general son componentes más complejos que los de tipo "ui".

**services**  
Hace referencia a la parte dentro de nuestra aplicación que interactúa con las distintas api's necesarias para el funcionamiento del software, dentro de los serevices veremos que no sólo están separados por entidades, sino que también están divididos por la lógica que se desee implementar, por ejemplo:

- api
- queries
- mutations
- auth

Dentro de api encontraremos las funciones que interactúan directamente con la api de nuestro backend, las mismas pueden estar basadas en axios o cualquier otra librería para realizar las peticiones.

Dentro de queries, específico de TanStack Query, encontramos las funciones que se encargan de manejar el estado de las distintas consultas que se realicen a la api. Por otro lado dentro de mutations, también de TanStack Query, encontramos las funciones que se encargan de realizar las mutaciones a las distintas apis.

También podemos agregar nuevas librerías dependiendo las distintas herramientas que utilizemos, por ejemplo la entidad de Users (usuarios) necesita autenticación por lo que creamos una nueva carpeta llamada auth dentro de services que se encargará de manejar toda la lógica necesaria para la autenticación.

**hooks**  
Hace referencia a funciones específicas que se repiten a lo largo de nuestra aplicación, idealmente se utilizan para todos los servicios de tipo GET, así poder tener un código más simple y controlar mejor cada petición.

**styles**  
Hace referencia a todos los estilos globales de nuestra aplicación, los mismos se encuentran dentro de la carpeta de styles.

**lib**  
Hace referencia a la librería dentro de nuestro software, algo similar a una librería de JavaScript, es decir herramientas específicas y/o paquetes que se utilizan a lo largo de la aplicación. Por ejemplo configuraciónes, constantes, types, utils, notificaciones, etc.

**adapters**  
Los adapters nos ayudan a adaptar la información que se obtiene de las distintas apis para que cumpla con el formato que necesitamos dentro de nuestra aplicación, por ejemplo, si dentro de la api tenemos un campo de fecha, este puede venir en un formato específico, por lo que debemos realizar un adapter para que cumpla con el formato de fecha que necesitamos.

**store**  
Hace referencia a la parte de Redux que se encarga de manejar el estado global de nuestra aplicación, podemos encontrar distintos tipos de store dependiendo la entidad o la lógica que se desee implementar.

### Estructura de carpetas

A lo largo de la explicación vamos a distinguir entre dos tipos de archivos:

archivos.typescript.ts  
componentes-react.tsx

Todas las carpetas deben estar escritas en el formato de kebab-case, por ejemplo:

- background-codes
- render-code
- select-language
- code
- shared

Con respecto a los archivos en typescript, en el caso de que no estén ligados a una entidad deben ser escritos en kebab-case, por ejemplo:

- use-click-outside.ts
- use-debounce.ts
- use-interval.ts
- use-timeout.ts

En el caso de que estén ligados a una entidad deberán ser escritos igualmente en kebab-case, pero agregando el nombre de la entidad al principio, por ejemplo:

- code.use-complete-input.ts
- code.use-CPS-counter.ts
- code.use-race-timer.ts

Las entidades no sólo juegan un punto clave al momento de nombrar los archivos, sino que también afectan a la estructura de las carpetas ya que dividiremos los distintos archivos dentro de las carpetas en base a cada entidad.

Esto lo podemos ver por ejemplo en la carpeta de Services, donde los distintos servicios se dividen entre las carpetas: code, language, race y user, haciendo alusión a las entidades del software.

<!-- FALTA IMÄGEN -->

También podemos ver este patrón en la carpeta Routes la cual en este caso en particular divide la entidad de user en base a los distintos roles y agrega una nueva carpeta llamada "public" la cual hace referencia a las rutas públicas.

<!-- FALTA IMÄGEN -->

Este mismo patrón se repite tanto para Pages, Constants, Layouts, Hooks, y Forms, el hacer esto ayuda a dividir mejor los archivos y no tener una carpeta con demasiadas carpetas dentro.

Cada carpeta que contenga un componente de React (componentes-react.tsx) contará con la siguiente estructura:

```bash
   [component] - Carpeta principal
      [components] - Carpeta con los componentes del componente principal
      [styles] - Carpeta con los estilos del componente principal
      [lib] - Carpeta con funciones específicas (por ejemplo validations.js de yup)
      component.tsx - Componente principal
```

Las carpetas que contienen archivos de typescript, por ejemplo archivo-typescript.ts, deben estar solos, sin carpeta principal, siempre y cuando no se basen en las entidades del proyecto. Veamos unos ejemplos:

Los services tienen distintas carpetas dependiendo la entidad porque se basan principalmente en las mismas.

<!-- FALTA IMÄGEN -->

En cambio, tanto env.ts como toast.ts contienen archivos typescript normales, que son independiente de las entidades, y como no dependen de las mismas deben guardarse sin carpeta.

<!-- FALTA IMÄGEN -->

### Sobre la forma de escribir código

Dentro de cada software es importante definir cómo se debe escribir el código, si bien no hay que encontrar la forma perfecta de hacerlo es fundamental seguir una buena linealidad que esté documentada, así será más fácil el entenderlo a futuro y no aumentará el costo de la comprensión del software.

A continuación voy a dar una manera simple de escribir código en base a la capa donde nos encontremos, la acción que queremos realizar y, de ser así, la entidad con la que estamos interactuando, abstrayéndonos de la tecnología y de los métodos en sí.

Repasemos esta regla dentro de las distintas capas:

**pages y components**  
Cualquier función dentro de estas capas que se encargue de realizar algo específico deberá ser nombrada de la siguiente manera:

```bash
    1[handle]2[Open]3[ModalExercises]

    1 - Identificador de la capa de archivos .tsx
    2 - Verbo basado en la acción que se desea realizar (open, modify, resize, etc).
    3 - Entidad o componente con el que interactúa.
```

**hooks**  
Los hooks deben ser nombrados y utilizados de la siguiente manera, con respecto al punto 3 el mismo puede cariar ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (debounce):

```bash
    1[use]2[Read]3[Exercises]

    1 - Identificador de la capa de hooks
    2 - Verbo basado en el acrónimo CRUD
    3 - Entidad
```

**services**  
Los services deben ser nombrados y utilizados de la siguiente manera, ya sea que se trate de una entidad del negocio (Exercise) o una entidad aparte (CloudinaryCredentials):

```bash
    1[get]2[Exercises]3[Service]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

**lib**  
Dentro de lib puede variar mucho la estructura ya que podemos encontrarnos con distintos tipos de librerías, herramientas componentes de react o funciones. Sin embargo, con respecto a las funciones siempre trataremos de mantener este formato:

```bash
    1[create]2[Toast]3[Lib]

    1 - Verbo basado en el acrónimo CRUD
    2 - entidad
    3 - Especificador de la capa
```

**adapters**  
Los adapters deben ser nombrados y utilizados de la siguiente manera:

```bash
    1[to]2[RaceCreateApi]3[Adapter]

    1 - "to" o "from" dependiendo la dirección de la conversión
    2 - Entidad + api
    3 - Especificador de la capa
```

---

## Instalación

Para instalar y correr el proyecto de forma local sigue los siguientes pasos

### Prerrequisitos

Antes de realizar la instalación, asegúrate de tener las siguientes herramientas configuradas:

- [Node.js](https://nodejs.org/) (version 18 o mayor)
- [Aplicación de Firebase para autenticación](https://firebase.google.com/)

### Pasos de instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/juanuranidev/coders-race
   ```

2. Navega hasta el directorio:

   ```bash
   cd coders-race
   ```

3. Abre visual studio code:

   ```bash
   code .
   ```

4. Crea un archivo .env en backend y frontend dentro de la carpeta apps y en la carpeta principal basado en los archivos .env.example para agregar tus variables de entorno, las variables genéricas ya se encuentran definidas:

> [!NOTE]  
> La variable de entorno BUILD_COMMAND sirve para definir si queremos levantar nuestra aplicación en modo desarrollo o producción. Para el modo desarrollo deberemos asignar el valor "dev" mientras que para el modo producción deberemos asignarle el valor de "start".

5. Levantar docker:

   ```bash
   docker compose up --build
   ```

6. Cargar datos iniciales:
   ```bash
   docker compose exec backend npm run db:seed
   ```

---

## Sobre mi

Ingeniero de producto y creador de contenidos, construyendo mi propia versión del mundo digital con pasión por la arquitectura de software. En mi perfil encontrarás diferentes proyectos, desde aplicaciones para practicar arquitectura de software hasta aplicaciones que resuelven problemas de la vida real y aportan valor. Todos los proyectos están construidos públicamente desde cero, desde la planificación, el diseño y el desarrollo, utilizando diferentes patrones de diseño y arquitectura.

Bienvenido a mi mundo. #BUILDINPUBLIC

Puedes ver mi portafolio en el siguiente link:

https://juanurani.netlify.app/

Conectemos en LinkedIn:

https://www.linkedin.com/in/juanurani/

---

## Licencia

MIT License

Copyright (c) [2024] [Juan Urani]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
