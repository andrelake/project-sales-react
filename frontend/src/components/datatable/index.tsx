import {useEffect, useState} from "react";
import {SalePage} from "../../types/sale";
import axios from "axios";
import {BASE_URL} from "../../utils/requests";
import {formatDate} from "../../utils/format";
import Pagination from "../pagination";

function DataTable() {

    const [activePage, setActivePage] = useState(0)

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=10&sort=date,desc`)
            .then(res => {
                setPage(res.data)
            })
    }, [activePage])

    const onPageChange = (index: number) => {
        setActivePage(index)
    }

    return (
        <>
            <Pagination page={page} onPageChange={onPageChange}></Pagination>
            <div className={"table-responsive mb-5"}>
                <table className={"table table-striped table-sm"}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Seller</th>
                            <th>Costumers</th>
                            <th>Deals</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    { page.content?.map(x => (
                        <tr key={x.id}>
                            <td>{formatDate(x.date, "dd/MM/yyyy")}</td>
                            <td>{x.seller.name}</td>
                            <td>{x.visited}</td>
                            <td>{x.deals}</td>
                            <td>{x.amount.toFixed(2)}</td>
                        </tr>
                    ))}


                    </tbody>
                </table>

            </div>
        </>
    );
}

export default DataTable;
