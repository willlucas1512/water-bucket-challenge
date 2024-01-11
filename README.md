# Water Buckets Challenge

This application tackles the classic Water Bucket Riddle, where the task is to measure a specific volume (Z liters) of water using two jugs with different capacities (X liters and Y liters). The user interface visually represents the state changes of each jug (Empty, Full, or Partially Full) as the solution progresses.

The application initiates with both containers empty and systematically explores all feasible actions from that state. The algorithm accounts for actions such as filling or emptying the containers and transferring water between them. The exploration persists until one of the containers reaches the desired quantity or until all potential states have been examined. Upon finding a solution, the requisite steps to achieve it are recorded. In the absence of a solution, the problem is marked as resolved with an empty solution.

## How to run the application?

### Clone the repo on your bash

```bash
git clone https://github.com/willlucas1512/water-bucket-challenge.git
```

### Navigate to the folder

```bash
cd water-bucket-challenge
```

### Install modules

```bash
npm install
```

### Run the server

```bash
npm run dev
```
