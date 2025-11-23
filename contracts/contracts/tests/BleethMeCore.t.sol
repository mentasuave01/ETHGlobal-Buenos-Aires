// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {BleethMeCore} from "../BleethMeCore.sol";
import {Test, console} from "forge-std/Test.sol";
import {MockERC20} from "./mocks/MockERC20.sol";
import {MockAdapter} from "./mocks/MockAdapter.sol";


contract BleethMeCoreTest is Test {
    // Contracts
    BleethMeCore bleethMeCore;
    
    // Mock Tokens
    MockERC20 rewardTokenA;
    MockERC20 rewardTokenB;
    MockERC20 liquidityTokenA;
    MockERC20 liquidityTokenB;
    
    address constant OWNER = address(0xABCD);    

    function setUp() public {

        // Deploy BleethMeCore contract
        bleethMeCore = new BleethMeCore(OWNER);
        
        // Deploy mock ERC20 token for testing
        rewardTokenA = new MockERC20("Reward Token A", "RTA", OWNER);
        rewardTokenB = new MockERC20("Reward Token B", "RTB", OWNER);
        liquidityTokenA = new MockERC20("Liquidity Token A", "LTA", OWNER);
        liquidityTokenB = new MockERC20("Liquidity Token B", "LTB", OWNER);  
        
        // Whitelist reward tokens
        vm.startPrank(OWNER);
        bleethMeCore.setWhitelistRewardToken(rewardTokenA, true);
        bleethMeCore.setWhitelistRewardToken(rewardTokenB, true);
        vm.stopPrank();
        
        // Deploy mock adapters
        MockAdapter attackerAdapter = new MockAdapter(address(bleethMeCore));
        MockAdapter victimAdapter = new MockAdapter(address(bleethMeCore));



    }
    

    function test_VaPoolCreation() public {
       
    }
}
