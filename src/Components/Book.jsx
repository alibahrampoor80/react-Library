import {useParams, useNavigate, useLocation} from "react-router-dom";
import {getBook, deleteBook} from "../data/data";


const Book = () => {
    const paramsBook = useParams();
    const location = useLocation()
    const book = getBook(parseInt(paramsBook.bookId));
    const navigate = useNavigate()
    if (book) {

        return <>
            <main className="" style={{marginRight: '10px', display: 'inline-block'}}>

                <p> کتاب با شناسه: {book.name} {book.number}</p>
                <p> قیمت کتاب {book.amount} </p>
                <p> تاریخ انتشار {book.due} </p>
                <button onClick={() => {
                    deleteBook(book.number)
                    navigate("/books" + location.search);
                }
                } className={'btn btn-danger'}>حذف کتاب
                </button>
            </main>

        </>
    } else {
        return <>
            <main className="" style={{marginRight: '10px', display: 'inline-block'}}>
                <h2>همچین کتابی یافت نشد</h2>

            </main>

        </>
    }
}
export default Book