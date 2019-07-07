// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = `subscription OnCreatePlayer($gameId: String!) {
  onCreatePlayer(gameId: $gameId) {
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
export const onUpdatePlayer = `subscription OnUpdatePlayer($gameId: String!) {
  onUpdatePlayer(gameId: $gameId) {
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
export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateStory = `subscription OnCreateStory {
  onCreateStory {
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
export const onUpdateStory = `subscription OnUpdateStory {
  onUpdateStory {
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
export const onDeleteStory = `subscription OnDeleteStory {
  onDeleteStory {
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
