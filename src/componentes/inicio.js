import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
function BasicExample() {
    return (
        <Container>
            <Row>
                <tittle className="Informacion Titulo">MI PRIMERA PAGINA WEB</tittle>
                <h3>Hola, soy Diego y ésta es mi humilde página, es algo tipo "Biografía", contando cosas sobre mi, etc. En ésta sección están los lugares turísticos que visité, arriba en el menú hay
                    más secciones sobre mí como mis Hobbies, mi formación académica y una sección más para contactarme, muchas gracias :D.
                </h3>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row className="Bordes">
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img ClassName="Imagen" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg/250px-The_Leaning_Tower_of_Pisa_SB.jpeg" />
                        <Card.Body>
                            <Card.Title>Torre de pisa</Card.Title>
                            <Card.Text>
                                Plaza del Duomo de Pisa, Italia.
                            </Card.Text>
                            <a href="https://es.wikipedia.org/wiki/Torre_de_Pisa">
                                <Button variant="dark">Más sobre la Torre de pisa</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8}>
                    <p className="Informacion">La torre de Pisa o torre inclinada de Pisa (en italiano: torre pendente di Pisa) es la torre campanario de la catedral de Pisa, situada en la plaza del Duomo de Pisa, en la ciudad del mismo nombre, municipio de la región italiana de la Toscana y capital de la provincia homónima de Italia.
                        La torre comenzó a inclinarse durante su construcción en agosto de 1173, debido a que el suelo era blando y no podía soportar adecuadamente el peso de la estructura. La inclinación empeoró hasta la finalización de la construcción en el siglo XIV. En 1990, la inclinación había alcanzado los 5,5 grados.La estructura se estabilizó mediante trabajos de reparación entre 1993 y 2001, que redujeron la inclinación a 3,97 grados.</p>
                </Col>
            </Row>
            <Row className="Bordes">
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img ClassName="Carrusel" variant="top" src="https://images.squarespace-cdn.com/content/v1/5efce1f1f1c14550f51a35e4/1641583875048-TUZBF5Y4LWSFQH4CZ9I4/Alma+de+Viaje+-+Francia+-+Paris-418.jpg" />
                        <Card.Body>
                            <Card.Title>Torre Eiffel</Card.Title>
                            <Card.Text>
                                París, Francia.
                            </Card.Text>
                            <a href="https://es.wikipedia.org/wiki/Torre_Eiffel">
                                <Button variant="dark">Más sobre la Torre Eiffel</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}>
                    <p className="Informacion">La Torre Eiffel, inicialmente llamada Torre de 300 metros es una estructura de hierro pudelado diseñada inicialmente por los ingenieros civiles Maurice Koechlin y Émile Nouguier y construida, tras el rediseño estético de Stephen Sauvestre, por el ingeniero civil francés Gustave Eiffel y sus colaboradores para la Exposición Universal de 1889 en París.

                        Situada en el extremo del Campo de Marte a la orilla del río Sena, este monumento parisino, símbolo de Francia y de su capital, es la estructura más alta de la ciudad y el monumento que cobra entrada más visitado del mundo, con 7,1 millones de turistas cada año. Con una altura de 300 metros, prolongada más tarde con una antena hasta los 324 metros, la torre Eiffel fue la estructura más elevada del mundo durante 41 años.

                        Fue construida en dos años, dos meses y cinco días, y en su momento generó cierta controversia entre los artistas de la época, que la veían como un monstruo de hierro. Tras finalizar su función como parte de las Exposiciones Universales de 1889 y 1900, fue utilizada en pruebas del ejército francés con antenas de comunicación, y hoy en día sirve, además de atractivo turístico, como emisora de programas radiofónicos y televisivos. El 15 de marzo de 2022 se sustituyó la antena de radio con la ayuda de un helicóptero, pasando de 324 a 330 m de altura total.</p>
                </Col>
            </Row>
            <Row className="Bordes">
                <Col sm={3}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img ClassName="Carrusel" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Estatua_de_la_Libertad_New_York.jpg/401px-Estatua_de_la_Libertad_New_York.jpg" />
                        <Card.Body>
                            <Card.Title>Estatua de la Libertad</Card.Title>
                            <Card.Text>
                                Isla de la libertad, Nueva York, EEUU.
                            </Card.Text>
                            <a href="https://es.wikipedia.org/wiki/Estatua_de_la_Libertad">
                                <Button variant="dark">Más sobre la Estatua de la Libertad</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}>
                    <p className="Informacion">La Libertad iluminando el mundo, más conocida como la Estatua de la Libertad, es uno de los monumentos más famosos de Nueva York, de los Estados Unidos y de todo el mundo. Se encuentra en la isla de la Libertad al sur de la isla de Manhattan, junto a la desembocadura del río Hudson y cerca de la isla Ellis. La Estatua de la Libertad fue un regalo del pueblo francés al pueblo estadounidense en 1886 para conmemorar el centenario de la Declaración de Independencia de los Estados Unidos y como un signo de amistad entre las dos naciones. Fue inaugurada el 28 de octubre de 1886 en presencia del presidente estadounidense de la época, Grover Cleveland. La estatua es obra del escultor francés Frédéric Auguste Bartholdi y la estructura interna fue diseñada por el ingeniero Alexandre Gustave Eiffel. El arquitecto francés Eugène Viollet-le-Duc se encargó de la elección de los cobres utilizados para la construcción de la estatua. El 15 de octubre de 1924, la estatua fue declarada como monumento nacional de los Estados Unidos y el 15 de octubre de 1965 se añadió la isla Ellis. Desde 1984 es considerada Patrimonio de la Humanidad por la Unesco.

                        La Estatua de la Libertad, además de ser un monumento importante en la ciudad de Nueva York, se convirtió en un símbolo en Estados Unidos y representa, en un plano más general, la libertad y emancipación con respecto a la opresión. Desde su inauguración en 1886, la estatua fue la primera visión que tenían los inmigrantes europeos al llegar a Estados Unidos tras su travesía por el océano Atlántico. En términos arquitectónicos, la estatua recuerda al famoso Coloso de Rodas, una de las siete maravillas del mundo antiguo. Fue nominada para las nuevas siete maravillas del mundo moderno, donde resultó finalista. El nombre asignado por la Unesco es Monumento Nacional Estatua de la Libertad. Desde el 10 de junio de 1933 se encarga de su administración el Servicio de Parques Nacionales de los Estados Unidos.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;