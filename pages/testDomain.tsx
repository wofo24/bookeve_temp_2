import Head from "next/head";
import Header from "../components/ui/Header";
import { Armchair, ArrowRight, ChevronDown, Home, HomeIcon, MapPin, MessageSquare, MessageSquareShare, Share, Share2, SquareArrowOutUpRight, StarIcon, Store } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/shared/collapsible";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/shared/tabs";
import Image from "next/image";
import { bookingsIcon, instagram, profilePicture, ratingsIcon } from "../utils/icons";
import { SearchInput } from "../components/ui/shared/search-input";
import RatingsReviews from "../components/RatingsReviews";
import { Button } from "../components/ui/shared/button";
import { BottomDrawer } from "../components/ui/shared/bottom-drawer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

export default function ArtistPage() {

    const [search, setSearch] = useState("");
    const [ratingsDrawer, setRatingsDrawerOpen] = useState(false)
    const [showPackageDetails, setShowPackageDetails] = useState(false)

    const services = [
        { id: 1, name: "Bridal Makeup", price: "₹5,000", description: "Complete bridal makeover with premium products." },
        { id: 2, name: "Hair Styling", price: "₹1,500", description: "Professional hair styling for any occasion." },
        { id: 3, name: "Party Makeup", price: "₹3,000", description: "Glamorous party makeup with a flawless finish." },
    ];

    const average = 4.8
    const totalRatings = 2953
    const distribution = [
        { stars: 5, percentage: 85 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 }
    ]
    const tags = [
        { id: 1, title: 'Exceptional Creativity', icon: '🌟', color: 'bg-amber-100' },
        { id: 2, title: 'Friendly & Reliable', icon: '👍', color: 'bg-green-100' },
        { id: 3, title: 'Premium Product', icon: '💎', color: 'bg-pink-100' },
        { id: 4, title: 'Excellent Service', icon: '🏆', color: 'bg-blue-100' },
        { id: 5, title: 'Great Value', icon: '💰', color: 'bg-purple-100' }
    ]
    // Swiper options
    const swiperOptions = {
        slidesPerView: 3.2,
        spaceBetween: 10,
        freeMode: true,
        grabCursor: true,
        loop: false,
        autoplay: false,
        breakpoints: {
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 3.2 }
        }
    }

    // Filter services based on search input
    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <Head>
                <title>Akanksha&apos;s Page</title>
            </Head>

            <Header />

            <div className="flex flex-col justify-center items-center bg-gray-100">
                {/* Container: Full screen on mobile, centered box on desktop */}
                <div className="relative w-full max-w-sm bg-white">
                    {/* Profile Image */}
                    <div className="flex flex-row justify-between items-center -mt-20 px-6">
                        <Image
                            src={profilePicture} // Replace with actual profile image
                            alt="Profile Picture"
                            className="border-white border-[5px]"
                            width={120}
                            height={120}
                            objectFit="cover"
                            style={{ borderRadius: "50%" }}
                        />
                        <div className="flex flex-col backdrop-blur-[17.5px] bg-white/30 shadow-md rounded-[8px]" style={{ padding: "8px 12px" }}>
                            <div className="flex gap-[4px] items-center">
                                <Image src={bookingsIcon} alt="Background Image" height={16} width={16} />
                                <span className="text-[20px] font-bold">2.5k</span>
                            </div>
                            <span className="text-[12px] font-[300px]">Bookings</span>
                        </div>
                        <div className="flex flex-col backdrop-blur-[17.5px] bg-white/30 shadow-md rounded-[8px]" style={{ padding: "8px 12px" }}>
                            <div className="flex gap-[4px] items-center">
                                <Image src={ratingsIcon} alt="Background Image" height={13.5} width={13.99} />
                                <div className="text-[14px] font-bold"><span className="text-[20px]">4.7 </span>/5</div>
                            </div>
                            <span className="text-[12px] font-[300px]">Ratings</span>
                        </div>
                    </div>

                    {/* Name and Description */}
                    <div className="flex flex-row justify-between items-center mt-2 px-6">
                        <span className="text-[24px] font-[800]">Akanksha</span>
                        <div className="w-[24px] h-[24px] border border-[rgba(222,222,231,1)] rounded-full flex justify-center items-center p-[4px] gap-[4px]">
                            <Share2 width={12} height={14} className="text-[rgba(102,106,123,1)]" />
                        </div>
                    </div>
                    <span className="text-[rgba(102,106,123,1)] text-[16px] font-[300] mt-1 px-6">Beauty Professional | Makeup Artist</span>
                    <div className="mt-2 px-6">
                        <SearchInput
                            // type="text"
                            onSearch={(value) => console.log(value)}
                            placeholder="Search for packages"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border border-[rgba(222,222,231,1)] text-[16px] font-[400] text-[rgba(90,90,90,1)] focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex items-center justify-between my-4 px-6">
                        <h2 className="text-[rgba(102,106,123,1)] text-[12px] font-[500]">OFFERINGS FOR YOU</h2>
                        <div className="border border-dashed border-[rgba(222,222,231,1)] h-[1px] w-[190px]"></div>
                    </div>
                </div>
                <div className="w-full max-w-sm px-0 mb-52">
                    <Tabs defaultValue="all">
                        <TabsList className="flex justify-between gap-[12px] bg-white px-6">
                            <TabsTrigger value="all" className="px-5 rounded-full bg-purple-600 text-white font-[400] text-[12px]">All</TabsTrigger>
                            <TabsTrigger value="location"
                                className="border border-[rgba(222,222,231,1)] rounded-full bg-white text-gray-700 flex items-center gap-[4px] font-[400] text-[12px]">
                                <Home height={"16px"} width={"16px"} />
                                At your location</TabsTrigger>
                            <TabsTrigger
                                value="salon"
                                className="border border-[rgba(222,222,231,1)] rounded-full bg-white text-gray-700 flex items-center gap-[4px] font-[400] text-[12px]">
                                <Store height={"16px"} width={"16px"} />
                                At salon
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className="m-0">
                            <Collapsible defaultOpen className="mb-2">
                                <CollapsibleTrigger className="w-full bg-white">
                                    <div className="m-0 flex flex-row justify-between w-full items-center hover:bg-accent transition-all duration-200 cursor-pointer p-6">
                                        <span className="m-0 text-[18px] font-[600] text-purple-600">
                                            Recommended for you
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 transform transition-transform duration-200 `}
                                        />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-6 bg-white">
                                    <div className="pb-6" onClick={() => setShowPackageDetails(true)}>
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <h3 className="font-[600] text-[16px] text-[rgba(34,37,51,1)]">HD Radiant Bride Makeup Package</h3>
                                                <p className="text-[12px] font-[300] text-[rgba(102,106,123,1)]">Starting from ₹ 2,900 • 1 hr 20 mins</p>

                                                <div className="flex items-center gap-1 my-1">
                                                    <div className="flex">
                                                        <span className="text-yellow-400">★</span>
                                                    </div>
                                                    <span className="text-[12px] font-[300] text-[rgba(102,106,123,1)]">(21 Ratings)</span>
                                                </div>

                                                <p className="text-[rgba(0,127,125,1)] text-[12px] font-[300] mb-2">Advance payment ₹500</p>

                                                <ul className="text-[12px] font-[300] text-[rgba(102,106,123,1)] space-y-1">
                                                    <li className="flex items-start gap-1">
                                                        <span className="min-w-3">•</span>
                                                        <span>Base & eye makeup with top brands like Kryolan / LA Girl</span>
                                                    </li>
                                                    <li className="flex items-start gap-1">
                                                        <span className="min-w-3">•</span>
                                                        <span>Includes basic hairstyling</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <Image
                                                    src={profilePicture}
                                                    alt="Bride Makeup"
                                                    className="w-24 h-24 rounded-md object-cover"
                                                />
                                                <button className="bg-white text-purple-600 border border-[rgba(123,60,229,1)] rounded-md px-4 py-1 text-[12px] font-[700]">
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <Collapsible className="mb-2">
                                <CollapsibleTrigger className="w-full bg-white">
                                    <div className="m-0 flex flex-row justify-between w-full items-center hover:bg-accent transition-all duration-200 cursor-pointer p-6">
                                        <span className="m-0 text-[18px] font-[600] text-purple-600">
                                            Recommended for you
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 transform transition-transform duration-200 `}
                                        />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-6 bg-white">
                                    <div className="pb-6">
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <h3 className="font-[600] text-[16px] text-[rgba(34,37,51,1)]">HD Radiant Bride Makeup Package</h3>
                                                <p className="text-[12px] font-[300] text-[rgba(102,106,123,1)]">Starting from ₹ 2,900 • 1 hr 20 mins</p>

                                                <div className="flex items-center gap-1 my-1">
                                                    <div className="flex">
                                                        <span className="text-yellow-400">★</span>
                                                    </div>
                                                    <span className="text-[12px] font-[300] text-[rgba(102,106,123,1)]">(21 Ratings)</span>
                                                </div>

                                                <p className="text-[rgba(0,127,125,1)] text-[12px] font-[300] mb-2">Advance payment ₹500</p>

                                                <ul className="text-[12px] font-[300] text-[rgba(102,106,123,1)] space-y-1">
                                                    <li className="flex items-start gap-1">
                                                        <span className="min-w-3">•</span>
                                                        <span>Base & eye makeup with top brands like Kryolan / LA Girl</span>
                                                    </li>
                                                    <li className="flex items-start gap-1">
                                                        <span className="min-w-3">•</span>
                                                        <span>Includes basic hairstyling</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <Image
                                                    src={profilePicture}
                                                    alt="Bride Makeup"
                                                    className="w-24 h-24 rounded-md object-cover"
                                                />
                                                <button className="bg-white text-purple-600 border border-[rgba(123,60,229,1)] rounded-md px-4 py-1 text-[12px] font-[700]">
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>

                        </TabsContent>
                        <TabsContent value="location">
                            <p className="text-gray-700 mt-2">Browse all available services.</p>
                        </TabsContent>
                    </Tabs>
                    <RatingsReviews setRatingsDrawerOpen={setRatingsDrawerOpen} />

                    <div className="px-6 bg-white w-full">
                        <div className="text-[16px] text-[rgba(34,37,51,1)] font-[600]">
                            Check out my latest content
                        </div>
                        <div className="flex border border-[rgba(222,222,231,1)] rounded-[10px] p-[12px] justify-between items-center text-[rgba(34,37,51,1)] w-full mt-2">
                            <div className="flex gap-[16px]">
                                <Image src={instagram} width={22} height={22} alt="Instagram Icon" />
                                <div className="flex flex-col gap-[2px]">
                                    <span className="text-[16px] font-[500]">
                                        payal.makeuparist
                                    </span>
                                    <span className="text-[12px] font-[300]">120k followers</span>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="uppercase font-[500] text-[10px] text-[rgba(43,146,255,1)] underline">View Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-6 bg-white pt-4">
                        <h2 className="text-[rgba(102,106,123,1)] text-[12px] font-[500] uppercase">Know More</h2>
                        <div className="border border-dashed border-[rgba(222,222,231,1)] h-[1px] w-[250px]"></div>
                    </div>
                    <Collapsible className="border-dashed border-b border-[rgba(222,222,231,1)]">
                        <CollapsibleTrigger className="w-full bg-white">
                            <div className="m-0 flex flex-row justify-between w-full items-center hover:bg-accent transition-all duration-200 cursor-pointer px-6 py-4">
                                <span className="m-0 text-[18px] font-[600] text-[rgba(34,37,51,1)]">
                                    Booking Policy
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 transform transition-transform duration-200 `}
                                />
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 bg-white">
                            <div className="pb-6">
                                Booking Policy content
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="border-dashed border-b border-[rgba(222,222,231,1)]">
                        <CollapsibleTrigger className="w-full bg-white">
                            <div className="m-0 flex flex-row justify-between w-full items-center hover:bg-accent transition-all duration-200 cursor-pointer px-6 py-4">
                                <span className="m-0 text-[18px] font-[600] text-[rgba(34,37,51,1)]">
                                    Cancellation Policy
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 transform transition-transform duration-200 `}
                                />
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-6 bg-white">
                            <div className="pb-6">
                                Cancellation Policy content
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="px-6 bg-white py-6 w-full">
                        <Button className="w-full rounded-xl bg-[rgba(34,37,51,1)] text-white font-semibold text-sm gap-2 ">
                            <MessageSquare width={18} height={18} /> Chat With Artist</Button>

                    </div>
                    <div className="bg-white px-6 pb-4">
                        <div className="w-full bg-gradient-to-r from-[#7B3CE5] to-[#6D17FF] border-[3px] border-[#7B3CE5] rounded-xl flex flex-col justify-between max-h-[160px]">
                            {/* Top Section */}
                            <div className="flex justify-between items-start p-[16px]">
                                <div>
                                    <span className="text-[20.6px] font-[800] text-white leading-[22.65px]">
                                        Create your
                                        <br />
                                        Bookeve profile
                                    </span>
                                </div>
                                <button className="bg-white text-[#7B3CE5] py-2 px-4 rounded-full font-semibold text-[12px] flex items-center gap-1 shadow-md">
                                    Create Now
                                    <SquareArrowOutUpRight width={14} height={14} />
                                </button>
                            </div>

                            {/* Bottom Line */}
                            <div className="bg-white text-sm text-[rgba(116,40,243,1)] text-center py-1 rounded-b-md">
                                Artists earn 4x more with a Bookeve profile
                            </div>
                        </div>
                    </div>
                    <BottomDrawer
                        // isOpen={manualOpen}
                        // onClose={() => setManualOpen(false)}
                        autoOpenInterval={60000}
                    >
                        <div className="py-4">
                            <h2 className="text-[18px] font-semibold leading-[130%] mb-4">Where would you like to take the service?</h2>

                            <div className="space-y-3">
                                <div className="border rounded-[8px] p-2 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="p-2">
                                            <HomeIcon height={18} width={20} />
                                        </div>
                                        <span className="text-[16px] font-normal">At your location</span>
                                    </div>
                                    <ArrowRight width={20} height={20} />
                                </div>

                                <div className="border rounded-lg p-2 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <div className="p-2">
                                                <Armchair height={18} width={20} />
                                            </div>
                                            <div className="text-[16px] font-normal">At Salon</div>
                                        </div>
                                        <div className="flex text-[12px] font-[300] text-gray-500 pl-2 gap-2"><MapPin width={16} height={16} />  9 Myrtle Lane Richmond Town, Bengaluru, KA</div>
                                    </div>
                                    <ArrowRight width={20} height={20} />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <div className="w-16 h-1 bg-gray-300 rounded-full" />
                            </div>
                        </div>
                    </BottomDrawer>
                    {
                        ratingsDrawer && (
                            <BottomDrawer isOpen={ratingsDrawer} onClose={() => setRatingsDrawerOpen(false)} step={1}>
                                <div className="">
                                    {/* title */}
                                    <div className="border-b border-[rgba(234,234,243,1)] p-2 gap-1 text-xl font-semibold leading-6">
                                        Ratings & Reviews
                                    </div>

                                    {/* Ratings & distribution */}
                                    <div className="flex justify-center items-center mb-6 relative gap-6">
                                        {/* Average rating */}
                                        <div className="text-center m-0">
                                            <span className="text-[42px] font-[800] text-[rgba(34,37,51,1)] block leading-[1]">{average}</span>
                                            <div className="flex justify-center mt-[2px] gap-[2px]">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon key={i} filled={true} width={10.5} height={10.12} />
                                                ))}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">{totalRatings.toLocaleString()} Ratings</div>
                                        </div>
                                        <div className="grow-2">
                                            <div className="space-y-1 mt-2">
                                                {distribution.map((item) => (
                                                    <div key={item.stars} className="flex items-center">
                                                        <span className="text-[10px] w-4 text-gray-600">{item.stars}</span>
                                                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-1">
                                                            <div
                                                                className="h-[4px] bg-[rgba(255,187,0,1)] rounded-full transition-all duration-1000"
                                                                style={{ width: `${item.percentage}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex flex-row gap-4 mb-6">
                                        {/* Rating distribution */}

                                        {/* Swiper container (takes remaining space) */}
                                        <div className="flex flex-col flex-1 overflow-hidden">
                                            <span className="text-[14px] font-[300] text-[rgba(102,106,123,1)] mb-2">
                                                Most of the customers mentioned
                                            </span>
                                            <Swiper
                                                modules={[FreeMode, Autoplay]}
                                                className="ratings-swiper mt-1"
                                                {...swiperOptions}
                                                spaceBetween={8} // set gap between slides
                                            >
                                                {tags?.map((tag) => (
                                                    <SwiperSlide key={tag.id} className="!w-auto" >
                                                        <div className={`border border-[rgba(222,222,231,1)] rounded-md p-[12px] w-[104px] h-[109px] flex flex-col hover:shadow-md transition-shadow justify-center`}>
                                                            <div className="mb-2 text-center">{tag.icon}</div>
                                                            <div className="font-semibold text-sm text-center leading-[18px] tracking-[0] text-[rgba(34,37,51,1)]">
                                                                {tag.title}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden mt-6">
                                        <h2 className="text-xl leading-6 font-bold text-gray-800 mb-2">All Reviews (100)</h2>
                                        <div className="flex flex-col gap-4">
                                            {[1, 2, 3].map((_, index) => (
                                                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                                                    {/* Reviewer Info */}
                                                    <div className="mb-1">
                                                        <h3 className="text-sm font-semibold text-gray-900">Mayuri Singh</h3>
                                                        <p className="text-[11px] text-gray-500">Bridal makeup • 2 days ago</p>
                                                    </div>

                                                    {/* Rating */}
                                                    <div className="flex items-center text-xs text-yellow-500 gap-1 mb-2">
                                                        <span>⭐</span>
                                                        <span>⭐</span>
                                                        <span>⭐</span>
                                                        <span>⭐</span>
                                                        <span className="text-gray-400">☆</span>
                                                        <span className="ml-1 text-gray-600 text-[11px]">4.2</span>
                                                    </div>

                                                    {/* Review Text */}
                                                    <p className="text-[12px] text-gray-700 leading-[1.3] mb-3">
                                                        A fresh take on the familiar local barbershop. We are a confluence between the warmth of the neighborhood barber and the sleekness that <span className="text-indigo-500 font-medium">Read more..</span>
                                                    </p>

                                                    {/* Images */}
                                                    <div className="flex gap-2">
                                                        {['/img1.jpg', '/img2.jpg', '/img3.jpg'].map((img, idx) => (
                                                            <img
                                                                key={idx}
                                                                src={img}
                                                                alt="preview"
                                                                className="w-[60px] h-[60px] object-cover rounded-md"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </BottomDrawer>
                        )
                    }
                    {
                        showPackageDetails && (
                            <BottomDrawer isOpen={showPackageDetails} onClose={() => setShowPackageDetails(false)} step={1}>
                                <div className="flex flex-col items-start gap-3 bg-white">
                                    <div className="flex flex-col items-start py-0 pb-2 w-full">
                                        <div className="flex flex-col items-start gap-2 w-full">
                                            <div className="flex flex-row justify-between items-center">
                                                <h2 className="w-72 font-bold text-lg leading-tight text-gray-900">HD Radiant Bride Makeup Package</h2>
                                                <div className="absolute right-4 flex flex-col justify-center items-end gap-1">

                                                    <div className="flex items-center p-1 gap-1 border border-gray-200 rounded">

                                                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 1L10 5.5L15 6L11.5 9.5L12.5 14.5L8 12L3.5 14.5L4.5 9.5L1 6L6 5.5L8 1Z" fill="#FFBB00" />
                                                        </svg>

                                                        <span className="text-xs font-semibold text-gray-900">4.8</span>
                                                    </div>

                                                    <span className="text-xs font-normal text-gray-500">123 ratings</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center items-center gap-1">
                                                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.5 1.5L12.5 1.5" stroke="#666A7B" stroke-width="1.33333" />
                                                </svg>
                                                <span className="text-xs font-medium text-gray-500">For Women</span>
                                            </div>

                                            <div className="flex flex-row justify-center items-center gap-1">
                                                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 2H12" stroke="#666A7B" stroke-width="1.33333" />
                                                    <path d="M8 8V4" stroke="#666A7B" stroke-width="1.33333" />
                                                </svg>
                                                <span className="text-xs font-medium text-gray-500">45 minutes • Available Today</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-3 w-full">
                                        <div className="flex flex-col justify-center items-start p-3 gap-3 w-full bg-white border border-gray-200 rounded-lg relative">
                                            <div className="flex flex-row items-center gap-1.5 w-full">
                                                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.07 1.9L4.93 14.1" stroke="#666A7B" stroke-width="1.5" />
                                                </svg>
                                                <span className="text-xs font-normal text-gray-500">At Salon</span>
                                            </div>

                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-xl font-bold text-gray-900">$45.00</span>

                                                <span className="text-sm font-normal text-gray-500 line-through">$60.00</span>

                                                <div className="flex justify-center items-center px-1.5 py-1 bg-green-100 rounded">
                                                    <span className="text-xs font-bold text-green-700">-25%</span>
                                                </div>
                                            </div>


                                            <button className="flex justify-center items-center w-full h-12 bg-purple-600 rounded-xl">
                                                <span className="text-base font-semibold text-white">Add to cart</span>
                                            </button>

                                            <div className="flex justify-center items-center p-1 px-2 w-full bg-green-50 rounded-md">
                                                <span className="text-xs font-medium text-green-800 text-center">Advance payment required - $10.00</span>
                                            </div>


                                            <div className="absolute top-4 right-4 flex flex-col justify-center items-end gap-1">

                                                <button className="text-xs font-normal text-gray-500 underline">Check salon price</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start w-full h-full bg-white">
                                        <div className="flex flex-col items-start p-3 gap-3 w-full h-full bg-purple-50 relative">
                                            {/* <div className="absolute w-36 h-36 -right-10 -top-12 bg-purple-600 opacity-40 blur-3xl overflow-hidden"></div>
                                            <div className="absolute w-36 h-36 -left-9 -bottom-9 bg-purple-600 opacity-40 blur-3xl overflow-hidden"></div> */}

                                            <h2 className="w-full h-5 font-bold text-base text-gray-900">Package Details</h2>

                                            <div className="flex flex-row justify-center items-center p-3 px-4 w-full bg-white rounded-xl">
                                                <p className="w-full h-22 font-light text-sm leading-snug text-gray-900">
                                                    This is a comprehensive package that includes all the services you need. Our professional staff will ensure you get the best experience possible.
                                                </p>
                                            </div>

                                            <div className="flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl">
                                                <div className="flex flex-row items-center w-full h-6">
                                                    <h3 className="w-full h-6 font-bold text-xl text-gray-900">Products Used</h3>
                                                </div>


                                                <div className="flex flex-row items-start gap-3 w-full overflow-x-scroll">

                                                    <div className="flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0">
                                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                        <p className="w-full h-4 font-bold text-xs leading-tight text-center text-gray-900">Product 1</p>
                                                    </div>


                                                    <div className="flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0">
                                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                        <p className="w-full h-4 font-bold text-xs leading-tight text-center text-gray-900">Product 2</p>
                                                    </div>


                                                    <div className="flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0">
                                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                        <p className="w-full h-8 font-bold text-xs leading-tight text-center text-gray-900">Product 3 With Longer Name</p>
                                                    </div>


                                                    <div className="flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0">
                                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                        <p className="w-full h-4 font-bold text-xs leading-tight text-center text-gray-900">Product 4</p>
                                                    </div>


                                                    <div className="flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0">
                                                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
                                                        <p className="w-full h-4 font-bold text-xs leading-tight text-center text-gray-900">Product 5</p>
                                                    </div>
                                                </div>


                                                <div className="absolute top-3.5 right-4 flex items-center p-0.5 w-5 h-5 bg-purple-50 rounded-full">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                                                        <path d="M6 4L10 8L6 12" stroke="#7B3CE5" stroke-width="1.33333" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center p-3 px-4 pb-4 gap-4 w-full bg-white rounded-xl">
                                                <h3 className="w-full h-6 font-bold text-xl text-gray-900">Service Steps</h3>

                                                <div className="flex flex-col items-center w-full gap-4 relative">

                                                    <div className="absolute w-0 h-full border border-gray-900 left-2.5 top-3"></div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">1</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">The stylist will consult with you to understand your preferences.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">2</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">We'll prepare the necessary tools and products for your service.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">3</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">The main service will be performed by our professional staff.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">4</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Final touches and adjustments will be made.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">5</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">We'll provide aftercare instructions and product recommendations.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">6</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">You'll have the opportunity to schedule your next appointment.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl">
                                                <div className="flex flex-col items-start w-full gap-1">
                                                    <h3 className="font-bold text-xl text-gray-900">Things Included</h3>
                                                    <p className="w-full text-sm font-light text-gray-500">All the items and services included in this package</p>
                                                </div>

                                                <div className="flex flex-col items-center w-full gap-4">

                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">1</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Professional consultation with our expert stylist.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">2</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Premium quality products used during service.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">3</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Complimentary beverage during your appointment.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">4</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Free follow-up appointment if needed.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">5</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">10% discount on product purchases after service.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">6</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Detailed aftercare instructions and guidance.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl">
                                                <div className="flex flex-col items-start w-full gap-1">
                                                    <h3 className="font-bold text-xl text-gray-900">Home Setup Requirements</h3>
                                                    <p className="w-full text-sm font-light text-gray-500">What you need to prepare before the service</p>
                                                </div>

                                                <div className="flex flex-col items-center w-full gap-4">

                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">1</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Clean, well-lit space with adequate ventilation.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">2</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Access to running water nearby.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">3</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Electrical outlet for any tools that may be needed.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">4</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Comfortable seating arrangement.</p>
                                                    </div>


                                                    <div className="flex flex-row items-start gap-3 w-full">
                                                        <div className="flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0">
                                                            <span className="text-xs font-bold text-white">5</span>
                                                        </div>
                                                        <p className="w-full text-base font-light leading-6 text-gray-900">Please ensure pets are kept in a separate area during the service.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start gap-4 w-full h-56 bg-white">
                                        <div className="flex flex-col items-start p-3 gap-3 w-full h-46 bg-purple-50 rounded-xl relative">
                                            {/* <div className="absolute w-36 h-36 -right-10 -top-12 bg-purple-600 opacity-40 blur-3xl z-0"></div>
                                            <div className="absolute w-36 h-36 -left-9 -bottom-9 bg-purple-600 opacity-40 blur-3xl z-0"></div> */}

                                            <h2 className="w-full h-5 font-bold text-base text-gray-900 z-10">Maintenance</h2>

                                            <div className="flex flex-col items-start gap-3 w-full z-10">
                                                <div className="flex flex-row items-center p-2.5 px-3 gap-3 w-full bg-white border border-gray-200 rounded-lg">

                                                    <div className="w-6 h-6 relative flex-shrink-0">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 3H22" stroke="#666A7B" stroke-width="2" />
                                                        </svg>
                                                    </div>

                                                    <div className="flex flex-col items-start gap-1 flex-grow">

                                                        <h3 className="text-sm font-bold text-gray-900">Pre-service maintenance</h3>

                                                        <p className="text-xs text-gray-500">Steps to prepare before your appointment</p>
                                                    </div>

                                                    <div className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                                                            <path d="M6 4L10 8L6 12" stroke="#666A7B" stroke-width="1.33333" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row items-center p-2.5 px-3 gap-3 w-full bg-white border border-gray-200 rounded-lg">
                                                    <div className="w-6 h-6 relative flex-shrink-0">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
                                                            <path d="M1 3H22" stroke="#666A7B" stroke-width="2" />
                                                        </svg>
                                                    </div>

                                                    <div className="flex flex-col items-start gap-1 flex-grow">

                                                        <h3 className="text-sm font-bold text-gray-900">Post-service maintenance</h3>

                                                        <p className="text-xs text-gray-500">Recommended aftercare for best results</p>
                                                    </div>

                                                    <div className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                                                            <path d="M6 4L10 8L6 12" stroke="#666A7B" stroke-width="1.33333" />
                                                        </svg>
                                                    </div>
                                                </div>


                                                <div className="flex flex-col items-start gap-3 w-full bg-white">

                                                    <div className="flex flex-row justify-center items-center gap-2 w-full">

                                                        <h3 className="flex-grow font-bold text-base leading-5 text-[#222533]">
                                                            Customisation title
                                                        </h3>

                                                        <div className="w-6 h-6 relative transform rotate-180">
                                                            <div className="absolute left-1/4 right-1/4 top-[62.5%] bottom-[12.5%] border-2 border-[#222533] transform rotate-180"></div>
                                                        </div>
                                                    </div>

                                                    <div className="hidden flex-row justify-center items-center py-1 px-2.5 gap-1 w-[165px] h-[30px] bg-[#EAEAF3] rounded-xl"></div>

                                                    <p className="w-full font-light text-sm leading-[22px] text-[#222533]">
                                                        You can choose which brand of makeup you want.
                                                    </p>

                                                    <div className="flex flex-col items-center p-2 gap-2 w-full bg-[#EAEAF3] rounded-xl">

                                                        <p className="w-full text-center font-light text-sm leading-[22px] text-[#222533]">
                                                            Contact us for customization
                                                        </p>

                                                        <button className="flex flex-row justify-center items-center px-4 gap-2.5 w-full h-12 bg-white border border-[#7B3CE5] rounded-xl">

                                                            <div className="w-6 h-6 relative">
                                                                <div className="absolute left-[12.5%] right-[12.5%] top-[15.62%] bottom-[12.5%] border-2 border-[#7B3CE5]"></div>
                                                            </div>


                                                            <span className="font-semibold text-base leading-[160%] text-[#7B3CE5]">
                                                                Chat with Artist
                                                            </span>


                                                            <div className="hidden w-6 h-6"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BottomDrawer>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

