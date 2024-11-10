import { Box } from "@mantine/core";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box className="h-screen flex items-center justify-center">
			{children}
		</Box>
  );
}