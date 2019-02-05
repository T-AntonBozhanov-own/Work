import { connect } from 'react-redux';

import * as modalSelectors from './selectors';
import * as modalActions from './actions';
import component from './component';


const mapStateToProps = state => ({
    data: modalSelectors.getData(state),
    isOpen: modalSelectors.getIsOpen(state),
});

const mapDispatchToProps = {
    onChange: modalActions.onChange,
    changeIsOpen: modalActions.changeIsOpen,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);