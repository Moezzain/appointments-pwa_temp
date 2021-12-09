export default function DoctorInformation({ doctor }: { doctor: any }) {
  return (
    <div className='w-full flex  justify-between px-4'>
      <div className='relative'>
        <img className='w-11 h-11' src={doctor.image} alt='doctor image' />
        {doctor.PPO && <span className='flex justify-center items-center absolute left-0 bg-blue-500 text-white rounded-md -top-2 text-xs w-8 h-4'>
          PPO
        </span> }
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between font-custom ml-2'>
          <span className='font-semibold text-xs'>{doctor.doctor_name}</span>
          <span className='font-semibold text-xs'>
            {doctor.doctor_specialty}
          </span>
        </div>
        <span className='ml-2 text-xs'>{doctor.address} </span>
      </div>
    </div>
  );
}
