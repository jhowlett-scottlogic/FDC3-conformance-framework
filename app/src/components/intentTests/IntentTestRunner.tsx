import React, { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PlayArrowRounded } from "@mui/icons-material";
import { TestSummary } from "../agentTests/TestSummary";
import { Stats } from "mocha";

interface HeaderLayoutProps {
    children: ReactNode
}

type TestsStatus = "idle" | "running";

const statuses = {
	idle: "Run Intent Tests",
	running: "Intent Tests Running",
};

const HeaderLayout = ({ children }: HeaderLayoutProps) => (
    <Box
        sx={{
            position: "sticky",
            top: 0,
        }}
    >
        <Box
            sx={{
                display: "flex",
                gap: 2,
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                backgroundColor: "white",
                boxShadow: "0 0 0.5rem 1rem white",
            }}
        >

            { children }

        </Box>
    </Box>
)

const Header = () => {
    const [status, setStatus] = useState<TestsStatus>("idle");
	const [successfulTests, setSuccessfulTests] = useState<number>(0);
	const [failedTests, setFailedTests] = useState<number>(0);
    const [testStats, setTestStats] = useState<Stats | null>(null);

    const runTest = () => {
        setStatus('running');
        setTimeout(() => {
            setStatus('idle');
        }, 3000);
    }

    return (
        <HeaderLayout>

            <LoadingButton
                color="primary"
                onClick={runTest}
                endIcon={<PlayArrowRounded />}
                loading={status === "running"}
                loadingPosition="end"
                variant="contained"
            >
                {statuses[status]}
            </LoadingButton>

            <TestSummary
                status={status}
                successfulTests={successfulTests}
                failedTests={failedTests}
                testStats={testStats}
            />

        </HeaderLayout>
    )
}

export const IntentTestRunner = () => (
    <Box
        sx={{
            display: "grid",
            gridTemplateRows: "auto 1fr",
            gap: 2,
            position: "relative",
        }}
    >
        <Header />
    </Box>
)
