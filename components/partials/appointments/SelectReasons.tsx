import Image from 'next/image';
import { useState } from 'react';
import Button from '../../elements/Button';

export default function SelectReasons({
  setReasons,
  patient_reasons,
  hide,
  open,
}: {
  setReasons: any;
  patient_reasons: Array<any>;
  hide: Function;
  open: boolean;
}) {
  const [tempReasons, setTempReasons] = useState(patient_reasons);
  const changeToggleBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let tempReason = patient_reasons;
    tempReason[index].check = e.target.value;
    setTempReasons(tempReason);
  };

  return (
    <div className='fixed z-10inset-0 overflow-y-auto transition-all'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0'>
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity ${
            !open && 'hidden'
          }`}
          aria-hidden='true'
        ></div>
        <div
          className={`${
            !open ? 'h-0' : 'h-96'
          } inline-block bg-gray-200 rounded-t-lg text-center max-w-xl text-gray-800 overflow-hidden shadow-xl w-full fixed bottom-0 ml:-ml-72 ml:left-1/2 transition-all`}
        >
          <div className='w-full h-full flex flex-col px-4'>
            <span className='border-b border-solid border-gray-300 h-9 pt-2 text-center'>
              {' '}
              Select from previous reasons for this visit{' '}
            </span>
            <table className='table-auto mt-2 mb-3 text-xs font-semibold'>
              <tbody className='overflow-hidden rounded-t-xl'>
                <tr className=' text-gray-400 h-14'>
                  <td className='w-1/4'>Reasons</td>
                  <td className='w-1/4'>Last seen</td>
                  <td className='w-1/4'>Future appointments</td>
                  <td className='w-1/4'>select</td>
                </tr>
                {patient_reasons.map((reason, index) => (
                  <tr key={index} className='h-12'>
                    <td
                      className={`border-b border-gray-300 bg-white ${
                        index === 0 && 'rounded-tl-lg'
                      }`}
                    >
                      {reason.reason}
                    </td>
                    <td className='text-gray-400 border-b border-gray-300 bg-white'>
                      {reason.last_seen}
                    </td>
                    <td className='border-b border-gray-300 bg-white'>
                      {reason.future_appointments}
                    </td>
                    <td
                      className={`border-b border-gray-300 bg-white ${
                        index === 0 && 'rounded-tr-lg'
                      }`}
                    >
                      {' '}
                      <input
                        onChange={(e) => changeToggleBox(e, index)}
                        type='checkbox'
                        defaultChecked={reason.check}
                        className='form-checkbox'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=''>
              <Button title='Cancel' click={hide} />
              <Button
                title='Confirm'
                click={() => {
                  setReasons(tempReasons);
                  hide();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
