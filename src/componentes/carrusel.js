import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
function UncontrolledExample() {
  return (
    <Carousel variant="dark ">
      <Carousel.Item>
        <img className="Carrusel"
         
          src="https://img.freepik.com/fotos-premium/textura-lisa-tela-blanca_293060-1827.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="Informacion">Videojuegos</h3>
          <p className="Informacion">Mi hobbie favorito (para no decir el único) es jugar videojuegos. Más allá del simple hecho de solo jugar, me ayudó bastante con la enseñanza en el Inglés,
          pensar mejor en la toma de decisiones y también, gracias al League of Legends, puedo estar haciendo un curso de full stack en la UTN, en las siguientes diapositivas muestro mis juegos
          más jugados y clickeando en el medio podés ingresar a la página principal de cada uno de los juegos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.leagueoflegends.com/es-mx/">
        <img className="Carrusel"
          
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CNTWUAMXZRF3BPIYPCNPFHOMJQ.jpg"
          alt="League of Legends"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://latam.battlegrounds.pubg.com/es/">
        <img className="Carrusel"
  
          src="https://media.vandal.net/i/1200x630/1-2022/20221279492820_1.jpg"
          alt="PUBG"
        />
        </a>
      </Carousel.Item>
      <Carousel.Item>
       <a href="https://www.rocketleague.com/es-es/"> <img className="Carrusel"
          
          src="https://rocketleague.media.zestyio.com/rl_platform_keyart_2019.jpg"
          alt="Rocket League"
        />
        </a>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

