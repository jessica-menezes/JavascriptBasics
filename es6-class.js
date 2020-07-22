class Developer {
    //always have this in object initialisation
    constructor(name){
        this.name = name;
    }

    hello(){
        return `Hello World! I am ${this.name} and I am a web developer!`
    }
}

//class inheritance
//ReactDeveloper - Child Class
//Developer - Parent Class
class ReactDeveloper extends Developer{
    installReact(){
        return `Installing React ......`
    }

    //it can also override a Parent Metho
    hello(){
        return `Hello World I am ${this.name} and I am a REACT developer!`
    }
}

let name = new Developer('Jessica');
let jess = new ReactDeveloper('Jess');
console.log(name.hello());
console.log(jess.hello()); //override parent method and prints out different sentence