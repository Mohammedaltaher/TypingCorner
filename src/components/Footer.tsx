import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-muted text-muted-foreground p-4 text-center border-t mt-auto">
      <span>&copy; {new Date().getFullYear()} TypingCorner. All rights reserved.</span>
    </footer>
  );
}
