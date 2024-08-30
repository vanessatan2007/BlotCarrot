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
drawLines([carrot])



