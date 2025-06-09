import  {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'
class Single extends Component{
    
    render(){
       // console.log(this.props.match.params.id)
        const {match, posts} = this.props
        const id=Number(match.params.id);
        const post =posts.find((post) => post.id === id);
        const comments=this.props.comments[match.params.id] || []
        const index =this.props.posts.findIndex((post)=>post.id === id);
        if(this.props.loading === true){
            return <div className='loader'> ... loading</div>
        }else if(post){
    return <div className='single-photo'>
             <Photo post={post} {...this.props} index={index} />
             <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id}/>
           </div>
        }
        else{
            return <div style={{background:'#f2f2f2',margin:'0 60px', padding:' 100px 450px', fontSize:'40px', color:'red', fontFamily:'billabong'}}> ...No post found</div>
        }
    }
}

export default Single 