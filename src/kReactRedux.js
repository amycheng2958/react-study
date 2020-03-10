import React, { Component } from "react";
// import { bindActionCreators } from "redux";

const ValueContext = React.createContext();
export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) => WrappedComponent => {
    return class extends Component {
        static contextType = ValueContext;
        constructor(props) {
            super(props);
            this.state = {
                props: {}
            };
        }
        componentDidMount() {
            const { subscribe } = this.context;
            this.update();
            subscribe(() => {
                this.update();
            });
        }
        update = () => {
            const { dispatch, getState } = this.context;
            let stateProps = mapStateToProps(getState());
            let dispatchProps;
            if (typeof mapDispatchToProps === "object") {
                dispatchProps = bindActionCreators(
                    mapDispatchToProps,
                    dispatch
                );
            } else if (typeof mapDispatchToProps === "function") {
                dispatchProps = mapDispatchToProps(dispatch);
            } else {
                dispatchProps = { dispatch };
            }
            this.setState({
                props: {
                    ...dispatchProps,
                    ...stateProps
                }
            });
        };
        render() {
            return <WrappedComponent {...this.state.props} />;
        }
    };
};
export class Provider extends Component {
    render() {
        const { children } = this.props;
        console.log(this);
        return (
            <ValueContext.Provider value={this.props.store}>
                {children}
            </ValueContext.Provider>
        );
    }
}
function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(...args));
}

/* const creators = {
    add: () => ({
        type: "ADD"
    }),
    minus: () => ({
        type: "MINUS"
    })
}; */
export function bindActionCreators(creators, dispatch) {
    const obj = {};
    for (const key in creators) {
        obj[key] = bindActionCreator(creators[key], dispatch);
        console.log(creators[key], 66);
    }
    return obj;
}
