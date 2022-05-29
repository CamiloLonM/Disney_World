/**
 * @swagger
 * components:
 *  schemas:
 *    movieOrSerie:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: the movie or serie title
 *        image:
 *          type: string
 *          format: binary
 *          description: the movie or serie image
 *        creation_date:
 *          type: date
 *          description: the movie or serie creation date
 *        qualification:
 *          type: string
 *          enum: ["1", "2", "3", "4", "5"]
 *          description: the movie or serie qualification
 *      required:
 *        - title
 *        - image
 *      example:
 *        title: random title
 *        image: https://example/search?example
 *        creation_date: 1990-05-21
 *        qualification: "2"
 *
 * /movies:
 *  get:
 *    summary: return all movies
 *    tags: [movieOrSerie]
 *    responses:
 *     200:
 *       description: all movies
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                title:
 *                 type: string
 *                image:
 *                 type: string
 *                creation_date:
 *                 type: string
 *                 format: date
 *     500:
 *       description: movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: get movie or serie ERROR
 *
 * @swagger
 * /movies:
 *  post:
 *    summary: create a new movie or serie
 *    tags: [movieOrSerie]
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        type: object
 *        required: [title, image]
 *        properties:
 *         title:
 *          type: string
 *         creation_date:
 *          type: string
 *          format: date
 *         qualification:
 *          type: string
 *          enum: ["1", "2", "3", "4", "5"]
 *         image:
 *          type: string
 *          format: binary
 *    responses:
 *     201:
 *       description: new movie or serie created!
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              title:
 *               type: string
 *              creation_date:
 *               type: string
 *               format: date
 *              qualification:
 *               type: string
 *               enum: ["1", "2", "3", "4", "5"]
 *              image:
 *               type: string
 *               format: binary
 *     500:
 *       description: create movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: create movie or serie ERROR
 * 
 * @swagger
 * /movies/{id}:
 *  put:
 *    summary: update a movie or serie
 *    tags: [movieOrSerie]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the movie or serie ID
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *       schema:
 *        type: object
 *        properties:
 *         title:
 *          type: string
 *         creation_date:
 *          type: string
 *          format: date
 *         qualification:
 *          type: string
 *          enum: ["1", "2", "3", "4", "5"]
 *         image:
 *          type: string
 *          format: binary
 *    responses:
 *     200:
 *       description: no content.
 *     204:
 *       description: movie or serie not found
 *     500:
 *       description: update movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: update movie or serie ERROR
 * 
 * @swagger
 * /movies/{id}:
 *  get:
 *    summary: return a movie
 *    tags: [movieOrSerie]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the movie or serie ID
 *    responses:
 *     200:
 *       description: the movie or serie
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/movieOrSerie'
 *     500:
 *       description: movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: movie or serie ERROR
 * 
 * @swagger
 * /movies/search:
 *  get:
 *    summary: return movies
 *    tags: [movieOrSerie]
 *    parameters:
 *      - in: query
 *        title: name
 *        schema:
 *         type: string
 *        description: movie or serie's name
 *      - in: query
 *        name: genre
 *        schema:
 *         type: integer
 *        description: genre's id
 *      - in: query
 *        name: order
 *        schema:
 *         type: string
 *         enum: ["ASC", "DESC"]
 *        description: order by creation date
 *    responses:
 *     200:
 *       description: movies or series
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             items:
 *               $ref: '#/components/schemas/movieOrSerie'
 *     500:
 *       description: movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: movies or series ERROR
 * 
 * @swagger
 * /movies/{id}:
 *  delete:
 *    summary: delete a movie or serie
 *    tags: [movieOrSerie]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the movie or serie ID
 *
 *    responses:
 *     200:
 *       description: no content.
 *     404:
 *       description: movie or serie not found
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: Movie or Serie not found.
 *     500:
 *       description: movie or serie ERROR
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: movie or serie ERROR
 */
