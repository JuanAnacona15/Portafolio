//Importamos los estilos
import '../Styles/Formacion.css'
//Importamos las imagenes necesarias
import AU from '../Imagenes/AUD.png'
import SENA from '../Imagenes/SENA.png'
import IETI from '../Imagenes/Escudo IETI web.png'
import GITI from '../Imagenes/GITI.png'

//Definimos la funcion que va a exportar el componente que muestra la formación del desarrolador
export function Formacion(){
    return(
        <div className='Cont' id='Formacion'>
            <b className='Formacion_tx'>Formación</b>
        <div className='Formacion'>
            {/* Llamamos a la función "Curso" para mostrar el contenido y caracteristicas del curso */}
            <Curso 
            img={AU} nombre="Formación Autodidacta" 
            Date="Diciembre 2022" 
                Description="A lo largo del tiempo he estado aprendiendo varias tecnologías de desarrollo de 
                software de forma autodidacta. En particular, he aprendido mucho sobre JavaScript, HTML y CSS, 
                así como sobre React. También he incursionado en el diseño web, y he aprendido a trabajar en 
                herramientas de diseño 3D. Me gusta mantenerme actualizado y seguir aprendiendo cosas nuevas, 
                así que siempre estoy buscando nuevas oportunidades para aprender más.">  
            </Curso>
            <Curso 
            img={SENA} nombre="Programación de aplicaciones y servicios para la nube" 
            Date="Cursando" 
                Description="En este curso del SENA, aprendemos cómo hacer proyectos con una correcta gestión de datos, 
                recopilación, identificación de stakeholders, documentación y gestión de proyectos. Además, desarrollamos 
                productos y servicios para usuarios de internet o empresas. ">  
            </Curso>
            <Curso 
            img={IETI} nombre="Taller de desarrollo softwhare del IETI" 
            Date="Cursando" 
                Description="En el taller de desarrollo de softwhare de la institucion educativa tecnico industrial
                aprendemos los fundamentos de programacion asi como una introduccion al mundo de la informatica, 
                tratamos temas como la logica de programacion, tipos de programacion, diseños de aplicaciones, estructuracion
                de proyectos, documentacion y educacion en el campo laboral">  
            </Curso>
            <Curso img={GITI} 
            nombre="Grupo de investigación GITI" 
            Date="Cursando" 
                Description="En el grupo de investigación GITI trabajamos temas de robótica, electrónica y cómo podemos 
                fusionar estas dos para crear soluciones a diferentes problemáticas, ya sea en el ámbito social o ayudando 
                a personas con discapacidades físicas. Llevamos a cabo una correcta ruta de investigación, recopilando datos, 
                clasificándolos y llevando a cabo las diferentes pruebas de proyectos.">  
            </Curso>
        
    </div>
        </div>
    
    );
    
}


//Definimos la función "Curso que va a retornar un componente html con las caracteristicas que se definan en los props
//Parametros: imagen del curso, nombre del curso, fecha del curso, descripcion del curso
function Curso(props){
    return(
            <div className='Curso'>
                <img className='Icon_Curso' src={props.img}></img>
                    <div className='Descripcion'>
                        <p className='nombre'>{props.nombre}</p>
                        <p className='Fecha'>{props.Date}</p>
                        <p className='Descripcion_tx'>{props.Description}</p>
                    </div>
            </div>
    );
    
}