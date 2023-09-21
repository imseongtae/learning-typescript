/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * 값 비싼 자유
 * @module 1-2-1-값 비싼 자유-Example
 */

/**
 * @description Performs a painter painting a particular painting.
 * @param {Painting} painter
 * @param {string} painting
 * @returns {boolean} Whether the painter painted the painting.
 */
function painPainting(painter, painting) {
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return painter
    .prepare()
    .paint(painting, painter.ownMaterials)
    .finish();
}
