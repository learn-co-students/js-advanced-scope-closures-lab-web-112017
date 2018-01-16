// stores all instances
let store = {users: [], items: []};
// counter to create userIds
let userId = 0;
// class
class User {
  // sets params on instantiation
  constructor(name) {
    this.id = ++userId
    this.name = name
    store.users.push(this)
  }
  items() {
    return store.items.filter(item => {
      return item.userId === this.id;
    })
  }
}

class Item {
  constructor(name, price, user) {
    this.name = name;
    this.price =  price;
    this.id = ++itemId;
    store.items.push(this);
  }

  setUser(user) {
    this.userId = user.id;
  }

  users() {
    return store.users.find(function(user) {
        return user.id === this.userId;
    });
  }

}

function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let travel = parseInt(endBlock) - parseInt(startBlock);
    let total = blockRange - travel;

    if(total > 0){
      return `within range by ${total}`
    } else {
      return `${total * -1} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    let total = amount * percent;
    return total
  }
}

function createDriver() {
  let id = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id
    }
  }
}
