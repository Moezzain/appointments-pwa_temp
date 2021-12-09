import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useQuery, useMutation } from '@apollo/react-hooks';
import DoctorInformation from '../../../components/partials/appointments/DoctorInformation';
import SelectReasons from '../../../components/partials/appointments/SelectReasons';
import DoctorReasonsBox from '../../../components/partials/appointments/DoctorReasonsBox';
import {
  doctor_mock,
  patient_doctor_reasons_mock as patient_reasons_mock,
} from '../../../mock-data/appointment';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '../../../graphql/withApollo';
import { GET_DOCTOR_DETAILS } from '../../../graphql/queries/doctor_queries';

const AppointmentHome: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [open, setOpen] = useState(true);
  const [reasons, setReasons] = useState([]);
  const { loading, error, data } = useQuery(GET_DOCTOR_DETAILS, {
    variables: { id: pid },
  });

  return (
    <div className='w-full'>
      <Head>
        <title>Appointments Application</title>
        <meta name='description' content='Appointment creation flow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data?.doctor && (
        <DoctorInformation doctor={data?.doctor?.data?.attributes} />
      )}
      {reasons.length > 0 && (
        <DoctorReasonsBox
          reasons={reasons}
          openEdit={() => open !== true && setOpen(true)}
        />
      )}
      <SelectReasons
        setReasons={setReasons}
        patient_reasons={patient_reasons_mock}
        hide={() => open !== false && setOpen(false)}
        open={open}
      />
    </div>
  );
};

export default withApollo(AppointmentHome, { getDataFromTree });
