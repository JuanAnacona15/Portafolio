import '../Styles/Cont1.css'


export function Presentation(){
    return(
        <div className="Cont1" id='Presentacion'>
            <div className="presentacion">
                <p><b>Presentacion:</b><br></br><br></br>
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
                    {habilidad("-Trabajo en equipo", "icon fa-solid fa-users")}
                    {habilidad("-Dedicacion", "icon fa-solid fa-person-digging")}
                    {habilidad("-Aprendizaje rapido", "icon fa-solid fa-user-graduate")}
                    {habilidad("-Logica", "icon fa-solid fa-book-open-reader")}
                    {habilidad("-Explicacion", "icon fa-solid fa-person-chalkboard")}
                </div>

            </div>
        </div>
    );
}

function habilidad(texto, clase){
    return(
        <div className='Habilidad'>
            <i class={clase}></i>
            <p>{texto}</p>
        </div>
    );
}