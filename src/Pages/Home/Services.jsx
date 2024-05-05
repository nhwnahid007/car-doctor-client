import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
       }
      </div>
    </div>
  );
};

export default Services;
