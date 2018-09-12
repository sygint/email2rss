import asyncHandler from 'express-async-handler'

import users from '../users.service'

const mockRouter = {
  route: (path) => ({
    post() { }
  })
}

const usersService = users({ router: mockRouter, asyncHandler })

describe('users service', () => {
  describe('POST', () => {
    it(`should return 'already exists'`, () => {
      console.log(usersService)
    });
  });
});