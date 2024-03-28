import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import Card from "./Card";
import { useEffect, useState } from "react";
const ServiceSection = () => {
    const [card,setCard]=useState([])

    // ====================== Fetching data from json file ======================
    useEffect(()=>{
        fetch('./card.json')
        .then(res=>res.json())
        .then(data=>{
            setCard(data)
        })
    },[])
    return (
        <div className="lg:max-w-7xl mx-auto mt-10">
            <h1 className="font-bold text-4xl poppins-semibold text-black mx-5">Services We Offer</h1>
            <div className="flex justify-between items-center mx-5">
                <p className="poppins-medium text-black">Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
                <div className="flex justify-center items-center gap-5 text-4xl">
                    <IoArrowBackCircleOutline />
                    <IoArrowForwardCircleOutline />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-10 mx-5">
                {/* ====================== showing every card dynamicaly, so we dont have to repete code ====================== */}
                {
                    // ====================== we are mapping through every card element ==================
                    card.map(i=><Card card={i} key={i.id} />)
                }
            </div>
        </div>
    );
};

export default ServiceSection;