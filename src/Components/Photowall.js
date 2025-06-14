import React from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photowall(props){
    return  <div>      
                      <Link className="addIcon" 
                            to="addPhoto" 
                            onClick={props.onNavigate}/>
                      <div className="photoGrid">
                                  {
                                      props.posts
                                      .sort(function(x,y){
                                        return y.id - x.id;
                                      })
                                      .map((post,index)=>
                                      <Photo key={index} 
                                             post={post} 
                                             {...props}
                                             //{...props}
                                             index={index}
                                            />)
                                  }
                      </div>
           </div>
}

/*PropTypes*/
/**/
Photowall.prototypes={
    posts: PropTypes.array.isRequired,
}



export default Photowall