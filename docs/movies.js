/**
 * @swagger
 * /moviesOrSeries/{id}:
 *  get:
 *   summary: Get MovieOrSerie by id
 *   description: endpoint to get movie by id
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      title: id
 *      required: true
 *      description: Numeric ID for the movie
 *      schema:
 *       id: integer
 *   responses:
 *     200:
 *       description: get movie OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               image:
 *                 type: string
 *
 *     204:
 *       description: movie not found
 *     400:
 *       description: create movie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 *
 */
