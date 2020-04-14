import { connect } from 'react-redux';

import { sortProduct } from '../../Actions/ShoppingList';
import Sort from '../../Components/Sort';

const mapDispatchToProps = (dispatch) => ({
    sortProduct: (sortOption) => dispatch(sortProduct(sortOption))
})
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
