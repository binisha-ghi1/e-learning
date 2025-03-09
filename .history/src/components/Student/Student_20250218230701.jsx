import { CiStar } from "react-icons/ci";

const Student = () => {
  return (
    <div>
      <div className='text-center  '>
        <div className='flex items-center justify-center flex-row gap-12'>
            <div className='flex flex-col bg-gray-200 font-medium'>
                <div className="flex flex-row items-center justify-center pt-4 bg-yell">
            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
                <h1 className='text-2xl pt-4 pb-4 text-blue-950 font-medium'>James White</h1>
                <p className='pt-4 pb-4'>Student</p>
                <p className='pl-5 pr-5'>“Amazing platform! The <br/> lessons are clear, and the <br/> instructors are top-notch.”</p>
            </div>
            <div className='flex flex-col bg-gray-200 font-medium'>
            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                <h1 className='text-2xl pt-4 pb-5 text-blue-950'>Jack Grey</h1>
                <p className='pt-4 pb-4'>Student</p>
                <p className='pl-5 pr-5'>“The course exceeded my <br/>expectations. I can’t wait<br/> to take another one!”</p>
            </div>
            <div className='flex flex-col bg-gray-200 font-medium'>
            <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                <h1 className='text-2xl pt-4 pb-4 text-blue-950'>Nancy Nancy</h1>
                <p className='pt-4 pb-4'>Student</p>
                <p className='pl-5 pr-5'>“The courses are well- <br/>structured and easy to <br/>follow. I learned so much!”</p>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Student
