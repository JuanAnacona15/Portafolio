//Importamos los estilos
import '../Styles/Menu.css'

//Definimos la funcion que va a exportar el menú de la pagina
export function Menu(){
    return(
        <div className='Menu'>
            <div className='Titulo'>
            <i class="fa-sharp fa-solid fa-bug"></i>
            <h1>Manu.dev</h1>
            </div>
            <div className='botones'>
                <a href='#Inicio'>Inicio</a>
                <a href='#Presentacion'>Presentación</a>
                <a href='#Formacion'>Formación</a>
            </div>
    </div>
    );
}