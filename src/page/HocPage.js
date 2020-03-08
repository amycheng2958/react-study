import React, { Component } from 'react';
// function Child() {
//     return ( <div>child</div> );
// }
const foo = Cmp => props => {
    console.log(props);
    console.log(Cmp);
    return (
        <div className="border">
            <Cmp {...props}/>   
        </div>
    )
}
const foo2 = Cmp => props => {
    return (
        <div className="greenBorder">
            <Cmp {...props}/>       
        </div>
    )
}
// const Foo = foo2(foo(foo(Child)))
@foo2
@foo
@foo
class Child extends Component {
    render() {
        return (
            <div>
                Child
            </div>
        );
    }
}
class HocPage extends Component {
    render() {
        return (
            <div>
                <Child/>
            </div>
        );
    }
}

export default HocPage;