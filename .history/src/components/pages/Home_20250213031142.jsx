import main from '../../assets/images/main.png'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Home = () => {
  return (
    <div>
      <div className='flex flex-row gap-60 pt-20 bg-blue-950 text-white'>
        <div className='flex flex-col justify-start items-start pl-20'>
        <h1 className='text-3xl font-extrabold'>Empower Your Future with New Skills <br/> -Learn Anytime, Anywhere!</h1>
        <p className='font-mono'>Unlock your potential with our diverse courses! Learn at your own pace with expert-led <br/>lessons; and gain the skills that you need to excel in your chosen field. Start today! </p>
        <div className="mt-6  ">
                <NavLink
                 to="/courses">
                  <Button  title="Join Now"  />
                </NavLink>
              </div>
              </div>
            
              <div className='flex justify-end items-end'>
                <img src={main} alt="" className="src" />
                </div>
      </div>
    </div>
  )
}

export default Home
