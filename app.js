{/*

<div id="parent">

    <div id="child">

        <h1>I am an H1 tag</h1>
    </div>
</div> 

*/}

// create above using react

const el=React.createElement("div",{id : "parent"},

            React.createElement("div",{id :"child"},
            
            [React.createElement("h1",{},"I am an H1 tag"),React.createElement("h2",{},"I am an H2 tag")]));


 //SINCE BROWSWER DONT HAVE REACT ENGINE IT CANT REACT ITS DOM TREE , SO ReactDom help to create parent or div root inside which only complete data/code will be present
 const root=ReactDOM.createRoot(document.getElementById("root"));




 root.render(el);