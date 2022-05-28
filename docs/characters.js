/**
 * @swagger
 * /characters/{id}:
 *  get:
 *   summary: Get Character by id
 *   description: endpoint to get character by id
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      description: Numeric ID for the character
 *      schema:
 *       id: integer
 *   responses:
 *     200:
 *       description: get character OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     204:
 *       description: character not found
 *     400:
 *       description: create character ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 *
 * /characters:
 *  get:
 */