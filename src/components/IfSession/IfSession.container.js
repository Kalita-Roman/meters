import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSession } from '../../selectors/session';
import IfSession from './IfSession';

const mapStateToProps = createStructuredSelector({
    session: selectSession
});

export default connect(mapStateToProps)(IfSession);
