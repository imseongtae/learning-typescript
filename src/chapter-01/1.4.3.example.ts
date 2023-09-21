/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * 정확한 문서화
 * @module 1-4-3-정확한 문서화-Example
 */

type Material = string;

interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): this;
  prepare(): this;
}

/**
 * @description Performs a painter painting a particular painting.
 * @param {Painting} painter
 * @param {string} painting
 * @returns {boolean} Whether the painter painted the painting.
 */
function painPainting(painter: Painter, painting: string): boolean {
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return painter
    .prepare()
    .paint(painting, painter.ownMaterials)
    .finish();
}
