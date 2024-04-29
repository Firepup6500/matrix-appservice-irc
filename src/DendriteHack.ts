/**
  * Manipulates nicks into a state that dendrite will handle
  * @param nick The nick to change
  * @return A string that is the nick fixed for dendrite
*/
export function DendriteHack(nick: string): string {
  string newNick = nick.toLowerCase();
  // TODO: Handle bad symbols here

  return newNick;
}
