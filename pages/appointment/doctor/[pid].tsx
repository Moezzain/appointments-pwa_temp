import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import DoctorInformation from '../../../components/partials/appointments/DoctorInformation';
import SelectReasons from '../../../components/partials/appointments/SelectReasons';
import DoctorReasonsBox from '../../../components/partials/appointments/DoctorReasonsBox';
import {
  doctor_mock,
  patient_doctor_prev_reasons_mock as patient_reasons_mock,
  patient_doctor_new_reasons_mock as patient_reasons_new_mock,
} from '../../../mock-data/appointment';
import { getDataFromTree } from '@apollo/client/react/ssr';
import withApollo from '../../../graphql/withApollo';
import { GET_DOCTOR_DETAILS } from '../../../graphql/queries/doctor_queries';

const AppointmentHome: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [openPrev, setOpenPrev] = useState(true);
  const [openNew, setOpenNew] = useState(false);
  const [reasonsPrev, setReasonsPrev] = useState([]);
  const [reasonsNew, setReasonsNew] = useState([]);
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
      {reasonsPrev.length + reasonsNew.length > 0 && (
        <DoctorReasonsBox
          reasons={[...reasonsPrev, ...reasonsNew]}
          openEdit={() => openPrev !== true && setOpenPrev(true)}
          openNew={() => openNew !== true && setOpenNew(true)}
        />
      )}
      {/* Estimate time Required */}

      {/*  */}
      {/* Describe other reasons */}

      {/*  */}
      {/* consult types */}

      {/*  */}
      {/* Notice */}

      {/*  */}

      <SelectReasons
        setReasons={setReasonsPrev}
        patient_reasons={patient_reasons_mock}
        hide={() => openPrev !== false && setOpenPrev(false)}
        open={openPrev}
      />
      <SelectReasons
        setReasons={setReasonsNew}
        patient_reasons={patient_reasons_new_mock}
        hide={() => openNew !== false && setOpenNew(false)}
        open={openNew}
      />
      {/* bottom buttons */}

      {/*  */}
    </div>
  );
};

export default withApollo(AppointmentHome, { getDataFromTree });
