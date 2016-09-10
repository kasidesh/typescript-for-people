export class Captcha {
    
    constructor() {
        
    }

    generate(
        pattern:number, 
        left:number, 
        right:number, 
        operator:string) :string {

        let leftOperand;
        let rightOperand;
        if(pattern === 1) {
            leftOperand = new NumberOperand(left).toText();
            rightOperand = new TextOperand(right).toText();
            //return `${left} ${operator} ${this.numberWord[right]}`;
        } else if(pattern === 2) {
            leftOperand = new TextOperand(left).toText();
            rightOperand = new NumberOperand(right).toText();
            //return `${this.numberWord[left]} ${operator} ${right}`;
        } else {
            throw new Error('please define pattern 1 or 2');
        }
        return `${leftOperand} ${operator} ${rightOperand}`;
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

class TextOperand {
    numberWord:Array<string>;
    n:number;
    constructor(n:number) {
        this.numberWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eigth','Nine'];
        this.n = n;
    }

    toText() : string {
        return this.numberWord[this.n];
    }
}
class NumberOperand {
    n:number;
    constructor(n:number) {
        this.n = n;
    }

    toText() : string {
        return this.n.toString();
    }
}