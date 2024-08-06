import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const SecondPart = () => {
  return (
    <>
      <section className='second-part'>
        <div className="container">
          <div className='row  '>
            <div className='card-1 col-12 col-md-4 mb-4'>
              <button className='my-3 second-part-btn'><b>WOMEN'S</b></button>
            </div>
            <div className='card-2 col-12 col-md-4 mb-4 '>
              <button className='my-3 second-part-btn'><b>ACCESSORIES'S</b></button>
            </div>
            <div className='card-3 col-12 col-md-4 mb-4'>
              <button className='my-3 second-part-btn'><b>MEN'S</b></button>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}


export default SecondPart;