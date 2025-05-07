export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    tools: [
      {
        type: "function",
        function: {
          name: "list_assistants",
          description: "Returns a list of assistants.",
          parameters: {
            type: "object",
            properties: {},
            required: []
          }
        }
      },
      {
        type: "function",
        function: {
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
      }
    ]
  });
}
