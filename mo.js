const burst = new mojs.Burst({
    radius: { 0: 360 },
    count: 20,
    children : {

      shape: 'polygon',
      stroke: 'teal',
    

      strokeWidth: { 6: 0},
      angle: { 360: 0},
      radius: { 30 : 5 },
      duration: 5000
    }
    
  }).play();