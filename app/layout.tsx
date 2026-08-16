import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Adaptive Study Platform", description:"A student-built workspace for focused study, active practice, and reflective learning.", other:{"codex-preview":"development"}, icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
