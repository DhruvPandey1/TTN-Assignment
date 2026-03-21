const controller = require("../src/controllers/todoController");
const db = require("../src/db");


jest.mock("../src/db");

describe("Todo Controller Unit Tests", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  test("getTodos should return all todos", async () => {
    const mockTodos = [{ id: 1, title: "Test Todo" }];
    db.query.mockResolvedValue({ rows: mockTodos });

    await controller.getTodos(req, res);

    expect(db.query).toHaveBeenCalledWith("SELECT * FROM todos");
    expect(res.json).toHaveBeenCalledWith(mockTodos);
  });

  test("createTodo should insert and return a todo", async () => {
    req.body = { title: "New Todo" };

    const mockTodo = { id: 1, title: "New Todo" };
    db.query.mockResolvedValue({ rows: [mockTodo] });

    await controller.createTodo(req, res);

    expect(db.query).toHaveBeenCalledWith(
      "INSERT INTO todos (title) VALUES ($1) RETURNING *",
      ["New Todo"]
    );

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockTodo);
  });
});