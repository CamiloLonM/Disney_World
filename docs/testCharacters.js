/**
 * @swagger
 * components:
 *  schemas:
 *    character:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the character name
 *        image:
 *          type: string
 *          description: the character image
 *        age:
 *          type: integer
 *          description: the character age
 *        weight:
 *          type: integer
 *          description: the character weight
 *        history:
 *          type: string
 *          description: the character history
 *      required:
 *        - name
 *        - image
 *      example:
 *        name: Goofy
 *        image: https:// example/search?example
 *
 */

/**
 * @swagger
 * /:
 *  post:
 *    summary: create a new character
 *    tags: [character]
 *    requestFile:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type:object
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/character'
 *    responses:
 *     200:
 *       description: Post character OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
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
 *                 description: create character ERROR
 */

//     getCharacters
/**
 * @swagger
 * /:
 *  get:
 *    summary: return all characters
 *    tags: [character]
 *
 *    responses:
 *     200:
 *       description: all characters
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/character'
 *     500:
 *       description: character ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: create character ERROR
 */

/**
 * @swagger
 * /:
 *  post:
 *    summary: create a new character
 *    tags: [character]
 *    requestFile:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/character'
 *
 *    responses:
 *     201:
 *       description: new character created!
 *       content:
 *         application/json:
 *           schema:
 *             type: object *
 *     204:
 *       description: character not found
 *     500:
 *       description: create character ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: create character ERROR
 */

//     getCharactersById
/**
 * @swagger
 * /{id}:
 *  get:
 *    summary: return a character
 *    tags: [character]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the character ID
 *
 *    responses:
 *     200:
 *       description: the character
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/character'
 *     500:
 *       description: character ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: create character ERROR
 */
