const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  it("constructor should set the message correctly", async () => {
    let instance = await HelloWorld.deployed();
    let message = await instance.message();
    assert.equal(message, "Hello World constructor");
  });

  it("owner should be accounts [0]", async () => {
    let instance = await HelloWorld.deployed();
    let owner = await instance.owner();
    assert.equal(owner, accounts[0]);
  });
});
