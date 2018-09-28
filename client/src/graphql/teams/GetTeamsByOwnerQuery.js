/* eslint-disable no-unused-vars */
import gql from 'graphql-tag'

export const GET_TEAMS_BY_OWNER = gql`
  query teamsByOwnerQuery {
    teamsByOwner {
      id
      name
      slug
      owner
      status {
        status
        reason
        createdAt
      }
      createdAt
      profile {
        avatar
        banner
        description
        motto
        updatedAt
      }
      members {
        role
        member {
          alias
          authId
        }
      }
    }
  }
`

export default GET_TEAMS_BY_OWNER
