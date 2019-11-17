import React, {Component} from 'react';
import  {saleProducts} from './products';
import Modal from  './components/Modal'
const  ProductContext = React.createContext();

class ProductProvider extends Component{
	state = {
		products: saleProducts,
		//saleProducts:saleProducts,
		//modalProduct: saleProductDetails,
	}
	//{/*i think whenhandling the  products i need their ids as well and now since we are dealing with
	//products as well that have ids when the user selects product we must make sure the selected product
	//matches with what we have */}
	//{/*need tohave amethod tomopen my modal but it should base on what....*/}
	// componentDidMount(){
	// 	this.setState(() => {
	// 		return {products:saleProducts}
	// 	})
	// }
openModal = () => {
	return <Modal />
}
	render(){
		return (
			//at this point am gonna apply destructuring for anything i need in other cpts
			<ProductContext.Provider value={{
				...this.state,
				openModal:this.openModal,
			}}>
				

			</ProductContext.Provider>
		)
	}
}

const  ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}