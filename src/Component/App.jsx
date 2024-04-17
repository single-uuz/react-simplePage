import Nav  from './Nav'
import SideNav from './SideNav'
import Info from './Info'
import './my-css/right.css'
import './my-css/Nav.css'
import './my-css/sideNav.css'
import './my-css/root.css'
import data1 from'./Data/infoMes.json'
import data2 from'./Data/infoMes02.json'
import sideData from'./Data/sideInfo.json'
import React, { useState, useEffect } from 'react';

function App(){
    //定义
    var [infoId,setId] = useState(0)
    var [data, setData] = useState(data1)
    var [filterArray,setFilter] = useState(["001","002"])
    var [sideInfo,setSideInfo] =useState(sideData.Info)
    var filterMember = data.infoMember.filter(
        (item) => filterArray.includes(item.id)
    )

    var infoContent = filterMember.map(
        (item) => <Info infoMes = {item}  key = {item.id} ></Info>
    )

    const newId = (requestId) =>{
        setId(requestId)
    }

    const selectId = (requestFilter) =>{
        setFilter(filterArray => [...requestFilter])
    }
    useEffect(() => {
        //通过infoId发送网络请求
        //模拟切换左侧导航栏
        if(infoId % 2 == 0)
            setData(data1)
        else
            setData(data2)
        
    },[infoId])

    useEffect(() => {
    },[filterArray.length])

    return (
        <>
            <SideNav sideInfo ={sideData.info} newId = {newId}/>
            <div className='right'>
                <Nav navInfo = {data.navInfo} selectId = {selectId}> </Nav>
                <div className="scroll">
                    {
                       infoContent
                    }
                </div>
            </div>
        </>
    )
}

export default App;