export default function handler(req, res) {
  res.status(200).json({
    tools: [
      {
        name: "list_assistants",
        description: "Returns a list of assistants configured in the system.",
        parameters: {
          type: "object",
          properties: {},
          required: []
        }
      },
      {
        name: "get_weather",
        description: "Returns the weather for a given city.",
        parameters: {
          type: "object",
          properties: {
            city: {
              type: "string",
              description: "The name of the city"
            }
          },
          required: ["city"]
        }
      }
    ]
  });
}
