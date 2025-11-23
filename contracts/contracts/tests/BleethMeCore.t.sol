// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {BleethMeCore} from "../BleethMeCore.sol";
import {Test, console} from "forge-std/Test.sol";

contract BleethMeCoreTest is Test {
    BleethMeCore counter;

    function setUp() public {
        counter = new BleethMeCore(msg.sender);
    }

    function test_BetPlace() public {
      console.log();
    }
}
