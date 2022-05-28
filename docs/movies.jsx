/**
 * @swagger
 * /moviesOrseries:
 *  moviesGet:
 *   summary: moviesGet
 *   description: endpoint to get movie
 *     parameters:
 *     - in: path
 *       title: id
 *       required: true
 *       description: Movie title
 *          schema:
 *          type: string
 *        creation_date:
 *          required: true
 *            description: Creation date
 *            schema:
 *            type: string
 *         image:
 *          required: true
 *          description: the picture film
 *          schema:
 *             type: object
 *   responses:
 *     200:
 *       description: get user OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                  readOnly: true
 *               image:
 *                 type: string
 *                  readOnly: true
 *               creation_date:
 *                 type: string
 *                  readOnly: true
 *               qualification:
 *                 type: string
 *                  writeOnly: true
 *
 *     204:
 *       description: user not found
 *     400:
 *       description: create user OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
