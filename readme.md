# cli-dice

This is a simple little JavaScript package that will roll dice for you on your command line.

## Installation

To install run `npm i -g cli-dice`

## Use

After installation you can now run `roll` and it will generate a random number (JS psuedo random) and display it on a die and the total.

ie:
```
 ---------
| *     * |
|         |
| *     * |
 ---------
Total: 4
```

Additionally, you can a number parameter after the command roll and it will roll that number of dice.

ie: `roll 5` will return something like:

```
 ---------
| *     * |
|    *    |
| *     * |
 ---------
 ---------
| *     * |
| *     * |
| *     * |
 ---------
 ---------
| *     * |
|    *    |
| *     * |
 ---------
 ---------
| *       |
|         |
|       * |
 ---------
 ---------
| *     * |
|         |
| *     * |
 ---------
Total: 22
```