/**
  * Manipulates nicks into a state that dendrite will handle
  * @param nick The nick to change
  * @return A string that is the nick fixed for dendrite
*/
export function DendriteHack(nick: string): string {
  newNick = nick.toLowerCase();
  // Note: This is firepi's casemapping set: a-z{}|^  -->  A-Z[]\~
  // TODO: Handle bad symbols here

  return newNick;
}
