module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create(context) {
      context.data.createdAt = new Date().getTime();
    },
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
