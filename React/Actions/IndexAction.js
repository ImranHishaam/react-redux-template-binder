import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';

import IndexComponent from '../Components/IndexComponent';

const mapStateToProps = (state) => ({
    didLoad: state.indexReducer.didLoad
});

const mapDispatchToProps = (dispatch) => ({
   startKit: () => dispatch(reduxStarterKitLaunch())
})

export const reduxStarterKitLaunch = () => ({
    type: ActionTypes.REDUX_STARTER_KIT,
    didLoad: true
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent);