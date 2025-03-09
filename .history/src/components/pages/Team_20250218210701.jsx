import founder from '../../assets/images/founder.png'
import nana from '../../assets/images/nana.png'
import henry from '../../assets/images/henry.png'
import ccr from '../../assets/images/ccr.png'

const Team = () => {
  return (
    <div>
      Our Team 
      <div>
        <div>
          <img src={founder} alt="" className="src" />
        <h1>Henry Smith</h1>
        <p>Founder</p>
        </div>
        <div>
          <img src={nana} alt="" className="src" />
        <h1>Nancy White</h1>
        <p>Manager</p>
        </div>
        <div>
          <img src={henry} alt="" className="" />
        <h1>Henry Smith</h1>
        <p>Marketing Head</p>
        </div>
        <div>
          <img src={ccr} alt="" className="src" />
        <h1>Nancy White/h1>
        <p>Designer</p>
        </div>
      </div>
    </div>
  )
}

export default Team
