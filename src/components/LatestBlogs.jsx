import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const LatestBlogs= () => {
  return (
    <>
     <section className='third-part latestblogs'>
    <div className='d-flex text-center new-arrivals'>
      <h1 className='mt-5'>Latest Blogs</h1>
      <p className='red-line mt-3'></p>
       </div>
    <div className="container mt-4">
          <div className='row  '>
            <div className='card-4 col-12 col-md-4 mb-4'>
              <button className='latest-btn my-3'><h4>Here are the trends I see coming this fall</h4>
              <p>by admin | dec 01, 2017</p>
              <a href="#">Read more</a>
              </button>
            </div>
            <div className='card-5 col-12 col-md-4 mb-4 '>
            <button className='latest-btn my-3'><h4>Here are the trends I see coming this fall</h4>
              <p>by admin | dec 01, 2017</p>
              <a href="#">Read more</a>
              </button>
            </div>
            <div className='card-6 col-12 col-md-4 mb-4'>
            <button className='latest-btn my-3'><h4>Here are the trends I see coming this fall</h4>
              <p>by admin | dec 01, 2017</p>
              <a href="#">Read more</a>
              </button>

            </div>
          </div>
        </div>
        </section>
    </>
  )
}



export default LatestBlogs; 