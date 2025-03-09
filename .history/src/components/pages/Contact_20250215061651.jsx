import coat from '../../assets/images/coat.png'

const Contact = () => {
  return (
    <div>
      <div>
        <img src={coat} alt="" className="src" />
        <h1 className='text-4xl text-center text-white font-extrabold relative bottom-50'>Contact Us</h1>
      </div>
      <div className='flex flex-row'>
      <div>
        <h1>phone</h1>
      </div>
      </div>
    </div>
  )
}

export default Contact
