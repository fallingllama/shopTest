export const minsToHourMins = mins => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h ? `${h} h ` : '';
  m = `${m} min`;
  return `${h}${m}`;
};

export const getDurationTotal = products =>
  minsToHourMins(products.reduce((acc, p) => acc + p.qty * p.duration, 0));

export const getPriceTotal = products =>
  products.reduce((acc, p) => acc + p.qty * p.duration * (p.price / 60), 0).toFixed(2);

export const getQtyTotal = products =>
  products.reduce((acc, cartProduct) => acc + cartProduct.qty, 0);
