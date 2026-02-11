function BugAndFix(){
    const element = <h1>Hello, World!;</h1>;
    const elementFix = <h1>Hello, World!</h1>;


    return(
        <div>
            <h1>Issue of Semicolon</h1>
            {element}
            <h1>Fixed</h1>
            {elementFix}
        </div>
    );
}

export default BugAndFix