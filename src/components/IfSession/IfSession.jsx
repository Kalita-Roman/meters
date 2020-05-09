export default ({ session, children }) => {
    if(session.user) {
        return children;
    }
    return null;
};