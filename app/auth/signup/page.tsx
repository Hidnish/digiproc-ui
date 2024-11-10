"use client";
import { Button, NavLink, Stack, TextInput, useMantineTheme } from "@mantine/core";
import NextLink from "next/link";
import createUser from "@/app/auth/signup/create-user.action";
import { useFormState } from "react-dom";

export default function Signup() {
  const [state, formAction] = useFormState(createUser, { error: "" });
	const theme = useMantineTheme()

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack gap={10}>
        <TextInput
          name="email"
          label="Email"
          type="email"
          error={state.error}
        />
        <TextInput
          name="password"
          label="Password"
          type="password"
          error={state.error}
        />
        <Button type="submit" variant="filled" color={theme.colors.primary[9]}>
          Signup
        </Button>
        <NavLink component={NextLink} href="/auth/login" label="You already have an account?" />
      </Stack>
    </form>
  );
}