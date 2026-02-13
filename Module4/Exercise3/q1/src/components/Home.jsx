function Home({isLogin}){
    return(
        <div>
            {isLogin?(
          <h2>Welcome Back!</h2> 
          ):(
            <h2></h2>
          )        
          }
        </div>
    );
}

export default Home