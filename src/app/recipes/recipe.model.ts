export class Recipe{

public name:string;
public description:string;
public imagePath:string;

constructor(names:string,desc:string,imagePaths:string)
{
this.name=names;
this.description=desc;
this.imagePath=imagePaths;
}

}