export class Captcha {
    
    constructor() {
        
    }

    generate(
        pattern:number, 
        left:number, 
        right:number, 
        operator:string) :string {

        let leftOperand : Operand;
        let rightOperand: Operand;
        if(pattern === 1) {
            leftOperand = new NumberOperand(left);
            rightOperand = new TextOperand(right);
            //return `${left} ${operator} ${this.numberWord[right]}`;
        } else if(pattern === 2) {
            leftOperand = new TextOperand(left);
            rightOperand = new NumberOperand(right);
            //return `${this.numberWord[left]} ${operator} ${right}`;
        } else {
            throw new Error('please define pattern 1 or 2');
        }
        return `${leftOperand.toText()} ${operator} ${rightOperand.toText()}`;
    }
    
    calculateResult(left:number, right:number, operator:string) : number {
        if(operator === '+') {
            return left + right;
        } else if(operator === '-') {
            return left - right;
        } else if(operator === '*') {
            return left * right;
        } else {
            throw new Error('support only operator +, - and *');
        }
    }
}

interface Operand {
    toText(): string;
}

class TextOperand implements Operand {
    n:number;
    numberWord:Array<string>;
    constructor(n:number) {
        this.n = n;
        this.numberWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eigth','Nine'];
    }

    toText() : string {
        return this.numberWord[this.n];
    }
}
class NumberOperand implements Operand{
    n:number;
    constructor(n:number) {
        this.n = n;
    }

    toText() : string {
        return this.n.toString();
    }
}

class Operator {
    constructor(symbol:string) {

    }
}
