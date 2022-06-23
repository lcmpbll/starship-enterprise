import Character from '../src/js/biz-func.js';


describe("Character", () => {

  test("should create a character object with multiple properties", () => {
    const character = new Character();
    expect(character.xP).toEqual();
    expect(character.knowledge).toEqual();
    expect(character.command).toEqual(); 
    expect(character.strength).toEqual();
  });

  test("should add 1 to strength when 10xP is reached", () => {
    const character = new Character();
    expect(character.AddStats()).toEqual();
  });
});

  // test("should add 1 to strength when 10xP is reached", () => {
  //   const character = new Character(0);
  //   expect(character.AddStats()).toEqual();
  // });

  // test('should correctly determine whether three lengths are not a Character', () => {
  //   const notCharacter = new Character(3,9,22);
    // expect(exampleTestFunction()).toEqual("hi there, from the deck")
  // });


   
  

