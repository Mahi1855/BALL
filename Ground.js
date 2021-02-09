class Ground{
    constructor(x,y,width,height){
        var groundn = {
        isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,groundn)
      this.width = width
      this.height = height
      World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        fill("blue")
        rect  (this.body.position.x,this.body.position.y,this.width,this.height) 
    }


}