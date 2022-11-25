import PropTypes from 'prop-types' ;
function BIO(props) {
    return (
      <>
        <p style={{fontSize:"25px"}}>{props.bio}</p>
      </>
    );
  }
 BIO.propTypes = {

    bio: PropTypes.string,
  }
  BIO.defaultProps = {
    bio:"bio"
  };
  export default BIO;