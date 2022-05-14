import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h2 className=" text-primary text-xl">Appointment</h2>
        <h3 className="text-3xl text-white">Make an Appointment Today</h3>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam
          id voluptatem explicabo ex expedita enim quam voluptatum ab tempore
          autem asperiores, quasi vitae voluptate, harum repudiandae. Accusamus,
          vero repellendus?
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
