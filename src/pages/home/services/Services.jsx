import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mt-8">
      <div className="text-center space-y-5">
        <h3 className="text-3xl font-semibold text-orange-600">Services</h3>
        <h2 className="text-5xl">Our Services Area</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          unde voluptatem necessitatibus <br /> deserunt voluptate quam aut
          numquam, iure ullam doloremque!
        </p>
      </div>
      <div>
              <h4 className="text-xl">Total Services: {services.length}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {
                      services.map(service => <ServiceCard
                          key={service._id}
                          service={service}
                      ></ServiceCard>)
                  }
              </div>
      </div>
    </div>
  );
};

export default Services;
