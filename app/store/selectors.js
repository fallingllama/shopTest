/* eslint indent: 0, implicit-arrow-linebreak: 0 */
export const getWholeCatalog = ({ catalog }) => catalog;

export const getProductByCatAndReference =
  (catRef, productRef) =>
  ({ catalog }) =>
    catalog.categories
      .find(c => c.reference === catRef)
      ?.prestations?.find(p => p.reference === productRef) || false;
