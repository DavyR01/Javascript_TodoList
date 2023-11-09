class Plane {
   public key;
   constructor() {
      this.key = false;
      this.gas = 80;
   }

   set gas(value) {
      if (value > 0) {
         this.gas = value;
      }
   }

   get gas(): number {
      return this.gas
   }

   putKey() {
      this.key = true;
   }

   start() {
      console.log('the plane start');
      if (this.key) {
         this.startEngine()
      } else {
         console.log('should have keys');
      }
   }

   startEngine() {
      console.log('the plane engine start');
   }

}


const plane = new Plane();

plane.putKey()
plane.start()
// plane.startEngine()

plane.gas = 40
plane.gas = -20;

console.log(plane);
console.log(plane.gas);
