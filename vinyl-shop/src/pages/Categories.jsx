import {Container, Col, Row} from "react-bootstrap";
import data from "../data/items.json"
import { useFilter } from "../hooks/useFilter";
import { Item } from "../components/Item";
import Accordion from "react-bootstrap/Accordion"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

export function Categories(){
    const {shopItems} = useFilter(data)
    const categories = data.map(item => item.category)
    const uniqueCategories = new Set(categories)
    return(
        <Container>
            <h1>Categories</h1>
            <Accordion defaultActiveKey="0"> 
                {[...uniqueCategories].map(cg=>(
                    <Accordion.Item key={cg} eventKey={cg}>
                        <AccordionHeader>{cg}</AccordionHeader>
                        <AccordionBody>
                            <Row xs={2} md={3} lg={4} className="d-flex justify-content-center alignt-items-center">
                                {shopItems.filter(item=>{
                                    return(item.category === cg)}).map(item=>{
                                        return(
                                            <Col key={item.id}>
                                                <Item key={item.id} {...item}></Item>
                                            </Col>
                                        )}
                                    )}
                            </Row>
                        </AccordionBody>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}