/*
@title: BlotCarrot
@author: Vanessa Tan
@snapshot: 1.png
*/
const width = 125
const height = 125

setDocDimensions(width, height)

const length = bt.randIntInRange(30,42)
const tall = bt.randIntInRange(85,92)
const carrot = bt.catmullRom([[75, 5], [90, length], [100, 80], [75, tall], [50,80], [60,length], [75, 5]])
const leaves = bt.catmullRom([[75, tall], [bt.randIntInRange(47,52), tall+bt.randIntInRange(3,8)], [bt.randIntInRange(47,52), tall+bt.randIntInRange(9, 16)], [75, tall], [bt.randIntInRange(53,65), tall+bt.randIntInRange(8,12)],[bt.randIntInRange(53,65), tall+bt.randIntInRange(12,17)], [75,tall], [bt.randIntInRange(66,72),tall + bt.randIntInRange(6,11)],[bt.randIntInRange(68,78), tall+bt.randIntInRange(10,19)], [75, tall], [bt.randIntInRange(76,82), tall+bt.randIntInRange(3,9)], [bt.randIntInRange(80,87), tall+bt.randIntInRange(11,15)], [75, tall], [bt.randIntInRange(85,92), tall+bt.randIntInRange(5,12)], [bt.randIntInRange(94,100), tall+bt.randIntInRange(11,19)], [75, tall]])
drawLines([carrot])
drawLines([leaves])



