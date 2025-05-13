import React,{Component} from 'react';

class List extends Component{
    render(){
        return <ol>{this.props.myFamily.map((fam,index)=><li key={index}>{fam}</li>)}</ol>
    }
}
export default List