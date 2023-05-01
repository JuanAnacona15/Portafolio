import React from "react";
import ReactDom from 'react-dom/client';
import { Head } from "./Components/Presentation";
import { Presentation } from "./Components/Cont1";
import {Herramientas} from "./Components/Tools"
import { Formacion } from "./Components/Formacion";
import { Menu } from "./Components/Menu";


 const rootElement = ReactDom.createRoot(document.getElementById("root"))

 rootElement.render(
    <>
        <Menu></Menu>
        <Head></Head>
        <Presentation></Presentation>
        <Herramientas></Herramientas>
        <Formacion></Formacion>
    </>
 )
 
