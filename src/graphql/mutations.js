/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBubble = /* GraphQL */ `
  mutation CreateBubble(
    $name: String!
    $img: String!
    $imgs: [String]!
    $description: String!
    $space: String!
    $tags: [String]!
    $start_date: String!
    $end_date: String!
    $creator_name: String!
    $creator_location: String!
    $members: [String]!
  ) {
    createBubble(
      name: $name
      img: $img
      imgs: $imgs
      description: $description
      space: $space
      tags: $tags
      start_date: $start_date
      end_date: $end_date
      creator_name: $creator_name
      creator_location: $creator_location
      members: $members
    ) {
      id
      name
      img
      imgs
      description
      space
      tags
      start_date
      end_date
      creator_name
      creator_location
      members
    }
  }
`;
export const updateBubble = /* GraphQL */ `
  mutation UpdateBubble(
    $id: ID!
    $name: String
    $img: String
    $imgs: [String]
    $description: String
    $space: String
    $tags: [String]
    $start_date: String
    $end_date: String
    $creator_name: String
    $creator_location: String
    $members: [String]
  ) {
    updateBubble(
      id: $id
      name: $name
      img: $img
      imgs: $imgs
      description: $description
      space: $space
      tags: $tags
      start_date: $start_date
      end_date: $end_date
      creator_name: $creator_name
      creator_location: $creator_location
      members: $members
    ) {
      id
      name
      img
      imgs
      description
      space
      tags
      start_date
      end_date
      creator_name
      creator_location
      members
    }
  }
`;
export const deleteBubble = /* GraphQL */ `
  mutation DeleteBubble($id: ID!) {
    deleteBubble(id: $id) {
      id
      name
      img
      imgs
      description
      space
      tags
      start_date
      end_date
      creator_name
      creator_location
      members
    }
  }
`;
