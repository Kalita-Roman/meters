import { connect } from 'react-redux';
import Period from './Period';
import { request } from '../../services/request';
import { addPeriod } from '../../actions/periods';

const mapStateToProps = (state) => {
    const { periods } = state;
    const { current, previous, all } = periods;
    console.log('periods', periods);
    const currentPeriod = [...current && all[current].meters || []];
    const previousPeriod = [...previous && all[previous].meters || []];
    console.log('previousPeriod', previousPeriod);
    const meters = Array.from(new Set([
        ...currentPeriod.map(x => x.type),
        ...previousPeriod.map(x => x.type)
    ]))
        .map(x => ({ 
            type: x,
            current: currentPeriod.find(meter => meter.type === x),
            previous: previousPeriod.find(meter => meter.type === x),
        }));
    return { 
        period: state.periods,
        meters,
    };
};

const mapDispatchToProps = {
    loadData: () => async (dispatch) => {
        const data = await request('meters/current');
        const { current, previous } = data.response.periods;
        dispatch(addPeriod({ 
            all: { [current.name]: {
                name: current.name,
                meters: current.meters,
                order: current.order,
            }, [previous.name]:  {
                name: previous.name,
                meters: previous.meters,
                order: previous.order,
            }},
            current: current.name,
            previous: previous.name,
        }));
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Period);
