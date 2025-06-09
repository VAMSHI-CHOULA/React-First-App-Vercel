//import history from './history';
//import { createRoot } from 'react-dom/client';


//import Greeting from './Components/Greeting';
//import UserCard from './Components/UserCard';
//import Status from './Components/Status';
//import { BrowserRouter } from 'react-router-dom';
//import Counter from './Components/Counter';
/*import { createStore } from 'redux';
import rootReducer from './redux/reducer';*/
//import MyFamily from './Components/MyFamily';
//import Card from './Components/Card';
import React  from 'react';
import ReactDOM from 'react-dom';
import './Styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import postReducer from './redux/reducer';
import App from './Components/App'
import  thunk from 'redux-thunk';
//import {database} from './database/config'




/*
const tasks=['Take over the Trash','Take over the Trash','Walk the Dog'];
*/ 

//Take over the Trash Showel the walkaway
/*
const element = React.createElement('h1', null, 'Hello World!');    
ReactDOM.render(element, document.getElementById('root'));
*/
//Hello h1 p 
/*
const element2 =React.createElement('p',null,'Hello World!');
ReactDOM.render(element2,document.getElementById('root'));*/

/*
const element3 =React.createElement('ol',null,
  React.createElement('li',null,'Take over the Trash'),
  React.createElement('li',null,'Showel the walkaway'),
  React.createElement('li',null,'Walk the Dog'));
  ReactDOM.render(element3,document.getElementById('root'));
 */ 
 /**/
  /*
  const element4 =React.createElement('ol',null,tasks.map((task,index) =>React.createElement('li',{key:index},task)));
  ReactDOM.render(element4,document.getElementById('root')); //{key:tasks}  , index
  */
  /*
  const element5 = <ol>
                       <li>{tasks[0]}</li>
                       <li>{tasks[1]}</li>
                       <li>{tasks[2]}</li>
                   </ol>
   ReactDOM.render(element5, document.getElementById('root'));*/
   
                   /*const element6 = <ol>
                                      {tasks.map((task, index)=><li key={index}>{task}</li>)}
                                    </ol> */


  /*const myFamily =['Madhuri','Vamshi','Santhosh','Roopa'];
   const element7 =<ol>
                     <li>{myFamily[0]}</li>
                     <li>{myFamily[1]}</li>
                     <li>{myFamily[2]}</li>
                  </ol>
                    ReactDOM.render(element7, document.getElementById('root'));*/
   
                 /* const element7 = <ol>
                                       {myFamily.map((fam)=><li>{fam}</li>)}
                                   </ol>   
                  */ 
                 /*const element7 = <ol>
                                       {myFamily.map((fam,index)=><li key={index}>{fam}</li>)}
                                      </ol> */
          /*         
  const element7 =
        <div>
            <h1>List Items</h1>
                  <ol>
                    {myFamily.map((task, index)=><li key={index}>{task}</li>)}
                  </ol>
        </div>*/
        /*
       const myFamily =['Madhuri','Vamshi','Santhosh','Roopa'];
       class List extends Component{
        render(){
          return <ol>{myFamily.map((fam,index)=><li key={index}>{fam}</li>)}</ol>
        }
      }
     
      class Title extends Component{
        render(){
          return <h1>List Items</h1>
        }
      }

      class Main extends Component{
        render(){
          return <div>
                    <Title/>
                    <List />
                 </div>
        }
      }*/
        /*class List extends Component{
          render(){
            return <ol>{this.props.myFamily.map((fam,index)=><li key={index}>{fam}</li>)}</ol>
          }
        }
       
        class Title extends Component{
          render(){
            return <h1>{this.props.title}</h1>
          }
        }
  
        class Main extends Component{
          render(){
            return <div>
                      <Title title={'List Items'}/>
                      <List myFamily={['Santhosh','Roopa','Madhuri','Vamshi']}/>
                      <List myFamily={['Manoj','Aryan Raj']}/>
                      <List myFamily={['Shamim','Mijanur','Tanveer']} />
                   </div>
          }
        }*/
       //<Main/>,
      /*<Main/>, */
/*{ <Greeting name='Aryan'/>, }*/
/* <UserCard name='Vamshi' email='vamshichoula1@gmail.com' age='28'/>, */
/* <Status loggedIn={true} />, */
/*<Card name='Aryan' age='23' />, */
/* <MyFamily father='Santhosh' mother='Rupa' sister='Madhuri'/>, */
/* */
//const store =createStore(rootReducer);
//<Provider store={store}> </Provider>  <App/>
const store =createStore(postReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));  

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter>
</Provider>,document.getElementById('root'));