//Importamos los estilos y la foto de perfil
import '../Styles/Presentation.css';
import Prolife_Picture from '../Imagenes/Prolife_Picture.png';

//Definimos la funcion que se va a exportar con el codigo html
export function Head(){
    //Retornamos un codigo html
    return(
        <div className='Presentation' id='Inicio'>
            <div className="Prolife_picture">
                <img src={Prolife_Picture}></img>
            </div>
            <div className='Description'>
                <nombre className='Name'>Juan Manuel Anacona Morales</nombre>
                <profecion>Desarrollador Software</profecion>
                <p>
                    Una persona apasionada por la ciencia, la tecnología y cómo estas pueden trabajar de la mano para cambiar el mundo, 
                    con una gran habilidad en el desarrollo de software y aportando ideas innovadoras que puedan beneficiar al mundo.
                </p>
                {Contact()}
            </div>           
        </div>
    );
}

//Definimos la funcion que va a retornar el codigo de los componenetes y links de contacto
function Contact(){
    return(
        <div className='Contact'>
            <b>Contactame!</b>
            <div className='Contact-icons'>
                <a className='Contact-link' href='mailto:juanmanuelanaconamorales7@gmail.com' target='Blanck'><i class="fa-solid fa-envelope"></i></a>
                <a className='Contact-link' href='https://www.instagram.com/manu.u.0/' target='Blanck'><i class="fa-brands fa-instagram"></i></a>
                <a className='Contact-link' href='https://github.com/JuanAnacona15' target='Blanck'><i class="fa-brands fa-github"></i></a>
                <a className='Contact-link' href='https://www.linkedin.com/in/juan-anacona-96a461268/' target='Blanck'><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    );
}
