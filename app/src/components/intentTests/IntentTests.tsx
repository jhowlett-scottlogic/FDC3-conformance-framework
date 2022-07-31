import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const IntentTests = () => (
	<Box
		sx={{
			flexGrow: 1,
		}}
	>
		<Stack gap={2}>
			<Box>
				<Typography variant="h5">FDC3 Agent Intent Test</Typography>
				<Typography>Tests that intents are handled correctly by the App.</Typography>
			</Box>

		</Stack>
	</Box>
);
