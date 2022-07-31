import React, { ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { IntentTestRunner } from "./IntentTestRunner";

interface IntentTestLayoutProps {
	children: ReactNode
}

const IntentTestsLayout = ({ children }: IntentTestLayoutProps) => (
	<Box
		sx={{
			flexGrow: 1,
		}}
	>
		<Stack gap={2}>
			<Box>
				{ children }
			</Box>

		</Stack>
	</Box>
)

export const IntentTests = () => (
	<IntentTestsLayout>
		<Typography variant="h5">FDC3 Agent Intent Test</Typography>
		<Typography>Tests that intents are handled correctly by the App.</Typography>

		<IntentTestRunner />
	</IntentTestsLayout>
);
