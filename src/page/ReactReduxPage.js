import React, { Component } from "react";
// import { connect } from "react-redux";
import { connect } from "../kReactRedux";
import { bindActionCreators } from "redux";
export default connect(
    state => ({ num: state }),
    // {
    //     add: () => ({
    //         type: "ADD"
    //     })
    // }
    dispatch => {
        let res = {
            add: () => ({ type: "ADD" })
        };
        res = bindActionCreators(res, dispatch);
        return {
            dispatch,
            ...res
        };
    }
)(
    class ReactReduxPage extends Component {
        render() {
            console.log(this.props, 11);
            const { num, dispatch, add } = this.props;
            return (
                <div>
                    {num}
                    ReactReduxPage
                    {/* <button onClick={() => dispatch({ type: "ADD" })}>
                        add
                    </button> */}
                    <button onClick={add}>add</button>
                </div>
            );
        }
    }
);
