import coat from '../../assets/images/coat.png'
import map from '../../assets/images/map.png'

const Contact = () => {
  return (
    <div>
      <div>
        <img src={coat} alt="" className="src" />
        <h1 className='text-4xl text-center text-white font-extrabold relative bottom-50'>Contact Us</h1>
      </div>
      <div className='flex flex-row gap-20 mt-20 justify-center items-center'>
      <div>
        <h1>phone</h1>
      </div>
      <div>
        <h1>email</h1>
      </div>
      <div>
        <h1>katmandu</h1>
      </div>
      </div>
      <div className='flex flex-row mt-20'>
        <img src={map} alt="" className="src" />
        <div cl>
            contact
        </div>

      </div>
    </div>
  )
}

export default Contact
