import about from '../../assets/images/about.png'

const AboutUs = () => {
  return (
    <div>
      <div className='flex flex-col flex-wrap'>
        <img src={about} alt="" />
        <source />
       <h1 className='text-4xl text-white font-extrabold relative '>About Us</h1>
      </div>
    </div>
  )
}

export default AboutUs
