/* eslint-disable no-unused-vars */
import React, {  useEffect, useRef } from "react";
import { userAvt } from "../../assets";
import NFTService from "../../services/nftService";
const PopupBox = ({ show, onClose }) => {  

  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  useEffect(() => {
    if (show && modalRef.current) {
      modalInstance.current = new window.bootstrap.Modal(modalRef.current);
      modalInstance.current.show();
      modalRef.current.addEventListener("hidden.bs.modal", () => {
        removeBackdrop(); 
        onClose();
      });
    }
  }, [show, onClose]);

  const handleClose = () => {
    if (modalInstance.current) {
      modalInstance.current.hide(); 
    }
  };

  const removeBackdrop = () => {
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  };

  return (
    <>
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                <span className="text-accent">NFTWALL</span> Buy & Selling
              </h5>
              <button type="button" className="btn-close" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="h-6 w-6 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>{" "}
              </button>
            </div>

            <div className="modal-body p-6">
              <div className="relative flex items-center justify-center  border-jacarta-100 py-4 dark:border-jacarta-600">
                <img
                  src={userAvt}
                  alt="avatar 2"
                  className="rounded-2lg"
                  loading="lazy"
                />
              </div>

              <div className="mb-2 flex items-center justify-center border-jacarta-100 py-2.5 dark:border-jacarta-600">
                <div className=" ">
                  <h1
                    className="text-center font-display text-xl 
                      text-jacarta-600  dark:text-white font_40"
                  >
                    1 NFT = <span className="text-accent">$5</span> Bep 20 USDT
                  </h1>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                  onClick={NFTService.buyNFT}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupBox

