import { gql } from 'apollo-boost';
import { AdminDataFragment } from './fragment.js';

export const adminListQuery = gql`
  query {
    admins {
      ...AdminData
    }
  }
  ${AdminDataFragment}
`;

export const addAdminMutation = gql`
  mutation addAdmin($name: String, $email: String) {
    addAdmin(input: { name: $name, email: $email }) {
      ...AdminData
      errors {
        key
        value
      }
    }
  }
  ${AdminDataFragment}
`;

export const sendInviteMutation = gql`
  mutation sendInvite($id: ID) {
    sendInvite(input: { id: $id } ) {
      ...AdminData
      errors {
        key
        value
      }
    }
  }
  ${AdminDataFragment}
`;
