import { connect } from 'react-redux';

import { filterProduct } from '../../Actions/ShoppingList';
import Filter from '../../Components/Filter';

const mapDispatchToProps = (dispatch) => ({
    filterProduct: (filter) => dispatch(filterProduct(filter))
})
const mapStateToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
