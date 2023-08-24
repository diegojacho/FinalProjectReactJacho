import Form from 'react-bootstrap/Form';
import data from "../data/items.json"

const categories = data.map(item =>item.category)
const uniqueCategories = new Set(categories) 

export function SearchItems({updateFilter, switchSelection}){
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