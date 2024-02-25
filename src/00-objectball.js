// Function to find the player with the largest shoe size and return their number of rebounds
function bigShoeRebounds() {
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;
  
    // Iterate through players to find the one with the largest shoe size
    for (const team of Object.values(gameObj)) {
      for (const player of team.players) {
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    // Return the number of rebounds of the player with the largest shoe size
    return playerWithLargestShoe.rebounds;
  }
  
  // Function to find the player with the most points
  function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints = null;
  
    // Iterate through players to find the one with the most points
    for (const team of Object.values(gameObj)) {
      for (const player of team.players) {
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerWithMostPoints = player.playerName;
        }
      }
    }
  
    // Return the player with the most points
    return playerWithMostPoints;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    let mostPoints = 0;
    let winningTeamName = null;
  
    // Iterate through teams to find the one with the most points
    for (const [teamName, team] of Object.entries(gameObj)) {
      let teamPoints = 0;
      for (const player of team.players) {
        teamPoints += player.points;
      }
      if (teamPoints > mostPoints) {
        mostPoints = teamPoints;
        winningTeamName = teamName;
      }
    }
  
    // Return the name of the winning team
    return winningTeamName;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    let longestNameLength = 0;
    let playerWithLongestName = null;
  
    // Iterate through players to find the one with the longest name
    for (const team of Object.values(gameObj)) {
      for (const player of team.players) {
        if (player.playerName.length > longestNameLength) {
          longestNameLength = player.playerName.length;
          playerWithLongestName = player.playerName;
        }
      }
    }
  
    // Return the player with the longest name
    return playerWithLongestName;
  }
  
  // Function to check if the player with the longest name had the most steals
  function doesLongNameStealATon() {
    let mostSteals = 0;
    let playerWithMostSteals = null;
  
    // Find the player with the most steals
    for (const team of Object.values(gameObj)) {
      for (const player of team.players) {
        if (player.steals > mostSteals) {
          mostSteals = player.steals;
          playerWithMostSteals = player.playerName;
        }
      }
    }
  
    // Find the player with the longest name
    let longestNameLength = 0;
    let playerWithLongestName = null;
    for (const team of Object.values(gameObj)) {
      for (const player of team.players) {
        if (player.playerName.length > longestNameLength) {
          longestNameLength = player.playerName.length;
          playerWithLongestName = player.playerName;
        }
      }
    }
  
    // Check if the player with the longest name had the most steals
    return playerWithLongestName === playerWithMostSteals;
  }
  