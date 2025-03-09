import about from '../../assets/images/about.png'

const AboutUs = () => {
  return (
    <div>
      <div className='flex flex-col flex-wrap'>
        <img src={about} alt="" />
        <source />
       <h1 className='text-4xl text-white font-extrabold relative bottom-100 text-center'>About Us</h1>
       <p></p>
      </div>
    </div>
  )
}

export default AboutUs
