class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            'stiffness': 1,
            'angularStiffness':1,
            'length': 220
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){      
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3.5);
        stroke("#fff")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
} 
