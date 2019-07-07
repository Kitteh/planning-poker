// eslint-disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    title
    players {
      items {
        id
        name
        score
        gameId
      }
      nextToken
    }
    stories {
      items {
        id
        name
        score
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      players {
        nextToken
      }
      stories {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPlayer = `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    name
    score
    game {
      id
      title
      players {
        nextToken
      }
      stories {
        nextToken
      }
    }
    gameId
  }
}
`;
export const listPlayers = `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      score
      game {
        id
        title
      }
      gameId
    }
    nextToken
  }
}
`;
export const getStory = `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    name
    score
    game {
      id
      title
      players {
        nextToken
      }
      stories {
        nextToken
      }
    }
  }
}
`;
export const listStorys = `query ListStorys(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      score
      game {
        id
        title
      }
    }
    nextToken
  }
}
`;
