const schemaSwagger = {
  /** create character
   * @swagger
   * components:
   *  schemas:
   *      characters:
   *          type: object
   *          properties:
   *              name:
   *                  type:string
   *                  description: the character name
   *              image:
   *                  type: string
   *                  description: the character image
   *              weight:
   *                  type:string
   *                  description: the character weight
   *              age:
   *                  type: integer
   *                  description: The character age
   *              history:
   *                  type: string
   *                  description: The character history
   *              required:
   *                  - name
   *                  - image
   * example:
   *      name: Carlos
   *      age: 53
   *
   */
  /**
   * @swagger
   * /characters:
   * post:
   *  summary: Create a new character
   * tags:[ characters ]
   * requestBody:
   *  required: true
   *  content:
   *    application/json:
   *      schema:
   *        type: object
   *        $ref: '#/components/schemas/characters'
   *    responses:
   *      201:
   *        description: New user created!!
   *
   *
   */
};

module.exports = schemaSwagger;
