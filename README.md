# Modularity

Create a program that performs a dice roll. You will need a folder `dice-roll` with at least 5 files to accomplish this task.

### File structure

```
dice-roll/
    bin/
        diceroll
    lib/
        cli.js
        dice.js
        math.js
        parse-args.js
README.md
package.json
```

### Goals

- [x] This library should be globally installed or linked such that you can execute it anywhere on your system. (Use a shebang.)
    - [ ] `diceroll` should be the only file that has permissions to execute.
    - [ ] It should also include only single line of code that requires the `cli.js` lib file and a shebang.
- [ ] `math.js` should export an `Object` with a method called `randomInt(min, max)`.
    - [ ] This function should return a random integer inclusive of the lower bound and the upper bound.
    - [ ] This `parse-args` file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line.
        - [ ] Convert these arguments to an object with a count and sides property.
- [ ] `dice.js` should export an `Object` with at least two methods called `roll()` and `toDiceNotation()`.
    - [ ] `toDiceNotation()` should accept an object with a sides and count property and convert it to a `String` with the dice notation
        - i.e. "1d6" or "2d40". 
    - [ ] `roll()` should accept a dice notation `String` and produce a random `Number` which is the result of the dice roll.
- [ ] `cli.js` should work like a controller. It should have no logic on its own.

Use [this sample code](sample.js) to get you started:

### Expected:

```bash
$ diceroll
3 # Result of a single roll of a standard 6 sided dice: i.e. random integer 1 - 6
```

```bash
$ diceroll 20
10 # Result of a single roll of a 20 sided dice: i.e. random integer 1 - 20
```

```bash
$ diceroll 2 100
100 # Result of 2 rolls of a 100 sided dice: i.e. random integer 2 - 200
```