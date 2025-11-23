// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {BleethMeCore} from "../BleethMeCore.sol";
import {Test, console} from "forge-std/Test.sol";
import {MockEntropy} from "./mocks/MockEntropy.sol";
import {MockERC20} from "./mocks/MockERC20.sol";
import {MockAdapter} from "./mocks/MockAdapter.sol";
import {MockPyth} from "./mocks/MockPyth.sol";

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BleethMeCoreTest is Test {
    // Fork
    uint256 baseFork;

    // Contracts
    BleethMeCore bleethMeCore;

    // Mocks
    MockERC20 rewardTokenA;
    MockERC20 rewardTokenB;
    MockERC20 liquidityTokenA;
    MockERC20 liquidityTokenB;
    MockAdapter attackerAdapter;
    MockAdapter victimAdapter;
    MockEntropy mockEntropy;
    MockPyth mockPyth;

    address constant OWNER = address(0xABCD);
    address constant USER1 = address(0x1111);

    function setUp() public {
        // Select Fork
        baseFork = vm.createFork("wss://base-rpc.publicnode.com");
        vm.selectFork(baseFork);

        // Deploy mock ERC20 token for testing
        rewardTokenA = new MockERC20("Reward Token A", "RTA");
        rewardTokenB = new MockERC20("Reward Token B", "RTB");
        liquidityTokenA = new MockERC20("Liquidity Token A", "LTA");
        liquidityTokenB = new MockERC20("Liquidity Token B", "LTB");

        // Deploy mocks
        attackerAdapter = new MockAdapter(address(bleethMeCore));
        victimAdapter = new MockAdapter(address(bleethMeCore));
        mockEntropy = new MockEntropy();
        mockPyth = new MockPyth();


        // Deploy BleethMeCore contract
        bleethMeCore = new BleethMeCore(OWNER, address(mockEntropy), address(mockPyth));

        // Whitelist reward tokens
        vm.startPrank(OWNER);
        bleethMeCore.setWhitelistRewardToken(rewardTokenA, bytes32(uint256(1)));
        bleethMeCore.setWhitelistRewardToken(rewardTokenB, bytes32(uint256(1)));
        vm.stopPrank();
    }

    function test_VaPoolCreation() public {
        IERC20[] memory rewardTokens = new IERC20[](2);
        rewardTokens[0] = rewardTokenA;
        rewardTokens[1] = rewardTokenB;

        vm.startPrank(USER1);
        rewardTokenA.mint(USER1, 10_000 ether);
        rewardTokenA.approve(address(bleethMeCore), 10_000 ether);
        bleethMeCore.createVaPool(
            attackerAdapter,
            victimAdapter,
            rewardTokens,
            100,
            3 days,
            1 days,
            30 days,
            block.timestamp - 30 days,
            rewardTokenA,
            1_000 ether
        );
        vm.stopPrank();

        console.log(block.timestamp);
    }
}
