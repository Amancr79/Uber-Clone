import {Link} from "react-router-dom"
const Riding = () => {
  return (
    <div className="h-screen">
     <Link to='/user-home'className="right-2 top-2 flex fixed bg-white w-10 h-10 rounded-full justify-center items-center">
     <i className="text-xl font-medium ri-home-3-line"></i>
     </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover"
          src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif"
          alt=""
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between mt-2">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="flex flex-col items-end">
            <h4 className="font-medium">SANTH</h4>
            <h3 className="text-xl font-bold -mt-1">KA15AK00-0</h3>
            <p className="text-gray-400 -mt-1">White Suzuki S-presso LXI</p>
            <i className="text-gray-600 ri-star-fill">4.9</i>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full flex justify-start items-center p-3 border-b-2 border-gray">
            <i className="text-xl mr-3 ri-square-fill"></i>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-semibold">91 SpringBoot/D-56</h2>
              <h4 className="text-sm text-gray-400">Noida, Uttar Pradesh</h4>
            </div>
          </div>
          <div className="w-full flex justify-start items-center p-3">
            <i className="text-xl mr-3 ri-bank-card-fill"></i>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-semibold">Rs 173.23</h2>
              <h4 className="text-sm text-gray-400">Cash Cash</h4>
            </div>
          </div>
        </div>
      <button className="mt-2 bg-green-600 rounded-lg font-semibold w-full text-white px-4 py-2">
          Confirm
      </button>
      </div>
    </div>
  );
};

export default Riding;
