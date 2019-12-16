# Assessment: Connect-Four #

### Overview ###

In Connect-Four, one player is assigned Red and the other player is assigned Black. Players alternate inserting their pieces into one of the 7 columns of a **7x6 grid**. The first player to get **four** of their pieces in a row (horizontal, vertical, or diagonal), wins.

In the physical world, the grid is placed perpendicular to the playing table, such that the pieces fall to the bottom and stack upon each other. Your digital version of the game should yield the same end result (the falling animation is optional).

The game can end in a tie, meaning all cells are filled but no player achieved four-in-a-row.

![example](http://mathworld.wolfram.com/images/gifs/connect4.gif)

Implement Connect-Four using HTML, CSS, and JavaScript. In each game, the players will be sitting at the same mouse & keyboard, alternating turns.

### Submission Details ###

You will work **in groups** to complete your Connect-Four implementation. You should all code individually, but work together in building the layout and functionality of your game.

As a member of a group, you will have to meet certain performance expectations. Your performance will be evaluated by the other members of your group, so be sure to try to contribute equally to the project! You can read more here: [Guidelines for Individuals on a Team](https://docs.google.com/document/d/1SmfHAwjDHVRmcXyoF1LsWU5OpOC6ok5L-1sKakPQJjM/edit)

**The project lead will submit the project.** This will be a project you include in your portfolio, so make it look nice, and use GitLab's Pages feature to host your finished game so that anyone can play it.

### Hints ###

If you are unsure how to get started, here are some incremental milestones:

1. Display a red or black disc.
2. Stack red and black discs in a column using a flex box layout.
3. Display a full board consisting of 7 columns.
4. Set a click handler function for each column that adds an additional disc.
5. Take turns! Toggle the color of each successive disc added.
6. Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
7. Once a column is full (has 6 discs), don't allow any more discs to be added.
8. Check whether the last disc added completed a four-in-a-row within the column (vertically).
9. Check whether the last disc added completed four-in-a-row horizontally.
10. Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.

### Example ###

Here is an sample screenshot of an implementation that is complete, but without any fancy styling.

![example2](https://i.snag.gy/15lyOr.jpg)

### Submission ###

Push and deploy your code to Gitlab. Add KA_Grading as a member on your project with "Reporter" permission, and submit your gitlab pages url (Ex: https://username.gitlab.io/tower-of-hanoi). Add a comment to your submission stating your teammates names.