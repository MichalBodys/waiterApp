import './Home.module.css'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../../redux/tablesRedux'
import Tables from '../../views/Table/Tables'
const Home = () => {

    const tables = useSelector(getAllTables)
console.log(tables);
    return (
       <Tables/>
    )
}

export default Home