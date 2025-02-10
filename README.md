# Study Case | React, TypeScript & TailwindCSS

This project is a study case, where the goal is to visualize client campaign data and provide an intuitive user interface for employees (client leads and campaign planners) to navigate and manage campaign details. The system should allow users to interact with the data to get a breakdown of client information.

## Development Environment

To set up the development environment:

1. Ensure you have Node.js installed (> 20), the app has been tested with node `20.10.0`.
2. `npm install`
3. `npm run dev`
4. the browser should open automatically, if not, you could navigate to the suggested url <http://127.0.0.1:8080/>

## Build

To build the project for production, run:

```bash
npm run build
```

## Documentation

- [Repository]()
- [Hosted demo on Netlify]()
- [Figma Prototype]()
- [System Guide]()

## Case description

For this case, you can consider users of the system to be employees.
These people include client leads and campaign planners.
A common need for both is to have control over clients campaigns throughout the media planning and buying process.

We have provided a data set in data.json that can be loaded through api-client.ts.
This contains a somewhat accurate representation of what belongs to each client (such as brands, campaigns, teams, and budgets).

Your task is to load the data from api-client.ts and visualize it in a UI.
Use the data to make the UI that you feel gives the best user experience.
Your UI should include a way to navigate between clients and a breakdown of client information.

TypeScript is recommended, but you can also use plain JavaScript.
Use a framework of your choice, like Vue, React, Svelte or similar.

If you have some time left you can add additional interactive functionality to your solution.

## Evaluation criteria

- User experience
- Visual design
- Code quality
- Interactivity

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Vite
