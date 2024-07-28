import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black">
            <div className="h-[13rem] w-[10rem]">
                <img
                    className="object-cover object-top w-full h-full"
                    src="https://pos.nvncdn.com/69e708-173581/ps/20240430_7orFbH856b.jpeg"
                    alt=""
                    srcset=""
                />
            </div>
            <div className="p-4">
                <h3 className="text- lg font-medium text-gray-900">JACKET</h3>
                <p className="mt-2 text-sm text-gray-500">ATHLETE TRACK JACKET</p>
            </div>
        </div>
    );
};

export default HomeSectionCard;
