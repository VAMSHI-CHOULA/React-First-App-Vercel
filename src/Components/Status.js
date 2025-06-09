/**/const Status =({loggedIn})=>{
    return  <>
                {
                    loggedIn ? 
                     (<>
                       <h1>Welcome back!</h1>
                       <h1>My Name is Vamshi</h1>
                     </>) :  
                     <h1>Please Log in</h1>
                 }
            </>
}
/*
function Status({loggedIn}){
    return (<div>
                {loggedIn ? 
                (<h1>Welcome back!</h1>
                ) : (<h1>Please Log in</h1>
                )}
             </div>
    );
}*/
export default Status;
