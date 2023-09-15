import Form from 'react-bootstrap/Form';
import { useShopCart } from '../contexts/CartShopContext';


export function SearchItems({updateFilter, switchSelection}){
const { shopItems } = useShopCart()
const categories = shopItems.map(item=>item.category)
const uniqueCategories = new Set(categories)

    return(
        <div className="d-flex align-items-center justify-content-between mb-3 mx-1">
            <div>
                <select className="form-select" onChange={switchSelection}>
                    <option value="ALL">Catalog</option>
                    {[...uniqueCategories].map( cg =>
                    (<option key={cg} value={cg}>{cg}</option>)
                    )}
                </select>
            </div>
            <div className="d-flex">
                <Form inline ="true">
                    <Form.Control type="text" placeholder="Search..." className="mr-sm-3" onChange={(e)=>updateFilter(e.target.value)}/>
                </Form>
            </div>
        </div>
    );
}