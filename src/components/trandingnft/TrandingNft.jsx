import React, {useState} from 'react'
import dataTrandingCard from '../../assets/json/Trandingcard'
import Cta from '../cta/Cta'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import PopupBox from '../popup/PopupBox';
const TrandingNft = () => {

  const [modalOpen, setModalOpen] = useState(false);

    const backgroundImageStyle = {
         backgroundImage: "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)"
    }
  return (
    <>
           {/* Trending Categories  */}
      <section className=" py-24  bg-ligt-base dark:bg-jacarta-900 " id='tranding'>
        <div className="container">
          <h2 className="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white">
            <span className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
              style={backgroundImageStyle}></span>
            Trending categories
          </h2>

         

          {/* Grid Nft   */}

          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            
            {
                dataTrandingCard.map((item =>
                    <article>
                    <div
                      className="block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700"
                    >
                      <figure className="relative">
                        <a href="#">
                          <img
                            src={item.img}
                            alt="item 5"
                            className="w-full rounded-[0.625rem]"
                            loading="lazy"
                          />
                        </a>
                        <div
                          className="absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2 dark:bg-jacarta-700"
                        >
                            <Tippy content="Favorite" placement="top">
                          <span
                            className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                            data-tippy-content="Favorite"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                            >
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path
                                d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                              />
                            </svg>
                          </span>
                          </Tippy>
                          <span className="text-sm dark:text-jacarta-200">{item.like}</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img
                                src={item.avatar1}
                                alt="creator"
                                className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                data-tippy-content="Creator: Sussygirl"
                              />
                            </a>
                            <a href="#">
                              <img
                                src={item.avatar2}
                                alt="owner"
                                className="h-6 w-6 rounded-full border-2 border-white hover:border-accent dark:border-jacarta-600 dark:hover:border-accent"
                                data-tippy-content="Owner: Sussygirl"
                              />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="mt-7 flex items-center justify-between">
                        <a href="#">
                          <span className="font-display text-base text-jacarta-700 hover:text-accent dark:text-white"
                            >{item.title}</span>
                        </a>
                        <div className="dropup rounded-full hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                          <a
                            href="#"
                            className="dropdown-toggle inline-flex h-8 w-8 items-center justify-center text-sm"
                            role="button"
                            id="itemActions"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              width="16"
                              height="4"
                              viewBox="0 0 16 4"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-jacarta-500 dark:fill-jacarta-200"
                            >
                              <circle cx="2" cy="2" r="2" />
                              <circle cx="8" cy="2" r="2" />
                              <circle cx="14" cy="2" r="2" />
                            </svg>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                            aria-labelledby="itemActions"
                          >
                            <button
                              className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              New bid
                            </button>
                            <hr className="my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                            <button
                              className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Refresh Metadata
                            </button>
                            <button
                              className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Share
                            </button>
                            <button
                              className="block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600"
                            >
                              Report
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm flex items-center justify-between">
                        <span className="mr-1 text-jacarta-700 dark:text-jacarta-200">{item.ozoneValue}</span>
                        {/* <span className="text-jacarta-500 dark:text-jacarta-300">{item.price}</span> */}
                      </div>
      
                      <div className="mt-8 flex items-center justify-between">
                        <button
                          className="font-display text-sm font-semibold text-accent"
                          onClick={() => setModalOpen(true)}
                        >
                          Buy now
                        </button>
                        <a href="#" className="group flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="mr-1 mb-[3px] h-4 w-4 fill-jacarta-500 group-hover:fill-accent dark:fill-jacarta-200"
                          >
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path
                              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"
                            />
                          </svg>
                          <span className="font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200"
                            >View History</span  >
                        </a>
                      </div>
                    </div>
                  </article>
                ))
            }
          </div>
        </div>
        <Cta/>
      </section>

       {/* end trending categories  */}


       {/* Popup box  */}

       {modalOpen &&   <PopupBox show={modalOpen} onClose={() => setModalOpen(false)}/>}

    {/* <div className="modal fade"  id="buyNowModal" tabindex="-1" aria-labelledby="buyNowModalLabel" aria-hidden="true">
    <div className="modal-dialog max-w-2xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="buyNowModalLabel"> <span className='text-accent'>NFTWALL</span> Buy & Selling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="h-6 w-6 fill-jacarta-700 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg> </button>
        </div>

        <div className="modal-body p-6">
          <div className="relative flex items-center justify-center  border-jacarta-100 py-4 dark:border-jacarta-600">
              <img src={userAvt} alt="avatar 2" className="rounded-2lg" loading="lazy" />
          </div>

          <div
            className="mb-2 flex items-center justify-center border-jacarta-100 py-2.5 dark:border-jacarta-600"
          >
            <div className=" ">
              <h1 className='text-center font-display font_40
                      text-jacarta-600  dark:text-white'>1 NFT = <span className='text-accent'>$5</span> Bep20 USDT</h1>
            </div>
          </div>

        </div>

        <div className="modal-footer">
          <div className="flex items-center justify-center space-x-4">
            <button
              type="button"
              className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </>
  )
}

export default TrandingNft