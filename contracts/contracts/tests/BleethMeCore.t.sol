// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {BleethMeCore} from "../BleethMeCore.sol";
import {Test, console} from "forge-std/Test.sol";
import {MockERC20} from "./mocks/MockERC20.sol";


contract BleethMeCoreTest is Test {
    BleethMeCore counter;
    
    address constant OWNER = address(0xABCD);    

    function setUp() public {

        // Deploy BleethMeCore contract
        counter = new BleethMeCore(OWNER);
        
        // Deploy a mock ERC20 token for testing
        MockERC20 mockToken = new MockERC20(OWNER);

        vm.prank(OWNER);
        counter.setWhitelistRewardToken(mockToken, true);

    }
    

    function test_VaPoolCreation() public {
        
    }
}
