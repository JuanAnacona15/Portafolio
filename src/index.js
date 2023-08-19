import React from "react";
import ReactDom from 'react-dom/client';
//Importamos los componentes de la pagina principal
import { Head } from "./Components/Presentation";
import { Presentation } from "./Components/Cont1";
import {Herramientas} from "./Components/Tools"
import { Formacion } from "./Components/Formacion";
import { Menu } from "./Components/Menu";

//Creamos el elemento root para que la pagina se renderize dentro del div root
 const rootElement = ReactDom.createRoot(document.getElementById("root"))

 //Renderizamos
 rootElement.render(
    <>
        {/* Renderizamos el componente "Menu" */}
        <Menu></Menu>
        {/* Renderizamos el componente "Head" */}
        <Head></Head>
        {/* Renderizamos el componente "Presentation" */}
        <Presentation></Presentation>
        {/* Renderizamos el componente "Herramientas" */}
        <Herramientas></Herramientas>
        {/* Renderizamos el componente "Formacion" */}
        <Formacion></Formacion>
    </>
 )
 
