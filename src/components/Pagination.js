import React, {useContext} from 'react'
import { ThemeContext } from '../Context'
import './styles/pagination.css'

export default function Pagination(props) {
    const { page, setPage } = useContext(ThemeContext)
    const pageArray = ["<", 1, 2, 3, 4, 5, ">"]

    function handleClick(value) {
        switch(value) {
            case "<":
                page !== 1 && setPage(page - 1)
              break;
            case ">":
                page !== 5 && setPage(page + 1)
              break;
            default:
              setPage(value)
        }
    }

    const styleOne = {backgroundColor: "#b7472a", color: "white"}
    const styleTwo = {backgroundColor: "white", color: "black"}
    
    const pageDisplay = pageArray.map((item, index) => (
        <button className="page_box" key={index} onClick={() => handleClick(item)} style={index === page ? styleOne : styleTwo}>{item}</button>
    ))

    return (
        <div id="pagination">
            {pageDisplay}
        </div>
    )    
}