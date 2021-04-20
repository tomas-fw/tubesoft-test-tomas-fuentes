const Stopwatch = require("./stopwatch.model");

const { asyncHandler } = require("../../middleware/async");

class StopwatchControllerClass {
  list = asyncHandler(async (req, res) => {
    const records = await Stopwatch.findAll();
    res.json(records);
  });

  create = asyncHandler(async (req, res) => {
    const { hour, minute, second, milliseconds } = req.body;

    const data = { hour, minute, second, milliseconds };

    const stopwatch = await Stopwatch.create(data);

    res.json({ data: stopwatch });
  });
}

const StopwatchController = new StopwatchControllerClass();

module.exports = StopwatchController;
