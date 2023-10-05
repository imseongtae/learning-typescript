/**
 * 교차 타입의 위험성
 * @module 4-4-1-Example
 */

type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem = Haiku | Villanelle;

const oneArt: ShortPoem = {
  // Type '{ author: string; type: "villanelle"; }'
  // is not assignable to type 'ShortPoem'.
  //   Type '{ author: string; type: "villanelle"; }'
  //   is not assignable to type 'Villanelle'.
  //     Property 'meter' is missing in type
  //     '{ author: string; type: "villanelle"; }'
  //     but required in type '{ meter: number; type: "villanelle";
  author: 'Elizabeth Bishop',
  type: 'villanelle',
};
