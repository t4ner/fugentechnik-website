import React from "react";
import { IoCall, IoMail } from "react-icons/io5";
import { BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

const employeeData = [
  {
    name: "Michelle Weindel",
    position: "Einkauf/Buchhaltung",
    phone: "+49 (0)7253 9894 822",
    email: "michelle.weindel@gundg-fugentechnik.de",
    image: "/employee/employee1.webp",
  },
  {
    name: "Tanju Gök",
    position: "Betriebsleitung",
    phone: "+49 (0)7253 5091 339",
    mobile: "+49 (0)176 2105 2120",
    email: "tanju.goek@gundg-fugentechnik.de",
    image: "/employee/employee2.webp",
  },
  {
    name: "Burcu Yilmaz",
    position: "Einkauf/Personalabteilung/Assistentin der Geschäftsleitung",
    phone: "+49 (0)7253 5091 338",
    email: "burcu.yilmaz@gundg-fugentechnik.de",
    image: "/employee/employee3.webp",
  },
];

const EmployeeCard = () => {
  return (
    <div className="container grid grid-cols-1 gap-8 p-4 px-4 pb-20 mx-auto md:grid-cols-3 md:px-7">
      {employeeData.map((employee, index) => (
        <motion.div
          key={index}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex flex-col justify-between bg-[#D6EFF6] rounded-2xl shadow-lg p-4 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
        >
          <div>
            <div className="mx-auto mb-6 overflow-hidden rounded-full h-36 w-36">
              <img
                src={employee.image}
                alt={employee.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-base font-semibold text-gray-800 md:text-xl">
                {employee.name}
              </h3>
              <p className="text-sm font-medium tracking-wide text-cyan-600 md:text-base">
                {employee.position}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <IoCall className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <p className="text-xs text-gray-500 md:text-sm">Telefon</p>
                <a
                  href={`tel:${employee.phone.replace(/\s/g, "")}`}
                  className="text-sm transition-colors text-cyan-600 hover:text-cyan-700 md:text-base"
                >
                  {employee.phone}
                </a>
              </div>
            </div>

            {employee.mobile && (
              <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
                <div className="p-2 rounded-lg bg-cyan-50">
                  <BsPhone className="text-xl text-cyan-600" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500 md:text-sm">Mobil</p>
                  <a
                    href={`tel:${employee.mobile.replace(/\s/g, "")}`}
                    className="text-sm transition-colors text-cyan-600 hover:text-cyan-700 md:text-base"
                  >
                    {employee.mobile}
                  </a>
                </div>
              </div>
            )}

            <div className="flex items-center p-3 transition-shadow bg-white rounded-lg shadow-sm hover:shadow">
              <div className="p-2 rounded-lg bg-cyan-50">
                <IoMail className="text-xl text-cyan-600" />
              </div>
              <div className="ml-4">
                <button
                  onClick={() =>
                    (window.location.href = `mailto:${employee.email}`)
                  }
                  className="text-sm transition-colors md:font-medium md:text-base text-cyan-600 hover:text-cyan-700"
                >
                  E-Mail schreiben
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EmployeeCard;
