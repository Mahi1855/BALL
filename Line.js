class Line{
    constructor(x,y,width,height){
        var linen = {
        isStatic:true
        }
      this.body = Bodies.rectangle(x,y,width,height,linen)
      this.width = width
      this.height = height
      World.add(world,this.body)

    }
    display(){
        rectMode(CENTER)
        fill("red")
        rect  (this.body.position.x,this.body.position.y,this.width,this.height) 
    }
}