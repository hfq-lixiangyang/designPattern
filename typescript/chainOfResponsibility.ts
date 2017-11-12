/****
 * 设计模式之责任链模式
 * Date: 2017-11-12
 * Author: pdslly
 *****/

export abstract class Handle{
	succesor: Handle
	constructor(public name: string){}
	abstract handleRequest(request: Member): void
	setSuccesor(succesor: Handle): void{
		this.succesor = succesor
	}
}

export class Member{
	constructor(public name: string, public day: number){}
}

export class GroupLeader extends Handle{
	constructor(name: string){
		super(name)
	}
	handleRequest(request: Member){
		if(request.day <= 7 && request.day >= 5) console.log(`GrounLeader ${this.name} approved staff member ${request.name} ${request.day} days holiday`)
		else this.succesor.handleRequest(request)
	}
}

export class Manager extends Handle{
	constructor(name: string){
		super(name)
	}
	handleRequest(request: Member){
		if(request.day < 5 && request.day >= 1) console.log(`Manager ${this.name} approved staff member ${request.name} ${request.day} days holiday`)
		else this.succesor.handleRequest(request)
	}
}

export class HRDerpatment extends Handle{
	constructor(name: string){
		super(name)
	}
	handleRequest(request: Member){
		if(request.day < 1) console.log(`HRDerpatment ${this.name} approved staff member ${request.name} ${request.day} days holiday`)
		else this.succesor.handleRequest(request)
	}
}

let sta1 = new Member('lly', 0.5)
let leader = new GroupLeader('leader')
let manager = new Manager('manager')
let hr = new HRDerpatment('hr')

leader.setSuccesor(manager)
manager.setSuccesor(hr)

leader.handleRequest(sta1)
