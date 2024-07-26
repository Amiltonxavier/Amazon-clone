import { MapPin, Menu, Search, ShoppingCart, User } from "lucide-react"
import Partiness from './assets/partiness.svg'
import watch from './assets/watch.png'
import phone from './assets/phone.png'
import fashtion from './assets/fashtion.png'
import box from './assets/box.png'
import Pc from './assets/pc.png'
import Laptop from './assets/laptop.png';
import Bg from './assets/bg.png'

function App() {

  return (
    <>
      <div className="pb-8">
        <section className="flex flex-col overflow-hidden">
          <div className="bg-dark-secondary text-white flex w-full  p-2 items-center gap-5">
            <span className="">
              <img src="./public/logo.svg" alt="logo da amazon" />
            </span>
            <div className="flex gap-5 flex-wrap">
              <div className="flex flex-1">
                <MapPin className="self-stretch" />
                <div className="flex flex-col flex-1">
                  <span className="text-xs">Deliver to John</span>
                  <span className="text-sm font-medium">Bangalore 5789</span>
                </div>
              </div>
              <div className="flex items-center">
                <select name="" id="" className="bg-gray-100 h-10 rounded-l-lg text-gray-900 px-2 outline-none">
                  <option value="" defaultValue={'all'} selected>All</option>
                </select>
                <input type="text" className="flex-1 h-10 outline-none w-[41.688rem]" />
                <button className="rounded-r-lg bg-yellow-secondary p-2 h-10 flex items-center justify-center">
                  <Search className="size-6 text-[#18181A]" />
                </button>
              </div>
              <div className="flex gap-5 item">
                <select name="" id="" className="bg-transparent border-none outline-none">
                  <option value="" defaultValue={'all'} selected>India</option>
                </select>
                <select name="" id="" className="bg-transparent border-none outline-none">
                  <option value="" defaultValue={'all'} selected>Hello, John Accounts<br /> & Lists</option>
                </select>
                <select name="" id="" className="bg-transparent border-none outline-none">
                  <option value="" defaultValue={'all'} selected>
                    <span>Return <br /></span> & Orders
                  </option>
                </select>
                <div className="flex gap-2 items-center">
                  <ShoppingCart />
                  Cart
                </div>
              </div>
            </div>
          </div>
          <nav className="bg-dark-alternative flex gap-4 items-center px-4 py-3">
            <ul className="flex-1 flex text-white gap-6 items-center">
              <li><button className="flex gap-2"><Menu /><span className="font-medium">All</span></button></li>
              <li className="font-medium"><a href="#">Fashion</a></li>
              <li className="font-medium"><a href="#">Mobiles</a></li>
              <li className="font-medium"><a href="#">Gift Ideas</a></li>
              <li className="font-medium">
                <select name="" id="" className="bg-transparent border-none outline-none">
                  <option value="" defaultValue={'all'} selected>
                    Prime
                  </option>
                </select>
              </li>
              <li className="font-medium"><a href="#">Amazon Pay</a></li>
              <li className="font-medium"><a href="#">Gift Cards</a></li>
              <li className="font-medium"><a href="#">Sports, Fitness & Outdoors</a></li>
              <li className="font-medium"><a href="#">Computers</a></li>
              <li className="font-medium"><a href="#">Customer Service</a></li>
            </ul>
            <div>
              <img src={Partiness} alt="Partiness" />
            </div>
          </nav>
        </section>
        <main className="px-20 space-y-8">
          <section className="w-full">
            <img src={Bg} alt="" className="w-full block bg-no-repeat bg-cover" />
            <div className="grid md:grid-cols-3 gap-10 px-20 -mt-56">
              <article className="bg-white p-5 space-y-4">
                <div className="inline-flex gap-4">
                  <div className="bg-[#ACB7B8] size-16 rounded-full flex justify-center items-center text-white p-4">
                    <User className="size-20" />
                  </div>
                  <div className="">
                    <h5 className="font-semibold">Hi, John</h5>
                    <span>Customer since 2017</span>
                  </div>
                </div>
                <h5 className="font-bold text-base">Top links for you</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={box} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Your Orders
                    </h5>
                  </div>
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={phone} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Mobiles & Acessories
                    </h5>
                  </div>
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={watch} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Watch for Men
                    </h5>
                  </div>
                  <div className="hover:scale-125 cursor-pointer duration-100 px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={fashtion} alt="" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">Fashition</h5>
                  </div>
                </div>
              </article>
              <article className="bg-white p-5 space-y-6 overflow-hidden">
                <h5 className="font-bold text-base">Up to 70% off <span /> Electronics<br /> clearance store</h5>
                <div className="space-y-8">
                  <div className="w-full">
                    <img src={Pc} alt="h-auto" className="w-full object-fill" />
                  </div>
                  <span><a href="#" className="text-sm text-blue-500 hover:text-blue-600">See more</a></span>
                </div>

              </article>
              <article className="space-y-6 overflow-hidden">
                <div className="p-5 bg-white space-y-2">
                  <h5 className="font-bold text-lg">Shop on Amazon App</h5>
                  <div className="space-y-5">
                    <p>Fast convenient and secure | Over 17 crore products<br /> in your pocket</p>
                    <span><a href="#" className="text-blue-500 hover:text-blue-600">Download Amazon App</a></span>
                  </div>
                </div>
                <div className="">
                  <img src={Laptop} alt="" className="w-full" />
                </div>
              </article>
            </div>
          </section>
          <section className="grid grid-cols-3 gap-10 px-[75px]">
            <div className="col-span-2 bg-secondaryHero h-[420px] bg-no-repeat w-full">
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-xl text-white font-bold">Prime Video Recommendation for you</h4>
                  <span>La La Land (English)</span>
                </div>
                <span className="block mt-auto">Start watching on Prime</span>
              </div>
            </div>
            <div className="col-span-1">
              <article className="bg-white p-5 space-y-4">
                <h5 className="font-bold text-base">Revamp your home in style</h5>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={box} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Your Orders
                    </h5>
                  </div>
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={phone} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Mobiles & Acessories
                    </h5>
                  </div>
                  <div className="px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={watch} alt="" className="h-20" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">
                      Watch for Men
                    </h5>
                  </div>
                  <div className="hover:scale-125 cursor-pointer duration-100 px-7 py-5 bg-gray-100 flex flex-col gap-5 justify-center items-center overflow-hidden">
                    <img src={fashtion} alt="" />
                    <h5 className="font-medium text-lg leading-6 text-primary-black text-center">Fashition</h5>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
