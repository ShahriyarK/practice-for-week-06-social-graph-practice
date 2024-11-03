// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    const id = this.currentID + 1;
    const newUser = {
      id,
      name,
    };
    this.users[id] = newUser;
    this.follows[id] = new Set();
    this.currentID++;
    return id;
  }

  getUser(userID) {
    const user = this.users[userID];
    if (user) return user;
    return null;
  }

  follow(userID1, userID2) {
    const user1 = this.users[userID1];
    const user2 = this.users[userID2];
    if (!user1 || !user2) return false;
    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {
    // Your code here
    const follows = this.follows[userID];
    if (!follows) return null;
    return follows;
  }

  getFollowers(userID) {
    const userIds = Object.keys(this.follows);
    const followers = new Set();
    userIds.forEach((id) => {
      if (id !== userID) {
        if (this.follows[id].has(userID)) followers.add(Number(id));
      }
    });
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
