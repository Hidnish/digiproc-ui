"use client";

import { Button, NavLink, Stack, TextInput, useMantineTheme } from "@mantine/core";
import NextLink from "next/link";
import login from "./login.action";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, formAction] = useFormState(login, { error: "" });
  const theme = useMantineTheme();

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
          Log In
        </Button>
        <NavLink component={NextLink} href="/auth/signup" label="Do not have an account?" />
      </Stack>
    </form>
  );
}