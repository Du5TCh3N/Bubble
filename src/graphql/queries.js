/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBubble = /* GraphQL */ `
  query GetBubble($id: ID!) {
    getBubble(id: $id) {
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
export const listBubbles = /* GraphQL */ `
  query ListBubbles(
    $filter: ModelBubbleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBubbles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBubbles = /* GraphQL */ `
  query SyncBubbles(
    $filter: ModelBubbleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBubbles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
