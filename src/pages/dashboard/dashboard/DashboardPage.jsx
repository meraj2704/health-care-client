import React, { useState } from "react";
import { CiPillsBottle1 } from "react-icons/ci";
import { MdBloodtype } from "react-icons/md";

import AddDataModal from "../../../components/AddDataModal";
import { useDisclosure } from "@chakra-ui/react";

const DashboardPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 mr-4 2xl:mr-6">
        <div className="grid grid-cols-3 gap-4">
          <div className=" px-3 py-5 2xl:px-5 2xl:py-7 bg-white rounded-xl shadow-xl border border-[#E8E7E7]">
            <div className="flex justify-center gap-2 items-center">
              <div className="w-[30px] h-[30px] bg-[#D6FFDD] rounded-lg flex justify-center items-center">
                <CiPillsBottle1 className="text-green-700" />
              </div>
              <h1 className="text-sm 2xl:text-base font-semibold">
                Blood Oxygen
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className=" flex justify-center items-center gap-2 mt-4 ">
                <h1 className=" text-[25px] 2xl:text-[32px] py-0">80 </h1>
                <polygon className="text-[#818181] text-sm 2xl:text-base">
                  mg/dl
                </polygon>
              </div>

              <div className="px-2 py-1 flex justify-center items-center bg-[#D6FFDD] rounded">
                <h1 className="text-xs">Normal</h1>
              </div>
            </div>
          </div>
          <div className=" px-3 py-5 2xl:px-5 2xl:py-7 bg-white rounded-xl shadow-xl border border-[#E8E7E7]">
            <div className="flex justify-center gap-2 items-center">
              <div className="w-[30px] h-[30px] bg-[#F8DEBD] rounded-lg flex justify-center items-center">
                <CiPillsBottle1 className="text-[#E79B38]" />
              </div>
              <h1 className="text-sm 2xl:text-base font-semibold">
                Blood Sugar
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className=" flex justify-center items-center gap-2 mt-4 ">
                <h1 className=" text-[25px] 2xl:text-[32px] py-0">80 </h1>
                <polygon className="text-[#818181] text-sm 2xl:text-base">
                  mg/dl
                </polygon>
              </div>

              <div className="px-2 py-1 flex justify-center items-center bg-[#F8DEBD] rounded">
                <h1 className="text-xs">Normal</h1>
              </div>
            </div>
          </div>

          <div className=" px-3 py-5 2xl:px-5 2xl:py-7 bg-white rounded-xl shadow-xl border border-[#E8E7E7]">
            <div className="flex justify-center gap-2 items-center">
              <div className="w-[30px] h-[30px] bg-[#D0fbff] rounded-lg flex justify-center items-center">
                <MdBloodtype className="text-[#478F96]" />
              </div>
              <h1 className="text-sm 2xl:text-base font-semibold">
                Blood Pressure
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className=" flex justify-center items-center gap-2 mt-4 ">
                <h1 className=" text-[25px] 2xl:text-[32px] py-0">102 </h1>
                <polygon className="text-[#818181] text-sm 2xl:text-base">
                  / 72 mmgh
                </polygon>
              </div>

              <div className="px-2 py-1 flex justify-center items-center bg-[#D0fbff] rounded">
                <h1 className="text-xs">Normal</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[100px] rounded-xl shadow-xl border border-[#E8E7E7] mt-6">
          <h1 className="text-center font-bold text-xl 2xl:text-2xl mt-2">
            Medicines
          </h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border border-[#E8E7E7] mt-6">
          <h1>Appointments</h1>
        </div>
      </div>
      <div className="col-span-1 flex flex-col mr-3">
        <div className="">
          <div className="w-full bg-black rounded-xl p-3 py-7 2xl:py-5 2xl:p-5">
            <h1 className="text-white text-lg 2xl:text-[22px] ">
              BMI Calculator
            </h1>

            <div className=" flex flex-col gap-3 mt-5">
              <div className="flex justify-between items-center bg-[#F8DEBD] rounded-xl 2xl:px-5 2xl:py-6 px-4 py-5">
                <p className="text-black text-sm 2xl:text-base">Height </p>
                <p className="text-black text-sm 2xl:text-base">5.5 inch</p>
              </div>
              <div className="flex justify-between items-center bg-[#D0FBFF] rounded-xl 2xl:px-5 2xl:py-6 px-4 py-5">
                <p className="text-black text-sm 2xl:text-base">Weight </p>
                <p className="text-black text-sm 2xl:text-base">72kg</p>
              </div>

              <div className=" bg-[#4A4949] rounded-xl 2xl:px-5 2xl:py-6 px-4 py-5">
                <h1 className="text-white text-sm 2xl:text-base">
                  Body Mass Index (BMI)
                </h1>

                <div className="flex justify-between items-center mt-5">
                  <div>
                    <h1 className="text-white text-sm">24.5</h1>
                  </div>
                  <div className="px-2 py-1 flex justify-center items-center bg-[#D6FFDD] rounded">
                    <h1 className="text-xs">You are healthy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex w-full justify-center items-end mb-4">
          <button
            onClick={onOpen}
            className=" btn text-black py-3 w-full rounded-[10px] hover:scale-105"
          >
            Update
          </button>
        </div>
      </div>
      <AddDataModal isOpen={isOpen} onOpen={onOpen} onClose={onclose}></AddDataModal>
    </div>
  );
};

export default DashboardPage;
