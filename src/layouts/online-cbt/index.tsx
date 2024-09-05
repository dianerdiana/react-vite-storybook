import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LayoutOnlineCBT({ children }: Props) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
