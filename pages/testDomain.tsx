import Head from "next/head";
import Header from "../components/ui/Header";
import { Card } from "../components/ui/shared/card";
import { ChevronDown, Home, MapPin, Share2, ShareIcon, Store } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/shared/collapsible";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/shared/tabs";
import { Input } from "../components/ui/shared/input";
import Image from "next/image";
import { bookingsIcon, profilePicture, ratingsIcon } from "../utils/icons";
import { SearchInput } from "../components/ui/shared/search-input";

export default function AkankshaPage() {

    const [search, setSearch] = useState("");

    const services = [
        { id: 1, name: "Bridal Makeup", price: "₹5,000", description: "Complete bridal makeover with premium products." },
        { id: 2, name: "Hair Styling", price: "₹1,500", description: "Professional hair styling for any occasion." },
        { id: 3, name: "Party Makeup", price: "₹3,000", description: "Glamorous party makeup with a flawless finish." },
    ];

    // Filter services based on search input
    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <Head>
                <title>Akanksha's Page</title>
            </Head>

            <Header />

            <div className="flex justify-center items-center bg-gray-100">
                {/* Container: Full screen on mobile, centered box on desktop */}
                <div className="relative w-full max-w-sm bg-white p-6">
                    {/* Profile Image */}
                    <div className="flex flex-row justify-between items-center -mt-20">
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
                    <div className="flex flex-row justify-between items-center mt-2">
                        <span className="text-[24px] font-[800]">Akanksha</span>
                        <div className="w-[24px] h-[24px] border border-[rgba(222,222,231,1)] rounded-full flex justify-center items-center p-[4px] gap-[4px]">
                            <Share2 width={12} height={14} className="text-[rgba(102,106,123,1)]" />
                        </div>
                    </div>
                    <span className="text-[rgba(102,106,123,1)] text-[16px] font-[300] mt-1">Beauty Professional | Makeup Artist</span>
                    <div className="mt-2">
                        <SearchInput
                            // type="text"
                            onSearch={(value) => console.log(value)}
                            placeholder="Search for packages"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border border-[rgba(222,222,231,1)] text-[16px] font-[400] text-[rgba(90,90,90,1)] focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex items-center justify-between my-4">
                        <h2 className="text-[rgba(102,106,123,1)] text-[12px] font-[500]">OFFERINGS FOR YOU</h2>
                        <div className="border border-dashed border-[rgba(222,222,231,1)] h-[1px] w-[190px]"></div>
                    </div>

                    <Tabs defaultValue="recommended" className="mt-4">
                        <TabsList className="flex justify-between gap-[12px] mb-4">
                            <TabsTrigger value="all" className="py-2 px-5 rounded-full bg-purple-600 text-white font-[400] text-[12px]">All</TabsTrigger>
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
                        <TabsContent value="recommended">
                            <Collapsible defaultOpen>
                                <CollapsibleTrigger className="w-full">
                                    <div className="flex flex-row justify-between w-full items-center hover:bg-accent transition-all duration-200 cursor-pointer mb-4">
                                        <span className="text-[18px] font-[600] text-purple-600">
                                            Recommended for you
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 transform transition-transform duration-200 `}
                                        />
                                    </div>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="border-b pb-4 mb-4">
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

                                    {/* Second Service Card (Simplified) */}
                                    <div className="border-b pb-4 mb-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">Party makeup package</h3>
                                                <p className="text-sm text-gray-700">Starting from ₹ 2,900 • 1 hr 20 mins</p>
                                                <div className="flex items-center gap-1 my-1">
                                                    <div className="flex text-yellow-400">★</div>
                                                    <span className="text-sm text-gray-600">(6 Ratings)</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-center">
                                                <button className="bg-white text-purple-600 border border-purple-600 rounded-md px-4 py-1 text-sm font-medium">
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Third Service Card */}
                                    <div className="border-b pb-4 mb-4">
                                        <div className="flex justify-between items-center">
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">General makeup package</h3>
                                                <p className="text-sm text-gray-700">Starting from ₹ 2,900</p>

                                                <div className="flex items-center gap-1 my-1">
                                                    <div className="flex text-yellow-400">★</div>
                                                    <span className="text-sm text-gray-600">(8 Ratings)</span>
                                                </div>

                                                <ul className="text-sm text-gray-600 space-y-1">
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
                                                    alt="General Makeup"
                                                    className="w-24 h-24 rounded-md object-cover"
                                                />
                                                <button className="bg-white text-purple-600 border border-purple-600 rounded-md px-4 py-1 text-sm font-medium">
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fourth Service Card with Counter */}
                                    <div className="pb-4 mb-4">
                                        <div className="flex justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">HD Radiant Bride Makeup Package</h3>
                                                <p className="text-sm text-gray-700">Starting from ₹ 2,900 • 1 hr 20 mins</p>

                                                <div className="flex items-center gap-1 my-1">
                                                    <div className="flex text-yellow-400">★</div>
                                                    <span className="text-sm text-gray-600">(21 Ratings)</span>
                                                </div>

                                                <p className="text-green-600 text-sm">Advance payment ₹500</p>
                                            </div>

                                            <div className="flex flex-col justify-between items-end">
                                                <Image
                                                    src={profilePicture}
                                                    alt="Bride Makeup"
                                                    className="w-24 h-24 rounded-md object-cover"
                                                />
                                                <div className="flex items-center border border-purple-600 rounded-md overflow-hidden">
                                                    <button className="w-8 h-8 flex items-center justify-center text-purple-600">-</button>
                                                    <span className="w-8 h-8 flex items-center justify-center text-gray-800">1</span>
                                                    <button className="w-8 h-8 flex items-center justify-center text-purple-600">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </TabsContent>
                        <TabsContent value="all">
                            <p className="text-gray-700 mt-2">Browse all available services.</p>
                        </TabsContent>
                    </Tabs>


                </div>
            </div>
        </div>
    );
}

