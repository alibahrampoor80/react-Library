import {getBooks} from "../data/data";
import {NavLink, Outlet, useSearchParams, useLocation} from "react-router-dom";

const Books = () => {
    const books = getBooks()

    const location = useLocation()
    // console.log(location)
    const [searchParams, setSearchParams] = useSearchParams()
    return <>
        <div className="" style={{padding: '1rem 0'}}>
            <nav style={{borderLeft: '1px solid black', padding: '1rem', display: 'inline-block', float: 'right'}}>
                <input className={'form-control'} value={searchParams.get('filter') || ''}
                       onChange={(event) => {
                           let filter = event.target.value;
                           if (filter) {
                               setSearchParams({filter: filter});
                           } else {
                               setSearchParams({});
                           }
                       }
                       }
                       type="text" placeholder={'جستجوی کتاب'}/>
                {
                    books.filter((book) => {
                        let filter = searchParams.get('filter');
                        if (!filter) {
                            return true
                        } else {
                            let name = book.name.toLowerCase()
                            return name.startsWith(filter.toLocaleLowerCase())
                        }
                    })
                        .map((book) => (
                            <NavLink
                                style={({isActive}) => {
                                    return {
                                        padding: '5px',
                                        margin: '10px 0',
                                        borderRadius: isActive ? '50px' : '10px',
                                        backgroundColor: 'lightblue'
                                    }
                                }}
                                className={({isActive}) => (isActive ? 'text-success nav-link' : 'nav-link')}


                                to={`/books/${book.number}${location.search}`}
                                key={book.number}>{book.name}</NavLink>
                        ))

                }

            </nav>
            <Outlet/>
        </div>

    </>
}
export default Books