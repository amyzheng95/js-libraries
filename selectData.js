function selectData(sessions, options) {
  let resp = sessions;
  if (options && options.user) {
    resp = resp.filter((x) => x.user === options.user);
  }

  if(options && options.merge){
    resp = resp.reduce((acc, current) => {
        const existingItem = acc.find(item => item.user === current.user);
        if(existingItem){
            existingItem.duration += current.duration;
            existingItem.equipment=[...new Set([...existingItem.equipment, ...current.equipment])]
        }else{
            acc.push(current);
        }
        return acc;
    }, [])
  }

  if (options && options.minDuration) {
    resp = resp.filter((x) => x.duration >= options.minDuration);
  }

  if (options && options.equipment) {
    resp = resp.filter((x) => {
      for (let i = 0; i < x.equipment.length; i++) {
        if (options.equipment.includes(x.equipment[i])) {
          return x;
        }
      }
    });
  }
  console.log("resp: ", resp)
  return resp;
}

const sessions = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell", "kettlebell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

selectData(sessions,  {
    merge: true,
    minDuration: 400,
    equipment: ['treadmill', 'bench', 'barbell', 'dumbbell', 'bike'],
  });
