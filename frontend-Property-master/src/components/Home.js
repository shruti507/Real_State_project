import Blog from "./Blog";
import CarCarousel from "./Carosal";
import Contact from "./Contact";
import DummyProperty from "./DummyProperty";
import Footer from "./Footer";
import AboutUs from "./AboutUs.js";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { fetchItems } from "../redux/slice";

export default function Home() {
    const [properties, setProperties] = useState([]);
    const {itemList,loading,error} = useSelector(store=>store.Items);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     // Fetch properties data when component mounts
    //     axios.get(process.env.REACT_APP_PROPERTY_VIEW_ALL_URL)
    //       .then(result => {
    //         setProperties(result.data);
    //       })
    //       .catch(err => {
    //         console.error('Error fetching properties:', err);
    //       });
    //   }, []);

      useEffect(()=>{
        dispatch(fetchItems());
      },[])
      // console.log(itemList)
      console.log(properties)
    return <>
        <Header setProperties={setProperties}/>
        <CarCarousel />
        <DummyProperty itemList={itemList}/>
        <AboutUs />
        <Footer/>
        
    </>
}