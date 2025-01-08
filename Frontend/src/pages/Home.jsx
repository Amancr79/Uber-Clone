import backgroundImage from '../images/background.jpg'; // Ensure the correct path and extension
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
      <div className="h-screen w-full flex bg-red-400 justify-between flex-col pt-3 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2 className="ml-5 text-3xl text-black font-medium">Uber</h2>
        <div className="bg-white pb-5 py-5 px-5">
          <h2 className="font-medium text-2xl">Get started with Uber</h2>
          <Link to='/login' className="flex justify-center font-medium bg-black w-full text-white p-2 rounded mt-2">
            Continue
          </Link>
        </div>
      </div>
    </div>
  ); 
}

export default Home;
