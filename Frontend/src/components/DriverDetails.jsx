const DriverDetails = () => {
  return (
    <div>
        <div className="flex justify-between p-2 mb-5">
        <div className="flex gap-2 items-center">
          <img className="rounded-full w-12 h-12"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HY1jhhu822jZ0xl27sNa1TdVjSREfT-YCA&s" alt="" />
          <h4 className="text-lg font-medium">Kanha Sharma</h4>
         </div>
         <div className="flex flex-col items-end">
            <h4 className="text-lg font-medium">Rs2450.45</h4>
            <p className="text-sm text-gray-400">Earned</p>
         </div>
        </div>
        <div className="w-full bg-[#eee] p-5 flex items-center justify-between rounded-lg">
          <div className="flex items-center flex-col gap-2">
          <i className="text-2xl font-semibold ri-time-line"></i>
          <h4 className="font-medium text-lg">10.2</h4>
          <p className="text-gray-500">Hours Online</p>
          </div>
          <div className="flex items-center flex-col gap-2">
          <i className="text-2xl font-semibold ri-speed-up-line"></i>
          <h4 className="font-medium text-lg">230 KM</h4>
          <p className="text-gray-500">Total Distance</p>
          </div>
          <div className="flex items-center flex-col gap-2">
          <i className="text-2xl font-semibold ri-booklet-line"></i>
          <h4 className="font-medium text-lg">Rs 2340 </h4>
          <p className="text-gray-500">Total Earned</p>
          </div>
        </div>
    </div>
  )
}

export default DriverDetails