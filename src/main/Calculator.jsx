import React, { useState } from "react";
import Button from "../components/Button";
import Display from "../components/Display";
import './Calculator.css';

export default props => {

    
    
    function clearMemory() {
        
        console.log('teste 2')
    }
    
    function setOperation(operation) {
        
        console.log(operation)
    }
    
    function addDigito(n) {
        console.log(n)
    }
    
    const [digito, setDigito] = useState()
    
    return(

        
        <div className="calculator">
            <Display value={100}></Display>
            <Button label='AC' click={this.clearMemory()} ></Button>
            <Button label='/'></Button>
            <Button label='7'></Button>
            <Button label='8'></Button>
            <Button label='9'></Button>
            <Button label='*'></Button>
            <Button label='4'></Button>
            <Button label='5'></Button>
            <Button label='6'></Button>
            <Button label='-'></Button>
            <Button label='1'></Button>
            <Button label='2'></Button>
            <Button label='3'></Button>
            <Button label='+'></Button>
            <Button label='0'></Button>
            <Button label='.'></Button>
            <Button label='='></Button>
        </div>
    )
}