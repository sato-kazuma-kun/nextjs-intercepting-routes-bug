import { Metadata } from "next";
import React from "react";

import LoginForm from "@/components/login-form";
import Modal from "@/components/modal";

export function metadata(): Metadata {
  return {
    title: "Login",
  };
}

export default function LoginPageModal() {
  return (
    <Modal>
      <h1 className="text-2xl mb-4">Login</h1>
      <LoginForm />
    </Modal>
  );
}
