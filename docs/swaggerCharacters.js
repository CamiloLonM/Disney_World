/**
 * @swagger
 * /characters:
 *  getCharacters:
 *   summary: getCharacters
 *   description: endpoint to get character
 *    parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: the character name
 *          schema:
 *              type: string
 *         image:
 *          required: true
 *          description: the character image
 *              schema:
 *                  type: string
 *   responses:
 *     200:
 *       description: get user OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                  readOnly: true
 *               image:
 *                 type: string
 *                  readOnly: true
 *               age:
 *                 type: string
 *                  writeOnly: true
 *               weight:
 *                 type: string
 *                  writeOnly: true
 *               history:
 *                 type: string
 *                  writeOnly: true
 *     204:
 *       description: characters not found
 *     400:
 *       description: create characters OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: description of error
 */
