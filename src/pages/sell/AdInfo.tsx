import { Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

type AdInfoProps = {
  isNextClicked: boolean;
};

export function AdInfo({ isNextClicked }: AdInfoProps) {
  const starImageString =
    "https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/black-star.8a0efb3f.svg";
  return (
    <div
      className={
        isNextClicked
          ? `absolute top-[970px] md:top-[840px] w-full max-w-[1200px] flex flex-col items-center bg-white pt-8`
          : `absolute top-[680px] md:top-[760px] xl:top-[735px] w-full max-w-[1200px] flex flex-col items-center bg-white pt-8`
      }
    >
      <div className="w-full flex flex-col md:flex-row gap-4 mb-12 lg:mb-24">
        <div className="flex flex-col w-full">
          <div className="flex flex-col pl-8 md:pl-0 md:items-center mb-5">
            <h1 className="font-semibold text-3xl tracking-wide">
              ExpressSales
            </h1>
            <p className="text-xl">Sale to a car company</p>
          </div>
          <div className="px-20 lg:px-12 flex flex-col w-full gap-3">
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold px-2 bg-yellow-200">
                  Free
                </h1>
                <p className="">No hidden costs or fees</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Trustworthy</h1>
                <p className="">Selected Carscout partners in your area</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Within 24 hours</h1>
                <p className="">Fast sale and secure payment</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Ease</h1>
                <p className="">Minimal effort in the sales process</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col pl-8 md:pl-0 md:items-center mb-5">
            <h1 className="font-semibold text-3xl tracking-wide">
              Advertisement
            </h1>
            <p className="text-xl">Sell your car on Carscout</p>
          </div>
          <div className="px-20 lg:px-12 flex flex-col w-full gap-3">
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold px-2 bg-yellow-200">
                  Free
                </h1>
                <p className="">Your basic ad is free</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Wide reach</h1>
                <p className="">Millions of potential buyers</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Good sales price</h1>
                <p className="">Negotiate and get a good sales price</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <Check size={24} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Increase sales oppurtunities
                </h1>
                <p className="">More visibility with a promotional package</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="w-full pl-8 md:pb-8 flex md:items-center md:justify-center">
        <h1 className="text-2xl">This is how the sales process works</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex flex-col w-full">
          <div className="flex flex-col pl-8 md:pl-0 md:items-center mb-10">
            <p className="text-lg">Sale to a car company</p>
          </div>
          <div className="px-20 lg:px-12 flex flex-col w-full gap-3">
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/1-black.ca8b32b6.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Enter licence plate number
                </h1>
                <p className="">Vehicle data in just a few clicks</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/2-black.2c50d104.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Valuation</h1>
                <p className="">Receive an online valuation immediately</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/3-black.544a6ab0.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Appointment</h1>
                <p className="">
                  Make an appointment in your area and receive no-obligation
                  offer
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/checkmark-sale.37df5d31.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Sale to a car company</h1>
                <p className="">
                  Contract, payment and transfer arranged immediately
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col pl-8 md:pl-0 md:items-center mb-10">
            <p className="text-xl">Sell your car on Carscout</p>
          </div>
          <div className="px-20 lg:px-12 flex flex-col w-full gap-3">
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/1-black.ca8b32b6.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Enter licence plate number
                </h1>
                <p className="">
                  Create an account, add photos and description
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/2-black.2c50d104.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Advertisement</h1>
                <p className="">Select basic or premium ad</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/3-black.544a6ab0.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Questions from potential buyers
                </h1>
                <p className="">Manage responses and appointments yourself</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/images/4-black.png"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Test drives and bids</h1>
                <p className="">
                  Handle test drives and negotiations yourself checkmark sale
                  icon
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/checkmark-sale.37df5d31.svg"
                alt=""
                width={28}
                height={28}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Sale</h1>
                <p className="">
                  Handle the contract, payment and transfer yourself
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="w-full pl-8 md:pb-8 flex md:items-center md:justify-center">
        <h1 className="text-2xl">Compare sales options</h1>
      </div>
      <div className="w-full flex flex-col items-center pb-12">
        <div className="flex flex-row items-stretch justify-between w-full max-w-[850px] mb-4 px-4">
          <h1 className="text-xl">ExpressSales</h1>
          <h1 className="text-xl">Advertisement</h1>
        </div>
        <div className="w-full flex flex-col items-center max-w-[850px] gap-12 px-4">
          <div className="flex flex-row gap-12 w-full justify-between">
            <div className="flex flex-row gap-0 items-center min-w-[120px] bg-yellow-200">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/speed.344012bc.svg"
                alt=""
                width={40}
                height={40}
              />
              <p>Speed</p>
            </div>
            <div className="flex flex-row gap-0 items-center min-w-[120px]">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
          </div>
          <div className="flex flex-row gap-12 w-full justify-between">
            <div className="flex flex-row gap-0 items-center min-w-[120px] bg-yellow-200">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/comfort.3e7a71c2.svg"
                alt=""
                width={40}
                height={40}
              />
              <p>Speed</p>
            </div>
            <div className="flex flex-row gap-0 items-center min-w-[120px]">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
          </div>
          <div className="flex flex-row gap-12 w-full justify-between">
            <div className="flex flex-row gap-0 items-center min-w-[120px]">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/_next/static/media/price.7cfa90bb.svg"
                alt=""
                width={40}
                height={40}
              />
              <p>Speed</p>
            </div>
            <div className="flex flex-row gap-0 items-center min-w-[120px] bg-yellow-200">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
          </div>
          <div className="flex flex-row gap-12 w-full justify-between">
            <div className="flex flex-row gap-0 items-center min-w-[120px]">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img
                src="https://www.autoscout24.nl/private-seller-unified-flow/assets/images/key.png"
                alt=""
                width={40}
                height={40}
              />
              <p>Speed</p>
            </div>
            <div className="flex flex-row gap-0 items-center min-w-[120px] bg-yellow-200">
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
              <img src={starImageString} alt="" width={18} height={18} />
            </div>
          </div>
        </div>
      </div>
      {/* Forth */}
      <div className="w-full pl-8 md:pb-8 flex md:items-center md:justify-center">
        <h1 className="text-3xl">Frequently Asked Questions</h1>
      </div>
      <div className="w-full flex flex-col items-center pb-12 max-w-[1200px]">
        <div className="flex flex-col w-full">
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Forth */}
      <div className="w-full pl-8 md:pb-8 flex md:items-center md:justify-center">
        <h1 className="text-3xl">Frequently Asked Questions</h1>
      </div>
      <div className="w-full flex flex-col items-center pb-12 max-w-[1200px]">
        <div className="flex flex-col w-full">
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {/* Forth */}
      <div className="w-full pl-8 md:pb-8 flex md:items-center md:justify-center">
        <h1 className="text-3xl">Frequently Asked Questions</h1>
      </div>
      <div className="w-full flex flex-col items-center pb-12 max-w-[1200px]">
        <div className="flex flex-col w-full">
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex flex-row items-center justify-start gap-4 pl-8 md:pl-20 lg:pl-32 text-xl font-light">
                  What is the difference between the two sales options?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center justify-center">
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                  <h1 className="text-xl mb-2">Advertisement on Carscout</h1>
                  <p className="px-24">
                    A public advertisement that allows you to sell your vehicle.
                    The advertisement can be viewed by both private individuals
                    and car dealers. If you are interested, they can contact you
                    directly for questions, scheduling a test drive and handling
                    the sale. The sales process takes an average of 30 days.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
