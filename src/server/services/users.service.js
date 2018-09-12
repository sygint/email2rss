/**
 * @file Users services
 */

export default ({ router, asyncHandler }) => {
  router.route('/')
    .post(
      asyncHandler(async (req, res) => {
        res.json({ status: 'success' });
      })
    )
}