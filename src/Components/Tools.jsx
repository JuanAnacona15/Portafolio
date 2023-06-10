import '../Styles/Tools.css'
import VS from '../Imagenes/VisualStudio.png'
import Arduino from '../Imagenes/arduino.png'
import Excel from '../Imagenes/excel.png'
import React_Icon from '../Imagenes/react_logo.png'
import Java from '../Imagenes/java.png'
import GitHub from '../Imagenes/git.png'
import Git from '../Imagenes/Git-Icon-1788C.png'
import GPT from '../Imagenes/GPT3.png'
import JS from '../Imagenes/JavaScript.png'
import CSS from '../Imagenes/CSS.png'
import HTML from '../Imagenes/HTML.png'
import Blender from '../Imagenes/blender.png'

export function Herramientas(){
    return(
        <div className='Herramientas'>
            <b>Herramientas de trabajo</b>
            <div className='mostrario'>
                <Herramienta texto="Visual Studio Code" imagen={VS}></Herramienta>
                <Herramienta texto="Arduino" imagen={Arduino}></Herramienta>
                <Herramienta texto="Blender" imagen={Blender}></Herramienta>
                <Herramienta texto="Excel" imagen={Excel}></Herramienta>
                <Herramienta texto="React" imagen={React_Icon}></Herramienta>
                <Herramienta texto="Java" imagen={Java}></Herramienta>
                <Herramienta texto="GitHub" imagen={GitHub}></Herramienta>
                <Herramienta texto="Git" imagen={Git}></Herramienta>
                <Herramienta texto="GPT-3.5" imagen={GPT}></Herramienta>
                <Herramienta texto="JavaScript" imagen={JS}></Herramienta>
                <Herramienta texto="CSS3" imagen={CSS}></Herramienta>
                <Herramienta texto="HTML5" imagen={HTML}></Herramienta>
            </div>
        </div>      
    );
}
function Herramienta(props){
    return(
        <div className="Herramienta">
            <img src={props.imagen}></img>
            <p>{props.texto}</p>
        </div>
    );
    
}