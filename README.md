# Game of Life Implementation by Lilah August

## Immer's produce() Function

In this project, I utilize the produce function from the immer library to manage the state updates of our grid. Immer simplifies the process of working with immutable data structures by allowing us to write code that appears to be mutating the state directly, while it efficiently produces a new state with the desired changes. This is particularly helpful when updating the game grid within the Conway's Game of Life simulation, as it ensures that we maintain a clean and predictable state throughout each generation without the need for complex manual copying of data.

## Redux

I originally opted for Redux to manage state in this project, knowing that it is part of USMobile's tech stack, but wound up moving away from it. Because Redux enforces an immutable data approach, implementing this simulation in which frequent state updates are required and the majority of the functionality remains within the bounds of the Game component led to unnecessary complications. Immer's produce function, used in this project, allows for efficient state updates without the need for manual state copying or complex immutability patterns. 

However, I chose to keep the base Redux code for the simple purpose of displaying the player's name; simply to demonstrate my ability to implement state management with RTK.

## File structure

In terms of the file structure, I have initiated the establishment of a file structure that would align with best practices for a production-level codebase. This includes relocating a helper function & lengthy string into a dedicated "utils" folder. While this approach enhances code organization, it's worth noting that, due to time constraints, not all helper functions have been similarly refactored to their full potential.
