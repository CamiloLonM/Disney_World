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
 *        image: https://example/search?example
 *        age: 15
 *        weight: 89
 *        history: random character's history
 *
 * /characters:
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
 *
 * @swagger
 * /characters:
 *  post:
 *    summary: create a new character
 *    tags: [character]
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        type: object
 *        required: [name, image]
 *        properties:
 *         name:
 *          type: string
 *         age:
 *          type: integer
 *         weight:
 *          type: integer
 *         history:
 *          type: string
 *         image:
 *          type: string
 *          format: binary
 *    responses:
 *     201:
 *       description: new character created!
 *       content:
 *         application/json:
 *           schema:
 *             type: object
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
 * 
 * @swagger
 * /characters/{id}:
 *  put:
 *    summary: update a new character
 *    tags: [character]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the character ID
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        type: object
 *        required: [name, image]
 *        properties:
 *         name:
 *          type: string
 *         age:
 *          type: integer
 *         weight:
 *          type: integer
 *         history:
 *          type: string
 *         image:
 *          type: string
 *          format: binary
 *    responses:
 *     200:
 *       description: no content.
 *     204:
 *       description: character not found
 *     500:
 *       description: update character ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: update character ERROR
 * 
 * @swagger
 * /characters/{id}:
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
 * 
 * @swagger
 * /characters/search:
 *  get:
 *    summary: return characters
 *    tags: [character]
 *    parameters:
 *      - in: query
 *        name: name
 *        schema:
 *         type: string
 *        description: character's name
 *      - in: query
 *        name: age
 *        schema:
 *         type: integer
 *        description: character's age
 *      - in: query
 *        name: movies
 *        schema:
 *         type: integer
 *        description: character's movie id
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
 * 
 * @swagger
 * /characters/{id}:
 *  delete:
 *    summary: delete a character
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
 *       description: no content.
 *     204:
 *       description: character not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: create character ERROR
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
