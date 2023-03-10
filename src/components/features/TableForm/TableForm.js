

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getTableById, updateTableValues } from '../../../redux/tablesRedux';
import { getAllStatuses } from '../../../redux/statusesRedux';
import { Form, Button, Container, Col} from 'react-bootstrap';

const TableForm = () => {
  const statusOptions = useSelector(getAllStatuses);

  const { id }  = useParams();
  const tableData = useSelector(state => getTableById(state, parseInt(id)));
  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const update = () => {
    dispatch(updateTableValues({id, status, peopleAmount: parseInt(peopleAmount), maxPeopleAmount: parseInt(maxPeopleAmount), bill: parseInt(bill)}));
    navigate('/');
  };

  useEffect(() => {
    if(status === "Busy") {
      setBill(0)
    };
    if(status === "Cleaning" || status === "Free") {
      setPeopleAmount(0)
    };
  }, [status]);

  useEffect(() => {
    const peopleAmountValue = parseInt(peopleAmount);
    const maxPeopleAmountValue = parseInt(maxPeopleAmount);
    if (peopleAmountValue < 0) {
      setPeopleAmount(0)
    } else if (maxPeopleAmountValue < 0) {
      setMaxPeopleAmount(0)
    } else if (peopleAmountValue > maxPeopleAmountValue) {
      setPeopleAmount(maxPeopleAmountValue)
    } else if (maxPeopleAmountValue > 10) {
      setMaxPeopleAmount(10)
    } else if (peopleAmountValue > 10) {
      setPeopleAmount(10);
    }
  }, [peopleAmount, maxPeopleAmount]);

  if(!tableData) {
  return (
    <Navigate to="/" />
  )
  } else {
    return (
    <div>
      <Container className="p-0">
      <Col sm={3}>
      <h1>Table {tableData.id}</h1>
      <Form className="row">
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">Status:</Form.Label>
          <Form.Select value="status"  onChange={e => setStatus(e.target.value)}>
            <option>{status}</option>
            {statusOptions.map((statusOption) => (
            status !== statusOption ? <option key={statusOption}>{statusOption}</option> : ''
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="d-inline-flex my-2 align-items-center">
          <Form.Label className="fw-bold pe-4">People:</Form.Label>
          <Form.Control type="number" value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)} />
            <span className="px-2">/</span>
          <Form.Control type="number"  value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)} />
        </Form.Group>
          <div >
            <Form.Group className="d-inline-flex my-2 align-items-center">
              <Form.Label className="fw-bold d-inline-flex">Bill: <span className="fw-normal ps-4 pe-1">$</span></Form.Label>
            <Form.Control type="number" value={bill} onChange={e => setBill(e.target.value)} />
            </Form.Group>
          </div>
      </Form>
      <Button onClick={update} className="mt-2">Update</Button>
      </Col>
    </Container>
    </div>
    );
  };
};

export default TableForm;