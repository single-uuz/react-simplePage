import React, { useState, useEffect } from 'react';
import  './my-css/Nav.css'
    var selectArray = []
function Nav(props){

    //获取传来的数据作为导航标签
    var [data,setData] = useState(0)
    data = props.navInfo
    const select = (id) => {
       let index = selectArray.indexOf(id)
       if(index != -1){
            selectArray.splice(index,1)
       }else{
        selectArray.push(id)
       } 
       props.selectId(selectArray) 
    }

    useEffect( () =>{
    },props.navInfo)

    var listContent = data.map(
        (item) => <p key = {item.id} onClick={() => {select(item.id)}}>{item.name}</p>
    )

    
    
    return (
            <div className = 'Nav'>
                {
                    listContent
                }
            </div>
    )
}

export default Nav;