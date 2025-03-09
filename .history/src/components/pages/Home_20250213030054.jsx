import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <div>
        <h1>Empower Your Future with New Skills <br/> -Learn Anytime, Anywhere!</h1>
        <p>Unlock your potential with our diverse courses! Learn at your own pace with expert-led <br/>lessons; and gain the skills that you need to excel in your chosen field. Start today! </p>
        <div className="mt-6  ">
                <NavLink
                 to="/menu">
                  <Button  title=""  />
                </NavLink>
              </div>
      </div>
      </div>
    </div>
  )
}

export default Home
