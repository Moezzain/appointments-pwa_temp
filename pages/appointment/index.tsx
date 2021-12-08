import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import DoctorInformation from '../../components/partials/appointments/DoctorInformation';
import SelectReasons from '../../components/partials/appointments/SelectReasons';
import DoctorReasonsBox from '../../components/partials/appointments/DoctorReasonsBox';
import {
  doctor_mock,
  patient_doctor_reasons_mock as patient_reasons_mock,
} from '../../mock-data/appointment';

const AppointmentHome: NextPage = () => {
  const [open, setOpen] = useState(true);
  const [reasons, setReasons] = useState([]);

  return (
    <div className='w-full'>
      <Head>
        <title>Appointments Application</title>
        <meta name='description' content='Appointment creation flow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DoctorInformation doctor={doctor_mock} />
      {reasons.length > 0 && (
        <DoctorReasonsBox
          reasons={reasons}
          openEdit={() => open !== true && setOpen(true)}
        />
      )}
      {open && (
        <SelectReasons
          setReasons={setReasons}
          patient_reasons={patient_reasons_mock}
          hide={() => open !== false && setOpen(false)}
        />
      )}
    </div>
  );
};

export default AppointmentHome;
