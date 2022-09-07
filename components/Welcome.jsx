import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

const commonStyles =
  "sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-2 border-gray-400  text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    handleChange={(e) => handleChange(e, name)}
    step="0.0001"
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm bg-gray-700"
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />
            across the world
          </h1>
          <p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and Sell cryptocurrencies easily on
            Krypto.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-blue-500 "
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 ">
            <div
              className={`rounded-tl-2xl ${commonStyles}`}
              style={{ minHeight: "70px" }}
            >
              Reliability
            </div>
            <div className={commonStyles} style={{ minHeight: "70px" }}>
              Security
            </div>
            <div
              className={`rounded-tr-2xl ${commonStyles}`}
              style={{ minHeight: "70px" }}
            >
              Etherium
            </div>
            <div
              className={`rounded-bl-2xl ${commonStyles}`}
              style={{ minHeight: "70px" }}
            >
              Web3.0
            </div>
            <div className={commonStyles} style={{ minHeight: "70px" }}>
              Low fees
            </div>
            <div
              className={`rounded-br-2xl ${commonStyles}`}
              style={{ minHeight: "70px" }}
            >
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 bg-blue-300 eth-card white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full ">
              <div className="flex justify-between items-start ">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Etherium
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-gray-700 rounded-lg">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
