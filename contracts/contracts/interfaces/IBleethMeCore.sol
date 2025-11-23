// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import {IBaseAdapter} from "./IBaseAdapter.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBleethMeCore {
    enum VAPoolState {
        UNINITIALIZED,
        BETTING,
        MIGRATION,
        LOCKING,
        WITHDRAWAL
    }

    enum BetSide {
        FOR,
        AGAINST
    }

    struct Bet {
        BetSide side;
        IERC20 token;
        uint256 amount;
    }

    event VAPoolCreated(bytes32 indexed poolId, address indexed attacker, address indexed victim);
    event BetPlaced(bytes32 indexed poolId, address indexed user);

    error InsufficientBetAmount();
    error BettingPeriodClosed();

    function createVaPool(
        IBaseAdapter attacker,
        IBaseAdapter victim,
        IERC20[] calldata rewardTokens,
        uint256 penalizationCoefficient,
        uint256 auctionDuration,
        uint256 liquidityMigrationDelay,
        uint256 lockDuration,
        uint256 snapshotLookupTime,
        Bet memory initialBet
    ) external returns (bytes32 poolId);

    function placeBet(uint256 vaPoolId, Bet memory bet) external;
    
    function getBet(uint256 vaPoolId, address better) external view returns (Bet memory);

    // TODO Enumerated mapping

    // Admin Functions
    function whitelistRewardToken(IERC20 token) external;
}
