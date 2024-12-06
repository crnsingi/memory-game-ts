import styled from "@emotion/styled";
import {toHHMMSS} from "../../utils/numberFormatter";

interface StatsFooter { 
    numberOfPlayers: 1 | 2;
    time: number;
    moves: number;
    currentPlayer: 1 | 2;
    firstPlayerScore: number;
    secondPlayerScore: number;
}

const StatsFooter: React.FC<StatsFooter> = ({
    numberOfPlayers,
    time,
    moves,
    currentPlayer,
    firstPlayerScore,
    secondPlayerScore,
}) => {
    const isFirstPlayerActive = currentPlayer === 1;
    const isSecondPlayerActive = currentPlayer === 2;

    return numberOfPlayers === 1 ? (
        <Wrapper numberOfPlayers={numberOfPlayers}>
            <StatBox>
                <SpaceAroundWrapper>
                    <span style={{color: "#6790a0"}}>Time</span>
                    <span style={{fontSize: "16px"}}>{toHHMMSS(time)}</span>
                </SpaceAroundWrapper>
            </StatBox>
            
        </Wrapper>
    )


}