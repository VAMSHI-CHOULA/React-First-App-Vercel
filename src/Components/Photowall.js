//import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
function Photowall(props){
    return <div className="photoGrid">
                 {
                 props.posts.map((post,index)=>
                 <Photo 
                 key={index} 
                 post={post} 
                 onRemovePhoto={props.onRemovePhoto}/>)
                 }
           </div>
}
/*PropTypes*/
/**/
Photowall.prototypes={
    posts: PropTypes.array.isRequired,
    onRemovePhoto :PropTypes.func.isRequired
}

/*
class Photowall extends Component{
    render(){
        return <div className="photoGrid">
                 {this.props.posts.map((post)=><Photo post={post}/>)}
               </div>
    }
}
    */

export default Photowall