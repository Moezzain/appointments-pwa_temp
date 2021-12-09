export const doctor_mock = {
  id: 1,
  doctor_name: 'Darlene Robertson',
  doctor_specialty: 'Neurosurgeon',
  address: '6513 Dogwood Ave undefined Syracuse, Alaska 62927 United States',
  PPO: true,
};

export const patient_doctor_prev_reasons_mock = [
  {
    id: 1,
    reason: 'Reason 1',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: true,
  },
  {
    id: 2,
    reason: 'Reason 2',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
  {
    id: 3,
    reason: 'Reason 3',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
  {
    id: 4,
    reason: 'Reason 4',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: true,
  },
];

export const patient_doctor_new_reasons_mock = [
  {
    id: 1,
    reason: 'Reason 5',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
  {
    id: 2,
    reason: 'Reason 6',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
  {
    id: 3,
    reason: 'Reason 7',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
  {
    id: 4,
    reason: 'Reason 8',
    last_seen: new Date().toISOString().slice(0, 10),
    future_appointments: new Date().toISOString().slice(0, 10),
    check: false,
  },
];
