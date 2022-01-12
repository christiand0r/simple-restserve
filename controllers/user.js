const { response, request } = require("express");

const usersGet = (req = request, res = response) => {
  const queryParams = req.query;

  res.json({
    msg: "get API - controller",
    queryParams,
  });
};

const usersPost = (req = request, res = response) => {
  const { name, age } = req.body;

  res.status(201).json({
    type: "post API - controller",
    name,
    age,
  });
};

const usersPut = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controller",
    id,
  });
};

const usersDelete = (req = request, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

const usersPatch = (req = request, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

module.exports = { usersGet, usersPost, usersPut, usersDelete, usersPatch };
