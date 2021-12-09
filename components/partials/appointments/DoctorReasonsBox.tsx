import Button from '../../elements/Button';

export default function DoctorReasonsBox({
  reasons,
  openEdit,
  openNew,
}: {
  reasons: Array<any>;
  openEdit: Function;
  openNew: Function;
}) {
  return (
    <div className='w-full flex  justify-between px-4'>
      <div className='w-full flex flex-col min-h-1/2 p-2 border border-blue-600 mt-4 shadow-lg rounded-md'>
        <div className='flex justify-between font-custom'>
          <span className='font-semibold text-xs'>Reasons</span>
          <span
            onClick={() => openEdit()}
            className='font-semibold text-xs text-blue-700 cursor-pointer'
          >
            Edit
          </span>
        </div>
        <div className='text-gray-600 text-xs'>
          {reasons.map(
            ({ reason, check }, index) => check && <p key={index}>{reason}</p>
          )}
        </div>
        <span
          onClick={() => openNew()}
          className='text-blue-700 font-semibold text-sm mb-5 cursor-pointer'
        >
          Click here to add reasons{' '}
        </span>
        <div className='flex justify-center'>
          <Button title='Done' click={() => console.log('')} />
        </div>
      </div>
    </div>
  );
}
