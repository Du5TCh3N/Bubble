/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBubble = /* GraphQL */ `
  mutation CreateBubble(
    $input: CreateBubbleInput!
    $condition: ModelBubbleConditionInput
  ) {
    createBubble(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBubble = /* GraphQL */ `
  mutation UpdateBubble(
    $input: UpdateBubbleInput!
    $condition: ModelBubbleConditionInput
  ) {
    updateBubble(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBubble = /* GraphQL */ `
  mutation DeleteBubble(
    $input: DeleteBubbleInput!
    $condition: ModelBubbleConditionInput
  ) {
    deleteBubble(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
