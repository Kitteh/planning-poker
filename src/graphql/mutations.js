// eslint-disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createPlayer = `mutation CreatePlayer($input: CreatePlayerInput!) {
  createPlayer(input: $input) {
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
export const updatePlayer = `mutation UpdatePlayer($input: UpdatePlayerInput!) {
  updatePlayer(input: $input) {
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
export const deletePlayer = `mutation DeletePlayer($input: DeletePlayerInput!) {
  deletePlayer(input: $input) {
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
export const createStory = `mutation CreateStory($input: CreateStoryInput!) {
  createStory(input: $input) {
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
export const updateStory = `mutation UpdateStory($input: UpdateStoryInput!) {
  updateStory(input: $input) {
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
export const deleteStory = `mutation DeleteStory($input: DeleteStoryInput!) {
  deleteStory(input: $input) {
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
