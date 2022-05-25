// get character
/**
 * @swagger
 * /characters:
 * get:
 *   summary: return all characters
 *     tags:[ characters ]
 *     parameters:
 *       -in: path
 *        name:
 *          schema:
 *            type: string
 *        image:
 *          schema:
 *            type: string
 *      required: true
 *      responses:
 *         200:
 *           description: info characters!!
 *            content:
 *                application/json:
 *                  schema:
 *                   type: string
 *                    items:
 *                     $ref: '#/components/schemas/characters'
 *          500:
 *              description: Internal Server Error.
 *
 *
 */
