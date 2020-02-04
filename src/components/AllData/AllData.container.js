import { connect } from 'react-redux';
import AllData from './AllData';
import { request } from '../../services/request';
import { setAllData } from '../../actions/metersData';

const mapStateToProps = (state) => {
    if(!state.allData) {
        return [];
    }
    return {data: state.allData};
};

const mapDispatchToProps = {
    loadData: () => async (dispatch) => {
        const data = await request('meters/records');
        console.log('loadData AllData', data.response);
        dispatch(setAllData(data));
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllData);