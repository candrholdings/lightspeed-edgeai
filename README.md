# Property API

3 APIs are available for this. To run, you can run the following commands after installing nodejs packages. For details, please refer to [this paper](https://paper.dropbox.com/doc/Lightspeed-Room-Model-API--BuQtTkz7w16AJysxWj9KDjfjAg-cwxxllIQ04izfX9OPHgos).


## Room condition
```
$ node api-room-condition.js
{ value: { room_score: 4.5, confidence: 26.9287109375 } }
$ _
```

## Room object
```
$ node api-room-object.js
[
  {
    value: { prediction: 'microwave', confidence: 0.9929331541061401 }
  },
  {
    value: { prediction: 'range_oven', confidence: 0.7445629239082336 }
  },
  {
    value: { prediction: 'stainless_steel', confidence: 0.9850451946258545 }
  },
  {
    value: { prediction: 'refrigerator', confidence: 0.997473418712616 }
  },
  {
    value: { prediction: 'hardwood_floor', confidence: 0.9934514164924622 }
  },
  {
    value: { prediction: 'pendant_lighting', confidence: 0.9885009527206421 }
  },
  {
    value: { prediction: 'light_countertops', confidence: 0.9423583745956421 }
  },
  {
    value: { prediction: 'white_cabinets', confidence: 0.9786344170570374 }
  },
  {
    value: { prediction: 'kitchen_bar', confidence: 0.9922472834587097 }
  }
]
$ _
```

## Room type
```
$ node api-room-type.js
{ value: { prediction: 'kitchen', confidence: 100 } }
$ _
```

