import React, {Component} from 'react';

class Coursesales extends Component{
  sumPrice(price){
    this.setState({total:this.state.total + price});
  }
  constructor(props){
    super(props);
    this.state={
      total:0
    };
    this.sumPrice=this.sumPrice.bind(this);
  }
  render(){
    var courses=this.props.items.map((item,i)=>{
      return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.sumPrice}  active={this.active}/>
    });
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12  col-xs-12">
            <h1>Click on courses to add in Cart!</h1>
            <div id="courses" className="text-success">
              {courses}
            </div>
            <p id="total" className="text-primary">Total <b>{this.state.total}</b></p>
          </div>
        </div>
      </div>
    </div>
    );
  }

}
class Course extends Component{
  clicker(){
    var active=!this.state.active;
    this.setState({active:active});
    this.props.sumPrice(active ? this.props.price :-this.props.price);
  }
  constructor(props){
    super(props);
    this.state={
      active:false
    };
    this.clicker=this.clicker.bind(this);
  }
  render(){
    return(
      <div>
        <p id="nepal" onClick={this.clicker} >{this.props.name}<b> {this.props.price}</b></p>

      </div>

    );
  }
}

export default Coursesales;
