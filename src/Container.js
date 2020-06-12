import React, { Component } from 'react'
import './calculator.css'

class Container extends Component {
    constructor(){
        super()
        this.state = {
            isOpen : true,
            message : ""
            
        }

    }
    clearMessage(){
        this.setState({
            message: "",
            
    
        })
    }
    backspace(){
        let msg = this.state.message 
        this.setState({
            message : msg.substr(0,msg.length-1)
        })
    }
    changeMessage(val){
        console.log("clicked")
        this.setState({
           
            message : this.state.message + val

        })
    }
    bracket(){
        
        let msg = this.state.isOpen ? "(" : ")" 
        this.setState({
            message : this.state.message + msg,
            isOpen : !this.state.isOpen
        })
    }
    calculate(arr){
        let sum = parseFloat(eval(this.state.message)).toFixed(8)
        this.setState({
            message : sum.toString()
        },console.log(sum,typeof sum,this.state.message))
    }
    render() {
        return (
            <div className="main-container">
                <div className="valueDisplay">{this.state.message}</div>
                <div className="values">
                    <div className="rowCell">
                        <div className="cell" onClick={()=>this.clearMessage()} >C</div>
                        <div className="cell" onClick={()=>this.bracket()}>()</div>
                        <div className="cell" onClick={()=>this.changeMessage("%")}>%</div>
                        <div className="cell" onClick={()=>this.changeMessage("/")}>÷</div>
                    </div>
                    <div className="rowCell">
                        <div className="cell" onClick={()=>this.changeMessage(7)}>7</div>
                        <div className="cell" onClick={()=>this.changeMessage(8)}>8</div>
                        <div className="cell" onClick={()=>this.changeMessage(9)}>9</div>
                        <div className="cell" onClick={()=>this.changeMessage("*")}>x</div>
                    </div>
                    <div className="rowCell">
                        <div className="cell" onClick={()=>this.changeMessage(4)}>4</div>
                        <div className="cell" onClick={()=>this.changeMessage(5)}>5</div>
                        <div className="cell" onClick={()=>this.changeMessage(6)}>6</div>
                        <div className="cell" onClick={()=>this.changeMessage("-")}>-</div>
                    </div>
                    <div className="rowCell">
                        <div className="cell" onClick={()=>this.changeMessage(1)}>1</div>
                        <div className="cell" onClick={()=>this.changeMessage(2)}>2</div>
                        <div className="cell" onClick={()=>this.changeMessage(3)}>3</div>
                        <div className="cell" onClick={()=>this.changeMessage("+")}>+</div>
                    </div>
                    <div className="rowCell">
                        <div className="cell" onClick={()=>this.backspace()}>CE</div>
                        <div className="cell" onClick={()=>this.changeMessage(0)}>0</div>
                        <div className="cell" onClick={()=>this.changeMessage(".")}>.</div>
                        <div className="cell" onClick={()=>this.calculate(this.state.arr)}>=</div>
                    </div>
                </div>


                
            </div>
        )
    }
}

export default Container
