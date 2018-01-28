const assert = require('assert');
const app = require('../../api/app');

describe('\'recipe\' service', () => {
  it('registered the service', () => {
    const service = app.service('recipes');

    assert.ok(service, 'Registered the service');
  });
});
