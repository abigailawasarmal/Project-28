class Launcher
{
	constructor(stone,boy)
	{
		var options={
                stone:boy,
                boy:stone,
                stiffness:0.4,
                length:10,	
			}
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);

    }
    
    fly(){

this.launcher.stone = null;

    }
	display()
	{
            var stone = this.launcher.stone.position;
            var boy = this.launcher.boy.position;
            strokeWeight(4);
            line(stone.x,stone.y,boy.x,boy.y);
			
	}

}