import Character from '../src/js/biz-func.js';


describe("Character", () => {

  test("should create a character object with multiple properties", () => {
    const character = new Character(2,4,5);
    expect(character.strength).toEqual(2);
    expect(character.knowledge).toEqual(4);
    expect(character.command).toEqual(5); 
  });

  // test('should correctly determine whether three lengths are not a Character', () => {
  //   const notCharacter = new Character(3,9,22);
    // expect(exampleTestFunction()).toEqual("hi there, from the deck")
  // });


   
  });


