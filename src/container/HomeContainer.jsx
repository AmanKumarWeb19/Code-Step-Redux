import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/action";

const mapStateToProps = (state) => ({
  cardData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
