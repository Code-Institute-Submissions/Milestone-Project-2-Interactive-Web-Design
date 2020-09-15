var dicenumber = diceNumber();

//Testing that the dice number is between 1-6
describe("Dice number", function() {
  it("should be between 1 and 6", function() {
    expect(dicenumber).toBeGreaterThan(0);
    expect(dicenumber).toBeLessThan(7);
  });
});


//Testing that players' names are not defined initially
describe("Player 1 name ", function() {
  it("at the start name is undefined", function() {
    expect(name1).toBe(undefined);
  });
});

describe("Player 2 name ", function() {
  it("at the start name is undefined", function() {
    expect(name2).toBe(undefined);
  });
});


//Testing that dice numbers are undefined initially
describe("Player 1 dice number", function() {
  it("at the start dice number is undefined", function() {
    expect(randomDiceNumber1).toBe(undefined);
  });
});

describe("Player 2 dice number", function() {
  it("at the start dice number is undefined", function() {
    expect(randomDiceNumber2).toBe(undefined);
  });
});
