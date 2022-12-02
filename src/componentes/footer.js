import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Podés suscribirte para saber novedades sobre mí</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Dirección de mail' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <MDBRow>
          <h4> Acá debajo podés seguirme en mis redes sociales :D</h4>
        </MDBRow>
        <br></br>
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <a href='https://www.facebook.com/' className='text-white'><h5 className='text-uppercase'>FACEBOOK</h5></a>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <a href='https://twitter.com/' className='text-white'><h5 className='text-uppercase'>TWITTER</h5></a>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <a href='https://www.instagram.com/' className='text-white'><h5 className='text-uppercase'>INSTAGRAM</h5></a>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <a href='https://telegram.org/' className='text-white'><h5 className='text-uppercase'>TELEGRAM</h5></a>

            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Hecho por Diego con un poquito de <a className='text-white' href='https://mdbootstrap.com/'>
          Bootstrap
        </a> y
        otro poquito de <a className='text-white' href='https://react-bootstrap.github.io/'>
          Bootstrap
        </a>
      </div>
    </MDBFooter>
  );
}