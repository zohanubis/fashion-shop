import React from 'react';
import CartItem from './CartItem';
import { Button, Divider } from '@mui/material';

const Cart = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map((item) => (
                        <CartItem />
                    ))}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className="uppercase font-semibold opacity-60 pb-4"> Price Details</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-10">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>$469</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Disccount</span>
                                <span className="text-green-600">-$269</span>
                            </div>
                            <div className="flex justify-between pt-3 ">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between pt-3 text-green-600 font-semibold">
                                <span>Total Ammount</span>
                                <span>$1287</span>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            className="w-full mt-5"
                            sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
