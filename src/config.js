export default{
    rootPath : process.env.REACT_APP_STATE === 'localhost'
    ?'https://unterwasche-api.herokuapp.com' 
    : ''
};