const a = {}
const b = Object()
const c = new Object;
// const d = Object.create();
// const e = Object.assign();
// const f = Object.fromEntries();

console.log(a, b, c);
// console.log(d, e, f);

const terre = {
      population: 7e7,
      satellite: 'Lune',
      temperature: {
            min: -70,
            max: 60,
            current: {
                  min: 10,
                  max: 30
            }
      },
      isOld: false,
      getTemperature(){
            return (this.temperature["min"])
      },
      getTemperature2: function() {
            console.log(this.temperature["max"])
      }
}

console.log("terre :", terre);
console.log(terre.temperature); // without brackets with dot
console.log(terre["temperature"]); // the same output than previous using brackets without dot

console.log(terre["satellite"]); // Lune
console.log(terre.getTemperature());
terre.getTemperature2();
