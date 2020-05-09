import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Period from './Period';
import { loadCurrentPeriod } from '../../actions/periods';
import { sendData } from '../../actions/metersData';
import { selectCurrnetPeriod } from '../../selectors/periods';

const mapStateToProps = createStructuredSelector({
    period: selectCurrnetPeriod
});

const mapDispatchToProps = {
    loadData: loadCurrentPeriod,

    saveDataOfMeters: (payload) => (dispatch) => {
        dispatch(sendData(payload));
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Period);
