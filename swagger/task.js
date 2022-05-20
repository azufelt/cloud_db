// Test endpoints @ http://localhost:5000/api-docs/

//These multi-line comments are what feed the Swagger-jsdoc and populate the Swagger UI with the GET/POST/PUT/DELETE

/**
 * @swagger
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      required: 
 *        -title
 *        -description
 *      properties:
 *        title:
 *          type: string
 *          desc: The Task Item
 *        description:
 *          type: string
 *          desc: A description of the Task item
 *        date:
 *          type: number
 *          desc: Date task was created
 */

// Set up header on Swagger UI
/**
 * @swagger
 * tags:
 *  name: To Do List
 *  description: Add tasks to a To-Do list
 */

// GET all tasks
// path: routes file, then GET request path '/tasks'
/**
 * @swagger
 * /task/tasks:
 *  get:
 *    summary: Get To Do List
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: Success message
 *        contents:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Server Error
 */


// POST create a new task item
// path: routes file, then POST request path 'add-task'
/**
 * @swagger
 * /task/add-task:
 *  post:
 *    summary: Add a task
 *    tags: [Tasks]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *            properties:
 *                callbackUrl: https://localhost:5000/
 *                type: string
 *                format: uri
 *                example: https://myserver.com/send/callback/here
 *            required:
 *              -callbackUrl
 *    responses:
 *      200:
 *        description: Success message
 *        contents:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Server Error
 */


// GET task by ID
// path: routes file, then GET request path '/get-task/:taskId'
/**
 * @swagger
 * /task/tasks/{id}:
 *  get:
 *    summary: Get a task by ID
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: Numeric ID of the specific task to get
 *        example: 6284fb7d552d79617a1b5a75
 *    responses:
 *      200:
 *        description: Success message
 *        contents:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      500:
 *        description: Server Error
 */

// PUT update task by ID
// path: routes file, then PUT request path '/edit-task/:taskId'
/**
 * @swagger
 * /task/edit-task/{id}:
 *  put:
 *    summary: Update a task by ID
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: Numeric ID of specific task to update
 *        example: 6284fb7d552d79617a1b5a75
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *            properties:
 *                callbackUrl: https://localhost:5000/
 *                type: string
 *                format: uri
 *                example: https://myserver.com/send/callback/here
 *            required:
 *              -callbackUrl
 *    responses:
 *      200:
 *        description: Success message
 *        contents:
 *          applciation/json:
 *            schema:
 *              $ref: '#/components/schemasTask'
 *      500:
 *        description: Server Error
 */

// DELETE task by ID
// path: routes file, then DELETE request path '/delete-task/:taskId'
/**
 * @swagger
 * /task/deletetask/{id}:
 *  delete:
 *    summary: Delete a task by ID
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema: 
 *          type: string
 *        required: true
 *        description: Numeric ID of the task to delete
 *        example: 6284fb7d552d79617a1b5a75
 *  responses:
 *      200:
 *        description: Success message
 *        contents:
 *          applciation/json:
 *            schema:
 *              $ref: '#/components/schemasTask'
 *      500:
 *        description: Server Error
 */