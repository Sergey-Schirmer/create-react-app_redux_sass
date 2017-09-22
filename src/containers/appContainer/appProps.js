import {bindActionCreators} from 'redux';
import {appAction} from '../../actions/actions';

export const mapStateToProps = ({AppReducer}) => {
  return {
    text: AppReducer,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    appAction: bindActionCreators(appAction, dispatch),
  }
};