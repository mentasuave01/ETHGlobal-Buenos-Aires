// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

interface IBaseAdapter {
    // access controlled function
    function migrateLiquidity() external;
}
