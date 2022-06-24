/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: the user name
 *        email:
 *          type: string
 *          description: the user email
 *        password:
 *          type: string
 *          description: The password must have at least 6 characters
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        name: prueba
 *        email: prueba@prueba.com
 *        password: 123456.....
 *
 * @swagger
 * /auth/login:
 *  post:
 *    summary: User login
 *    tags: [User]
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *        schema:
 *          type: object
 *          required: [email, password]
 *          properties:
 *           email:
 *            type: string
 *           password:
 *            type: string
 *    responses:
 *     404:
 *      description: email not found
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                description: User with this email not found
 *     401:
 *      description: incorrect pass
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                description: Incorrect password
 *     500:
 *      description: login ERR
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              message:
 *                type: string
 *                description: User login ERROR
 *
 * @swagger
 * /auth/register:
 *  post:
 *    summary: User registre
 *    tags: [User]
 *    requestBody:
 *     content:
 *      multipart/form-data:
 *        schema:
 *          type: object
 *          required: [name, email, password]
 *          properties:
 *           name:
 *            type: string
 *           email:
 *            type: string
 *           password:
 *            type: string
 *    responses:
 *      401:
 *        description: lenght password
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      500:
 *        description: registre token ERR
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: ERROR
 */
