//Importamos los estilos
import '../Styles/Cont1.css'

//Definimos la función que se va a exportar 
export function Presentation(){
    //Retornamos el codigo html que va a mostrar la presenación y las habilidades
    return(
        <div className="Cont1" id='Presentacion'>
            <div className="presentacion">
                <p><b>Presentación:</b><br></br><br></br>
                    Soy un desarrollador de software apasionado por la ciencia, la tecnología y el diseño. Busco desafíos para 
                    mejorar mis habilidades y conocimientos, y tengo una gran capacidad para aprender rápidamente. Además de mi 
                    experiencia en programación, tengo conocimientos en diseño 3D y electrónica.
                    <br></br><br></br>
                    Me gusta trabajar en proyectos creativos y he desarrollado soluciones innovadoras para diferentes industrias. 
                    Siempre estoy en busca de oportunidades para aplicar mis habilidades y conocimientos para crear algo único y 
                    efectivo que mejore la experiencia del usuario.
                </p>
            </div>
            <div className="Habilidades">
                <b>Habilidades</b>
                <div className='Cont_Habilidades'>
                    {/* LLamamos a la funciñon habilidades */}
                    {habilidad("-Trabajo en equipo", "icon fa-solid fa-users")}
                    {habilidad("-Dedicación", "icon fa-solid fa-person-digging")}
                    {habilidad("-Aprendizaje rapido", "icon fa-solid fa-user-graduate")}
                    {habilidad("-Logica", "icon fa-solid fa-book-open-reader")}
                    {habilidad("-Explicación", "icon fa-solid fa-person-chalkboard")}
                </div>

            </div>
        </div>
    );
}


//Definimos la finción "Habilidad" Que va a retornar un componente de la clase habilidad
//Parametros: Habilidad y icono
function habilidad(texto, clase){
    return(
        <div className='Habilidad'>
            <i class={clase}></i>
            <p>{texto}</p>
        </div>
    );
}