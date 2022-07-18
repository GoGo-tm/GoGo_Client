export default {
  getCashData(query: string) {
    if (!query) throw Error("invalid query");
    const cash = localStorage[query] || null;
    return cash ? JSON.parse(cash) : cash;
  },
  setCashData(query: string, data: unknown) {
    localStorage.setItem(query, JSON.stringify(data));
  },
};
