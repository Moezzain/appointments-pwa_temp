import { gql } from 'apollo-boost';

export const GET_DOCTOR_DETAILS = gql`
  query {
    doctor(id: 1) {
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
