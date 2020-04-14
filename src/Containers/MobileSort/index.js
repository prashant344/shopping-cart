import { connect } from 'react-redux';

import { sortProduct } from '../../Actions/ShoppingList';
import MobileSort from '../../Components/MobileSort';

const mapDispatchToProps = (dispatch) => ({
    sortProduct: (sortOption) => dispatch(sortProduct(sortOption))
})
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MobileSort);
