const getDog = function(id) {
  return fetch(`/api/dog/${id}`)
    .then(resp => resp.json());
};

export {
  getDog,
};
