import { gql } from '@apollo/client';

export const GET_DOCTOR_DETAILS = gql`
  query getDoctorQuery($id: ID!) {
    doctor(id: $id) {
      data {
        id
        attributes {
          doctor_name
          doctor_specialty
          address
          PPO
          image
        }
      }
    }
  }
`;
