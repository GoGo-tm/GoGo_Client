const getSearchData = () => {
  return [
    {
      title: "",
      id: "",
    },
  ];
};

export default {
  async searchSeed() {
    return await Promise.all(getSearchData());
  },
};
