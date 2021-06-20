class Launcher
{
	constructor(boy,stone)
	{
		var options={
                bodyA:boy,
                pointB:stone,
                stiffness:0.004,
                length:1,	
			}
        this.bodyA=boy
		this.pointB=stone
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);

    }
    attach(boy){
		this.launcher.bodyA=boy;
	}

    fly(){

this.launcher.bodyA = null;

    }
	display()
	{
        if(this.launcher.bodyA)
		{
		
            var pointA = this.bodyA.position;
            var pointB=this.pointB

            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
			
	}

}