import { useState } from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../../redux/tablesRedux';

const TableForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const tableData = useSelector(state => getTableById(state, parseInt(id)))
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount)
    const [bill , setBill] = useState(tableData.bill)
    const [status, setStatus] = useState(tableData.status)

const update = (e) => {
    dispatch(updateTable())

}

return(
   <div>
    <Container>
       <Col sm={3}>
        <h2>Table {id}</h2>
        <Form.Group className='d-inline-flex my-2 align-items-center'>
        <Form.Label className='fw-bold me-2 pe-4' >Status:</Form.Label>
        <Form.Select onChange={e => setStatus(e.target.value)}>
          <option>{tableData.status}</option>
          <option value="1">Cleaning</option>
          <option value="2">Reserved</option>
          <option value="3">Busy</option>
          <option value="4">Free</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className='d-inline-flex my-2 align-items-center'>
            <Form.Label className='fw-bold me-2 pe-4' >People:</Form.Label>
            <Form.Control onChange={e => setPeopleAmount(e.target.value)} type='number' value={peopleAmount}/>
            <span className="px-2">/</span>
            <Form.Control type='number' value={tableData.maxPeopleAmount}/>
        </Form.Group>
        <Form.Group className='d-inline-flex my-2 align-items-center'>
            <Form.Label className='fw-bold me-2 pe-4' >Bill:</Form.Label>
            <span className="px-2" >$</span>
            <Form.Control onChange={e => setBill(e.target.value)} type='number' value={bill}/>
        </Form.Group>
       <Button type='sumbit' onClick={update}>Update</Button>
       </Col>
    </Container>
   </div>
)
}

export default TableForm