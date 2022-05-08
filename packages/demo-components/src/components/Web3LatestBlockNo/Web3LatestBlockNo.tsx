import Web3 from 'web3';
import { useEffect, useState } from 'react';

const web3 = new Web3(import.meta.env.VITE_RPC_URL)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Web3LatestBlockNo = (_: any) => {
    const [latestBlockNo, setLatestBlockNo] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const blockNo = await web3.eth.getBlockNumber()
            setLatestBlockNo(blockNo)
        }

        if (latestBlockNo === 0) fetchData()
    }, [latestBlockNo])

    return <ul>
        <li>latestBlockNo: {latestBlockNo}</li>
    </ul>
}
