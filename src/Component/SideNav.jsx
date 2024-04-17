import './my-css/sideNav.css'
function SideNav(props){

    var info = props.sideInfo

    const requsetId = (id) => {
        props.newId(id)
    }


    const listContent = info.map(
        (item) => <a key= {item.id} onClick={() => {requsetId(item.id)}}>{item.name}</a>
    )
    return (
        <div className='Side'>
            {
                listContent
            }
        </div>
    )

}

export default SideNav;